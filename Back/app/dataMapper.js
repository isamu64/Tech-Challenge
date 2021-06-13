//Import
const client = require('./database');

const dataMapper = {

    getAllMembers: (callback) => {
        
        const sql = 'SELECT * FROM "members"';        
        client.query(sql, callback)
    },

    addAMember:(data,callback) => {
        
        const sql = `INSERT INTO "members" ("name") VALUES ('${data.name}')`;
        client.query(sql, callback)
    }

}

module.exports = dataMapper;