import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import recipesService from '../Services/recipesService'

type RecipesType = {id:string, title:string, description:string, author:any, time:number, score?:number}

function Recipes() {

    const [recipes, setRecipes] = useState<RecipesType[]>([])

    useEffect(() => {
        recipesService.getAll()
        .then(data => {
            setRecipes(data);
        })
    }, [])

    return (
    <div>
        {recipes.map((recipe) => {
            return (
                <div key={recipe.id}>
                    <Link to={'../pages/RecipeDetailPage/RecipeDetailPage.tsx'}>{recipe.title}</Link>
                    <p>{recipe.author}</p>
                    <div>{recipe.score}</div>
                    <div>{recipe.time}min</div>
                </div>
            )
        })}
    </div>
    )
}

export default Recipes