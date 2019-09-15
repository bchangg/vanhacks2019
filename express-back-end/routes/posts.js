const express = require( 'express' );
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')( knexfile.test );

router.get( '/posts', ( req, res ) => {
    knex
        .select('*')
        .from('posts')
        .then( result => {
            res.json( result );
        });
});

module.exports = router;
