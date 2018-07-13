const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const render = require('posthtml-render');

class PHTMLAsset extends HTMLAsset {
	constructor(name, options) {
		super(name, options);
		this.type = 'js';
	}
	
	generate() {
		const exports = JSON.stringify(
			this.isAstDirty ? render(this.ast) : this.contents
		);
		return `module.exports = ${exports};`;
	}
}

module.exports = PHTMLAsset;