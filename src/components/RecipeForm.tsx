import React, { useEffect, useState } from 'react'
import recipesFormService from '../Services/recipesFormService';

// type Props = {}

function RecipeForm() {
    const [recipesForm, setRecipesForm] = useState([])

    useEffect(() => {

    }, [])
    return (
        
            <form action="">
            <h4>Create a recipe:</h4>
                <input type="text" placeholder="Recipe names" />
                <input type="text" placeholder="Instructions" />
                <label><input type="number" placeholder="Time to prepare" />min</label>
                <h4>Select Ingredients:</h4>
                <input type="search" placeholder="Search ingredient by name" />
                <label><input type="number" placeholder="Quantity" />g</label>
            </form>
        
    )
}

export default RecipeForm