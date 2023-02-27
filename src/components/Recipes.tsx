import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import recipesService from '../Services/recipesService'

type RecipesType = {_id:string, title:string, description:string, author:any, time:number, score?:number}

function Recipes() {

    const [recipes, setRecipes] = useState<RecipesType[]>([])

    useEffect(() => {
        recipesService.getAll()
        .then(data => {
            console.log(data)
            setRecipes(data);
        })
    }, [])

    return (
    <div>
        {recipes.length>0 && recipes.map((recipe) => {
            // return (<div>{JSON.stringify(recipe)}</div>)
            return (
                <div key={recipe._id}>
                    <Link to={`/recipe-detail/${recipe._id}`}>{recipe.title}</Link>
                    <p>{recipe.author}</p>
                    <div>{recipe.score}</div>
                    <div>{recipe.time}min</div>
                </div>
            )
        })}
        {/* {JSON.stringify(recipes)} */}
    </div>
    )
}

export default Recipes