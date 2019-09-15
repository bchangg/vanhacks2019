module.exports = function( App ) {
	App.use( '/api/v1', require( './posts' ) );
	App.use( '/api/v1', require( './org' ) );
	App.use( '/api/v1', require( './pickups' ) );

	App.use( '/', require( './users' ) );
};
