import { Object3D } from 'three';

import { useSmartWatchEditorState } from '../../../../../util/hooks/signals';
import { SetQuantityValueCommand } from '../../../../js/commands/SetQuantityValueCommand';
import { YaptideEditor } from '../../../../js/YaptideEditor';
import {
	DETECTOR_KEYWORD_OPTIONS,
	MEDIUM_KEYWORD_OPTIONS
} from '../../../../Simulation/Scoring/ScoringOutputTypes';
import { isQuantity, ScoringQuantity } from '../../../../Simulation/Scoring/ScoringQuantity';
import { ObjectSelectPropertyField } from '../fields/ObjectSelectPropertyField';
import {
	ConditionalNumberPropertyField,
	ConditionalObjectSelectPropertyField
} from '../fields/PropertyField';
import { PropertiesCategory } from './PropertiesCategory';

export function QuantityConfiguration(props: { editor: YaptideEditor; object: Object3D }) {
	const { object, editor } = props;

	const { state: watchedObject } = useSmartWatchEditorState(editor, object as ScoringQuantity);

	const visibleFlag = isQuantity(watchedObject);

	const setQuantityValue = (key: keyof ScoringQuantity, value: unknown) => {
		editor.execute(new SetQuantityValueCommand(editor, watchedObject.object, key, value));
	};

	const fields = (
		<>
			<ObjectSelectPropertyField
				label='Quantity type'
				value={watchedObject.keyword}
				options={DETECTOR_KEYWORD_OPTIONS}
				onChange={v => setQuantityValue('keyword', v.uuid)}
			/>

			{['NEqvDose', 'NKERMA'].includes(watchedObject.keyword) && (
				<>
					<ObjectSelectPropertyField
						label='Medium'
						value={watchedObject.medium ?? MEDIUM_KEYWORD_OPTIONS.WATER}
						options={MEDIUM_KEYWORD_OPTIONS}
						onChange={v => setQuantityValue('medium', v.uuid)}
					/>
				</>
			)}

			{Object.keys(editor.scoringManager.getFilterOptions()).length > 0 && (
				<ConditionalObjectSelectPropertyField
					label='Filter'
					value={watchedObject.filter?.uuid ?? ''}
					options={editor.scoringManager.getFilterOptions()}
					onChange={v =>
						setQuantityValue('filter', editor.scoringManager.getFilterByUuid(v.uuid))
					}
					enabled={watchedObject.hasFilter}
					onChangeEnabled={v => setQuantityValue('hasFilter', v)}
				/>
			)}

			<ConditionalNumberPropertyField
				label='Rescale'
				value={watchedObject.rescale}
				onChange={v => setQuantityValue('rescale', v)}
				enabled={watchedObject.hasRescale}
				onChangeEnabled={v => setQuantityValue('hasRescale', v)}
			/>
		</>
	);

	return (
		<PropertiesCategory
			category='Quantity configuration'
			visible={visibleFlag}>
			{visibleFlag && fields}
		</PropertiesCategory>
	);
}
