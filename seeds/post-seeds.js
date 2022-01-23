const Post = require('../models/Post');

const postData = [
    {
        title: 'Massive computer sale!',
        post_url: 'https://www.microcenter.com/category/4294964325,518/computers',
        user_id: 2
    },
    {
        title: 'Formula 1 racing rocks',
        post_url: 'https://www.formula1.com/',
        user_id: 3
    },
    {
        title: 'All you need to know about the Premier League',
        post_url: 'https://www.premierleague.com/matchweek/6684/blog',
        user_id: 1
    },
    {
        title: 'Why you should move to Minnesota',
        post_url: 'https://www.getbellhops.com/blog/moving-to-minnesota/',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;