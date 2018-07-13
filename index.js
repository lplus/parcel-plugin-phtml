module.exports = function( bundler ) {
	bundler.addAssetType( 'phtml', require.resolve('./PHTMLAsset'));
};
