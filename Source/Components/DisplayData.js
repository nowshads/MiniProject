import {createStore} from 'redux';

//create a reducers
const reducer = function(state = 0, action) {
	console.log('Switch', action);
	switch(action.type) {
		case "INCREMENT" :
			return state + action.payload;
		break;

		case "DECREMENT" :
			return state - action.payload;
		break;
	}
}

//create a store
const store = createStore(reducer);

store.subscribe(function () {
	console.log('value of the current state', + store.getState());
})
