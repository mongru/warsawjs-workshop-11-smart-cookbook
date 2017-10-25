import React from 'react';

import Recipe from './Recipe.js';
import RecipeService from '../recipe_bank.js';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        RecipeService()
            .then(recipes => this.setState({recipes}));
    }

    render() {

        const recipeList = this.state.recipes.map((recipe, index) => <li key={index}><Recipe {...recipe} /></li>);

        return (
            <ul>
                {recipeList}
            </ul>
        );
    }
}

export default RecipesList;
