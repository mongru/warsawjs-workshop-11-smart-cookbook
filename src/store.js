import {createStore} from 'redux';

function rootReducer(state = {}, action) {
    return {
        recipeList: recipesListReducer(state.recipesList, action),
        criteria: criteriaReducer(state.criteria, action)
    }
}

const recipesListReducer = (recipesList = [], action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return action.recipes;
        default:
            return recipesList;
    }
};

const criteriaReducer = (criteria = [], action) => {
    switch (action.type) {
        case 'ADD_CRITERIA':
            return [
                ...criteria,
                action.criterium
            ];
        case 'WIPE_CRITERIA':
            return [];
        default:
            return criteria;
    }
};

const store = createStore(rootReducer);

export default store;

// function recipeListReducer(recipeList = [], action) {
//
// }
//
// function criteriaReducer(criteria = [], action) {
//
// }

// {
//     criteria: [],
//     recipesList: []
// }
//
// 'ADD_CRITERIA',
// 'WIPE_CRITERIA',
// 'SET_RECIPES'

// const addTodo = todo => ({
// 	type: "add_todo",
// 	todo
// });
//
// const changeFilter = filter => ({
// 	type: "change_visibility",
//   filter
// });
//
// const state = {
//   todos: []
//   visibilityFilter: '',
// }
//
// function reducer(state = {}, action) {
//
//   return {
//   	todos: todosReducer( state.todos, action),
//     visibilityFilter: visibilityReducer( state.visibilityFilter, action)
//   }
//
// }
//
// function todosReducer( todos = [], action ) {
//   switch(action.type) {
//     case 'add_todo':
//       return {...state, todos: [...state.todos, action.todo]};
//     default:
//       return todos;
//   }
// }
//
// function visibilityReducer( visibilityFilter = "show_all", action ) {
// 	switch(action.type) {
//     case 'change_visibility':
//       return {...state, filter: action.filter};
//     default:
//       return state;
//   }
// }
