//Import
const client = require('./database');

const dataMapper = {

    getAllMembers: (callback) => {
        
        const sql = 'SELECT * FROM "members"';

        client.query(sql, callback)
    },

    addAMember:(callback) => {

    }

}

module.exports = dataMapper;