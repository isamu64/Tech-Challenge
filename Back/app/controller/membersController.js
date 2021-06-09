//Import
const dataMapper = require('../dataMapper');

const membersController = {

    home:  (request, response) => {

        dataMapper.getAllMembers ((error, results) => {

            if (error) {
                console.log(error);
                response.send(`pas d'équipage`);
                return;
            }

            const members = data.rows;

            response.send(members);

            
        })
    },

    create: (request, response) => {

    }
}
















module.exports = membersController;