import React, { useEffect, useState } from 'react'
import { Container } from '../Global.style';
import { Input, Form, InputTextArea, InputTime, InputQuantity, CheckBoxWrapper, CheckBox, CheckBoxLabel, RowCenter } from './RecipeForm.Style'
import OkButton from './OkButton/OkButton';
import axios from 'axios';

 

function RecipeForm( ) {
    const [title, setTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [time, setTime] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [quantity, setQuantity] = useState('')
    const [privacy, setPrivacy] = useState('')
    // let [allForm, setAllForm] = useState('')


     
    const submit = async (e: any) => {  
        e.preventDefault();
        const allForm = {
         title: title, 
         description: description,
         time: time,
         ingredients: ingredient,
         qty: quantity,
         is_private: privacy

        }
  

        try{ 
console.log(allForm)
         const result =   await axios.post('http://localhost:4000/api/v1/recipes/', {allForm})
           console.log(result)
          //if (result == recipe) 
        }
        catch(e){
           console.log(e);
        }
        
    }
   
    return (
        <Container>

            <Form>

                <h4>Create a recipe:</h4>
                
                <Input type="text" placeholder="Recipe names"  name='title' onChange={ e => {setTitle(e.target.value)}}/>

                <InputTextArea type="text" placeholder="Instructions" onChange={ e => {SetDescription(e.target.value)}}/>

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
                <OkButton    onClick={submit} 
                           />

            </Form>

        </Container>

    )
}

export default RecipeForm

