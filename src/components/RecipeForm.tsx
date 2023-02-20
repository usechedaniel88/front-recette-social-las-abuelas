import React, { useEffect, useState } from 'react'
import recipesFormService from '../Services/recipesFormService';

// type Props = {}

function RecipeForm() {
    const [recipesForm, setRecipesForm] = useState([])

    useEffect(() => {

    }, [])
    return (
    <div>
        <form action="">
            <input type="text" placeholder="Recipe name" />
            <input type="text" placeholder="Instructions" />
            <label><input type="number" placeholder="Time to prepare" />min</label>
            <p>Select Ingredients:</p>
            <input type="search" placeholder="Search ingredient by name" />
            <label><input type="number" placeholder="Quantity" />g</label>
        </form>
    </div>
    )
}

export default RecipeForm