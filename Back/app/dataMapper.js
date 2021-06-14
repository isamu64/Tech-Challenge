//Import
const client = require('./database');

const dataMapper = {

    getAllMembers: (callback) => {
        
        const sql = 'SELECT * FROM "members"';        
        client.query(sql, callback)
    },

    addAMember:(memberInfo,callback) => {
        
        const sql = `INSERT INTO "members" ("name") VALUES ('${memberInfo.name}')`;
        client.query(sql, callback)
    }

}

module.exports = dataMapper;