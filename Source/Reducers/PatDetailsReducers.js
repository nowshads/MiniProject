import {createStore} from "redux";

export function PatDetails (state = { users:[] } , action) {
switch(action.type) {

case "POST_DATA" : 
     let users = state.users.concat(action.payload);
     return {users};
    break;
}

return state;   
}