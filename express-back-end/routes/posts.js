const express = require( 'express' );
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')( knexfile.test );

router.get( '/posts', ( req, res ) => {
    knex
        .select([
            'posts.id',
            'title',
            'quantity',
            'notes',
            'pickup_deadline',
            'pickup_location',
            'item_type',
            'url'
        ])
        .from('posts')
        .leftJoin('post_images', 'posts.id', 'post_images.post_id')
        .then( result => {
            res.json( result );
        });
});

router.get( '/posts/:postId', ( req, res ) => {
    let postId = req.params.postId;

    knex
        .select('*')
        .from('posts')
        .where({ 'id': postId })
        .then( result => {
            res.json( result );
        });
});

module.exports = router;
