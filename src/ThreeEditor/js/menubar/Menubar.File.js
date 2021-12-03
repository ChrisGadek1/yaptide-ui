import { UIHorizontalRule, UIPanel } from '../libs/ui.js';
import { createOption } from './Menubar.js';

function MenubarFile(editor) {
	const container = new UIPanel();
	container.setClass('menu');

	const title = new UIPanel();
	title.setClass('title');
	title.setTextContent('File');
	container.add(title);

	const options = new UIPanel();
	options.setClass('options');
	container.add(options);

	// New

	options.add(
		createOption('option', 'New', () => {
			window.confirm('Any unsaved data will be lost. Are you sure?') && editor.clear();
		}),
		new UIHorizontalRule()
	);

	// Open Editor from file
	const form = document.createElement('form');
	form.style.display = 'none';
	document.body.appendChild(form);

	const fileInput = document.createElement('input');
	fileInput.multiple = true;
	fileInput.type = 'file';
	fileInput.addEventListener('change', () => {
		editor.loader.loadFiles(fileInput.files);
		form.reset();
	});
	form.appendChild(fileInput);

	options.add(
		createOption('option', 'Open', () => {
			fileInput.click();
		}),
		new UIHorizontalRule()
	);

	// Save Editor to file
	const link = document.createElement('a');
	function save(blob, filename) {
		if (link.href) {
			URL.revokeObjectURL(link.href);
		}

		link.href = URL.createObjectURL(blob);
		link.download = filename || 'data.json';
		link.dispatchEvent(new MouseEvent('click'));
	}
	function saveString(text, filename) {
		save(new Blob([text], { type: 'text/plain' }), filename);
	}

	options.add(
		createOption('option', 'Save', () => {
			editor.updateUserData();

			let output = editor.toJSON();

			try {
				output = JSON.stringify(output, null, '\t');
				output = output.replace(/[\n\t]+([\d.e\-[\]]+)/g, '$1');
			} catch (e) {
				output = JSON.stringify(output);
			}

			const fileName = window.prompt('Name of the file', 'editor');

			if (fileName) saveString(output, `${fileName}.json`);
		})
	);

	return container;
}

export { MenubarFile };
