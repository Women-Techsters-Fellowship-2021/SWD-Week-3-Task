import { createContext, useReducer } from 'react';

export const AppContext = createContext();

function reducer(state, action) {
	
	let stateCopy = { ...state };
	stateCopy.action = action;

	if (action.type === 'ADD_ITEM') {
		if (stateCopy.isEditing) {
			stateCopy.shoppingList = stateCopy.shoppingList.map(
				item => {
					if (item.id === stateCopy.currentlyEditing) {
						item.title = stateCopy.title;
						item.description = stateCopy.description;
					}
					return item;
				}
			);
		} else {
			stateCopy.shoppingList.unshift(action.payload);
		}
	}
 //do conditions for logins
	if (action.type === 'LOGIN') {
		stateCopy.isUserLoggedIn = true;
		stateCopy.userData = action.payload;
	}

//and logout
	if (action.type === 'LOGOUT') {
		stateCopy.isUserLoggedIn = false;
		stateCopy.userData = null;
	}

	//delete an item
	if (action.type === 'DELETE') {
		stateCopy.shoppingList = stateCopy.shoppingList.filter(
			item => item.id !== action.payload.id
		);
	}

	if (action.type === 'UPDATE_TITLE') {
		stateCopy.title = action.payload;
	}


	if (action.type === 'UPDATE_DESCRIPTION') {
		stateCopy.description = action.payload;
	}


	if (action.type === 'EDIT') {
		stateCopy.title = action.payload.title;
		stateCopy.description = action.payload.description;
		stateCopy.isEditing = true;
		stateCopy.currentlyEditing = action.payload.id;
	}

	if (action.type === 'RESET_INPUTS') {
		stateCopy.title = '';
		stateCopy.description = '';
	}

	return stateCopy;
}

const initialState = {
	shoppingList: [
		{
			id: 1,
			title: 'Item 1',
			description:
				'Input your description here',
		},
		{
			id: 2,
			title: 'Item 2',
			description:
				'Here too',
		},
	],
	isUserLoggedIn: false,
	userData: null,
	title: '',
	description: '',
	isEditing: false,
	currentlyEditing: '',
};

function AppState({ children }) {

	const [appstate, dispatch] = useReducer(reducer, initialState);

	const contextObject = {
		state: appstate,
		dispatch: dispatch,
	};

	return (
		<AppContext.Provider value={contextObject}>
			{children}
		</AppContext.Provider>
	);
}

export default AppState;
