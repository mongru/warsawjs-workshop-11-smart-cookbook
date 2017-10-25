import React from 'react';

import './style.sass';

import RecipesList from './Components/RecipesList.js';
import Search from './Components/Search.js';

export default function App() {
    return (
        <div className="main__wrapper">
            <RecipesList />
            <Search />
        </div>
    );
}
