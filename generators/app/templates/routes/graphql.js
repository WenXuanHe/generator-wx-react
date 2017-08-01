
const router = require('koa-router')();
const { graphqlKoa } = require('graphql-server-koa');
const schema = require('../server/graph/index');

router.post('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa({ schema: schema }));

module.exports = router;
