const express = require( 'express' );
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')( knexfile.test );

router.post( '/users', ( req, res ) => {
    res.json({message:'Success',code:200});
});