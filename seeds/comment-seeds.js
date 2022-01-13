const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Enjoy your space',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'Liverpool is the best!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'I hope Bottas wins this year',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'great deals',
        user_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;