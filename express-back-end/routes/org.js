const express = require( 'express' );
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')( knexfile.test );

router.get( '/org', ( req, res ) => {
    knex
        .select(['id','name','phone_no'])
        .from('organization')
        .then( result => {
            res.json( result );
        });
});

router.get( '/org/:orgId', ( req, res ) => {
    let orgId = req.params.orgId;
    
    knex.select(['id','name','phone_no','email'])
        .from('organization')
        .where({id: orgId})
        .then( result => {
            res.json( result );
        });
});

module.exports = router;
