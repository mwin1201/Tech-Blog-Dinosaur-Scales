const Post = require('../models/Post');

const postData = [
    {
        title: 'Massive computer sale!',
        post_url: 'www.apple.com',
        user_id: 2
    },
    {
        title: 'Formula 1 racing rocks',
        post_url: 'www.formula1.com',
        user_id: 3
    },
    {
        title: 'All you need to know about the Premier League',
        post_url: 'www.premierleague.com',
        user_id: 1
    },
    {
        title: 'Why you should move to Minnesota',
        post_url: 'www.google.com',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;