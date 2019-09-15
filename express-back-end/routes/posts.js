const express = require('express');
const router = express.Router();
const knexfile = require('../knexfile');
const knex = require('knex')(knexfile.test);

router.get('/posts', (req, res) => {
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
        .then(result => {
            res.json(result);
        });
});

router.post('/posts', (req, res) => {
    let postObj = {
        title: req.body.title,
        quantity: req.body.quantity,
        notes: req.body.notes,
        pickup_deadline: req.body.pickup_deadline,
        pickup_location: req.body.pickup_location,
        phone: req.body.phone,
        item_type: req.body.item_type
    };

    knex('posts')
        .insert(postObj)
        .then(results => {
            if (results.rowCount && results.rowCount > 0) {
                res.json({
                    message: "Post created with success!"
                })
            }
        });
});

router.get('/posts/:postId', (req, res) => {
    let postId = req.params.postId;

    knex
        .select(['posts.*', 'post_images.url'])
        .from('posts')
        .where({ 'posts.id': postId })
        .leftJoin('post_images', 'posts.id', 'post_images.post_id')
        .then(result => {

            let obj = result.map( r => {
                return {
                    id: r.id,
                    title: r.title,
                    quantity: r.quantity,
                    notes: r.notes,
                    pickup_deadline: r.pickup_deadline,
                    pickup_location: r.pickup_location,
                    phone: r.phone,
                    item_type: r.item_type,
                    url: r.url,
                    address: "509 E 28th Avenue",
                    address2: "Basement",
                    city: "Vancouver",
                    province: "BC",
                    zipcode: "V5V2N4",
                    country: "Canada"   
                };
            });

            res.json( obj );
        });
});

module.exports = router;
