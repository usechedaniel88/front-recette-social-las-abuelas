import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrayText, SmallGrayText } from '../../Global.style'
import recipesService from '../../Services/recipesService'
import star from '../../assets/icons/star-yellow.png'
import timer from '../../assets/icons/timer-gray.png'
import notFavorite from '../../assets/icons/not-favorite-red.png'
import RecipeActionButton from '../RecipeActionButton/RecipeActionButton'
import { Card, BlueDiv, GrayDiv, GreenOutlineDiv, Div } from './Recipes.style'

type Props = {}

type RecipesType = {_id:string, title:string, description:string, username:any, time:number, score?:number }

function Recipes(props: Props) {

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
                <Card key={recipe._id}>
                    <Link to={`/recipe-detail/${recipe._id}`}>
                        <Div>
                        <h3>{recipe.title}</h3>
                        <RecipeActionButton img={notFavorite} text=''/>
                        </Div>
                    </Link>
                    <GrayText>by {recipe.username}</GrayText>
                    <Div>
                    <BlueDiv>
                        <SmallGrayText>100</SmallGrayText>
                        <SmallGrayText>views</SmallGrayText>
                    </BlueDiv>
                    <GreenOutlineDiv>
                        <img src={star} alt="" />
                        <SmallGrayText>3.5</SmallGrayText>
                    </GreenOutlineDiv>
                    <GrayDiv>
                        <img src={timer} alt="" />
                        <SmallGrayText>{recipe.time}min</SmallGrayText>
                    </GrayDiv>
                    </Div>
                </Card>
            )
        })}
    </div>
    )
}

export default Recipes