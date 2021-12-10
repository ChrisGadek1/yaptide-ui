import { DifferentialModifier } from '../../util/Scoring/ScoringQtyModifiers';
import { ScoringQuantity } from '../../util/Scoring/ScoringQuantity';

export class RemoveDifferentialModifierCommand {
	/**
	 * @param {Editor} editor
	 * @param {ScoringQuantity} object
	 * @param {DifferentialModifier} modifier
	 * @constructor
	 */
	constructor(editor, object, modifier) {
		this.editor = editor;
		this.object = object;
		this.modifier = modifier;

		this.type = 'RemoveDifferentialModifierCommand';
		this.name = 'RemoveDifferentialModifierCommand';
	}

	execute() {
		this.object.removeModifier(this.modifier);
		this.editor.signals.scoringQuantityChanged.dispatch(this.object);
	}

	undo() {
		this.object.addModifier(this.modifier);
		this.editor.signals.scoringQuantityChanged.dispatch(this.object);
	}

	toJSON() {
		const output = super.toJSON(this);
		output.object = this.object.toJSON();
		output.modifier = this.modifier.toJSON();
		return output;
	}

	fromJSON(json) {
		super.fromJSON(json);
		this.object =
			this.editor.detectManager.getGeometryByUuid(json.object.uuid) ??
			ScoringQuantity.fromJSON(this.editor, json.object);
		this.modifier = DifferentialModifier.fromJSON(json.modifier);
	}
}
