const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

// get all posts for the homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'post_url', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts
            // need to add loggedIn data
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});