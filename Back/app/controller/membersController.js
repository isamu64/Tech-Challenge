//Import
const dataMapper = require('../dataMapper');

const membersController = {

    home:  (request, response) => {

        dataMapper.getAllMembers ((error, result) => {

            if (error) {
                console.error(error);
                response.send(`pas d'équipage`);
                return;
            }
            console.log(result);
            const members = result.rows;
            
            response.send(members);

            
        })
    },

    addMember: (request, response) => {

        //console.log(request.body);
        const memberInfo = request.body;

        dataMapper.addAMember (memberInfo,(error, result) => {


            if (error) {
                console.error(error);
                response.status(500).send(error);
                return;               
            }            
                response.redirect('http://localhost:8080');
            
        })
    }
}
















module.exports = membersController;