import React, { useEffect, useState } from 'react'
import recipesService from '../Services/recipesService'

type RecipesType = {id:string, title:string, description:string, author:any, time:number, score?:number}

function Recipe() {

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
                    <h2>{recipe.title}</h2>
                    <p>{recipe.author}</p>
                    <div>{recipe.score}</div>
                    <div>{recipe.time}min</div>
                </div>
            )
        })}
    </div>
    )
}

export default Recipe