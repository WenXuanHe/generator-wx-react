const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;
const base_url = require ('../config').base_url;

const client = new Lokka({
    transport: new Transport(`${base_url}/graphql`)
})
//fragment 是代表公用的字段
const todoInfo = client.createFragment(`
  fragment on Todo {
    _id
    text
    complete
    createAt
  }
`)

 const getAuthor = () => {
    return client.query(`
  {
    author(id: 1) {
        firstName
        lastName
        posts {
            title
            votes
        }
    }
  }
  `)
}
module.exports = {
    getAuthor
}

