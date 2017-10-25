import React from 'react';

// import RecipeService from '../recipe_bank.js';

function Recipe(props) {

    const { name, description } = props;
    const ingredients = props.ingredients.map(ing => <li key={ing}>{ing}</li>);
    // RecipeService().then(console.log);
    return (
        <div className="recipe__container">
            <h1 className="recipe__title">{name}</h1>
            <img className="recipe__img" src="http://via.placeholder.com/350x150"/>
            <p className="recipe__description">{description}</p>
            <ul>
                {ingredients}
            </ul>
        </div>
    )
}

export default Recipe;
