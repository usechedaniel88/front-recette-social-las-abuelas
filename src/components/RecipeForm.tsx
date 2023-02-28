import React, { useEffect, useState } from 'react'
import { Container } from '../Global.style';
import { Input, Form, InputTextArea, InputTime, InputQuantity, CheckBoxWrapper, CheckBox, CheckBoxLabel, RowCenter } from './RecipeForm.Style'
import OkButton from './OkButton/OkButton';
import axios from 'axios';

 

function RecipeForm( ) {
    const [title, setMsg] = useState('')
    const [description, Setdescription] = useState('')
    const [time, setTime] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [quantity, setQuantity] = useState('')
    const [privacy, setPrivacy] = useState('')
    let [allForm, setAllForm] = useState('')
    

     
    const submit = async (e: any) => {  
        e.preventDefault();
        allForm = {
         title: title, 
         description: description,
         time: time,
         ingredient: ingredient,
         quantity: quantity,
         privacy: privacy

        }

        try{ 

            await axios.post('http://localhost:3000/', {allForm})
        }
        catch(e){
           console.log(e);
        }
        
    }
   
    return (
        <Container>

            <Form action="POST">

                <h4>Create a recipe:</h4>
                
                <Input type="text" placeholder="Recipe names" onChange={ e => {setMsg(e.target.value)}}/>

                <InputTextArea type="text" placeholder="Instructions" onChange={ e => {Setdescription(e.target.value)}}/>

                <label><InputTime type="number" placeholder="Time to prepare" min='1' onChange={ e => {setTime(e.target.value)}} />min</label>


                <RowCenter>
                    <p >Private </p>
                    <CheckBoxWrapper>
                        <CheckBox id="checkbox" type="checkbox" onChange={ e => {setPrivacy(e.target.value)}} />
                        <CheckBoxLabel htmlFor="checkbox" />
                    </CheckBoxWrapper>
                    <p> Public</p>
                </RowCenter>
                <h4>Select Ingredients:</h4>



                <Input type="search" placeholder="Search ingredient by name" onChange={ e => {setIngredient(e.target.value)}}/>

                <label><InputQuantity type="number" placeholder="Quantity" onChange={ e => {setQuantity(e.target.value)}}/>g</label>

                <Input type="search" placeholder="Search ingredient by name" onChange={ e => {setIngredient(e.target.value)}} />
                <OkButton    onClick={submit} title=''
                           />
            </Form>

        </Container>

    )
}

export default RecipeForm