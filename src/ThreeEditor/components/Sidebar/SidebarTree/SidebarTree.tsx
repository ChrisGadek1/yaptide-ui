import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Tree, TreeMethods } from '@minoru/react-dnd-treeview';
import { Object3D } from 'three';
import './SidebarTree.style.css';
import { Editor } from '../../../js/Editor';
import { SimulationElement } from '../../../Simulation/Base/SimulationElement';
import { SidebarTreeItem, TreeItem } from './SidebarTreeItem';
import { Divider } from '@mui/material';
import { hasVisibleChildren } from '../../../../util/hooks/useKeyboardEditorControls';
import { ChangeObjectOrderCommand } from '../../../js/commands/ChangeObjectOrderCommand';
import { generateUUID } from 'three/src/math/MathUtils';

type TreeSource = (Object3D[] | Object3D)[];

export function SidebarTree(props: {
	editor: Editor;
	sources: TreeSource;
	dragDisabled?: boolean;
}) {
	const { editor, sources } = props;

	const treeRef = useRef<TreeMethods>(null);
	const treeId = useMemo(() => generateUUID(), []);

	const buildOption = useCallback(
		(
			object: Object3D | SimulationElement | undefined,
			items: Object3D[] | undefined,
			parentId: number,
			index?: number
		): TreeItem[] => {
			if (!object) return [];

			if (!items) items = object.children;

			let children: TreeItem[] = [];
			if (hasVisibleChildren(object))
				children = items
					.map((child, idx) => buildOption(child, child.children, object.id, idx))
					.flat();

			return [
				{
					id: object.id,
					parent: parentId,
					droppable: true,
					text: object.name,
					data: {
						object: object,
						treeId: treeId,
						index: index
					}
				},
				...children
			];
		},
		[treeId]
	);

	const [treeData, setTreeData] = useState<TreeItem[]>([]);

	const refreshTreeData = useCallback(() => {
		const options = sources
			.flat()
			.flatMap((source, idx) => buildOption(source, source.children, 0, idx));
		setTreeData(options);
	}, [buildOption, sources]);

	const handleSelected = (object: Object3D | null) => {
		if (!object) return;

		objectRefs.current
			.get(object.uuid)
			?.scrollIntoView({ behavior: 'smooth', block: 'center' });
	};

	useEffect(() => {
		refreshTreeData();

		editor.signals.editorCleared.add(refreshTreeData);
		editor.signals.sceneGraphChanged.add(refreshTreeData);
		editor.signals.objectChanged.add(refreshTreeData);
		editor.signals.objectSelected.add(handleSelected);

		return () => {
			editor.signals.editorCleared.remove(refreshTreeData);
			editor.signals.sceneGraphChanged.remove(refreshTreeData);
			editor.signals.objectChanged.remove(refreshTreeData);
			editor.signals.objectSelected.remove(handleSelected);
		};
	}, [buildOption, editor, refreshTreeData]);

	const objectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

	const canDrop = (source: TreeItem | undefined, dropTargetId: string | number): boolean => {
		if (!source) return false;

		if (source.data?.treeId !== treeId) return false;

		return source.parent === dropTargetId; // only allow drop on same parent
	};

	return (
		<Tree
			classes={{
				root: 'editor-sidebar-tree'
			}}
			ref={treeRef}
			tree={treeData}
			rootId={0}
			onDrop={(_tree, { dragSource, relativeIndex }) => {
				if (relativeIndex === undefined)
					return console.warn(
						'relativeIndex is undefined. Probably you need disable sort option.'
					);

				if (dragSource?.data) {
					if (
						relativeIndex === dragSource.data.index ||
						relativeIndex - 1 === dragSource.data.index
					)
						return; // no change needed

					let newPosition =
						relativeIndex > (dragSource.data.index ?? 0)
							? relativeIndex - 1
							: relativeIndex;

					editor.execute(
						new ChangeObjectOrderCommand(editor, dragSource.data.object, newPosition)
					);
				}
			}}
			canDrop={(_, { dragSource, dropTargetId }) => {
				return canDrop(dragSource, dropTargetId);
			}}
			canDrag={node => !props.dragDisabled}
			sort={false}
			insertDroppableFirst={false}
			dropTargetOffset={5}
			placeholderRender={() => <Divider sx={{ borderBottomWidth: t => t.spacing(1) }} />}
			render={(node, { depth, isOpen, onToggle }) => (
				<SidebarTreeItem
					treeRef={treeRef.current}
					node={node}
					depth={depth}
					isOpen={isOpen}
					onToggle={onToggle}
					objectRefs={objectRefs}
					editor={editor}
				/>
			)}
		/>
	);
}
