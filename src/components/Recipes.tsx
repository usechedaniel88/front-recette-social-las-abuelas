import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrayText, SmallGrayText, XLGrayText } from '../Global.style'
import { BlueDiv, GrayDiv, GreenOutlineDiv, Div } from '../pages/RecipesPage/recipesPage.style'
import recipesService from '../Services/recipesService'
import star from '../assets/icons/star-yellow.png'
import timer from '../assets/icons/timer-gray.png'
import notFavorite from '../assets/icons/not-favorite-red.png'
import RecipeActionButton from './RecipeActionButton/RecipeActionButton'

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
                    <Link to={'../pages/RecipeDetailPage/RecipeDetailPage.tsx'}>
                        <h3>{recipe.title}</h3>
                        <RecipeActionButton img={notFavorite} text=''/>
                    </Link>
                    <GrayText>by {recipe.author}</GrayText>
                    <Div>
                    <BlueDiv>
                        <SmallGrayText>100</SmallGrayText>
                        <SmallGrayText>views</SmallGrayText>
                    </BlueDiv>
                    <GreenOutlineDiv>
                        <img src={star} alt="" />
                        <SmallGrayText>{recipe.score}</SmallGrayText>
                    </GreenOutlineDiv>
                    <GrayDiv>
                        <img src={timer} alt="" />
                        <SmallGrayText>{recipe.time}min</SmallGrayText>
                    </GrayDiv>
                    </Div>
                </div>
            )
        })}
    </div>
    )
}

export default Recipes