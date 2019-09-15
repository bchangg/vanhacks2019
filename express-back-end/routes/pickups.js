const express = require( 'express' );
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')( knexfile.test );

router.get( '/org/:orgId/pickup', ( req, res ) => {

    let orgId = req.params.orgId;
    
    knex.select('*')
        .from('pickups')
        .where({
            'organization_id': orgId
        })
        .then( result => {
            res.json( result );
        });
});

router.get( '/org/:orgId/pickup/:postId', ( req, res ) => {

    let orgId = req.params.orgId;
    let postId = req.params.postId;
    
    knex.select('*')
        .from('pickups')
        .where({
            'post_id': postId,
            'organization_id': orgId
        })
        .then( result => {
            res.json( result );
        });
});

router.post( '/org/:orgId/pickup/:postId', ( req, res ) => {

    let orgId  = req.params.orgId;
    let postId = req.params.postId;
    
    knex.select('*')
        .from('pickups')
        .where({
            'post_id': postId,
            'organization_id': orgId
        })
        .then( result => {
            if ( result.length > 0 ) {
                res.json({ message: 'Sorry, this item has already been claimed.' });
            } else {
                let pickupTime = req.body.pickup_time;

                knex( 'pickups' ).insert({
                    'post_id': postId,
                    'organization_id': orgId,
                    'datetime': pickupTime,
                    'status': 'CLAIMED'
                }).then( result => {
                    console.log( result );
                    res.json({
                        message: 'Item posted with success!'
                    });
                });
            }
        });
});

module.exports = router;
