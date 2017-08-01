const { getAuthor } = require('../apis');
const ActionTypes = require('../redux/actionType');

const TodosActions = {

    getAuthor(id) {
        return (dispatch) => {
            getAuthor(id).then(function(data){
                dispatch({
                    type: ActionTypes.TODO_GET_AUTHORS,
                    status:"success",
                    payload:data
                });
            }).catch(function(e){
                console.log(e);
            });
        }
    }
}

module.exports = TodosActions;