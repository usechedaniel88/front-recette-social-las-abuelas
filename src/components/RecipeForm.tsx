import React, { useEffect, useState } from 'react'
import { Container } from '../Global.style';
import { Input, Form, InputTextArea, InputTime, InputQuantity, CheckBoxWrapper, CheckBox, CheckBoxLabel, RowCenter } from './RecipeForm.Style'
import OkButton from './OkButton/OkButton';
import axios from 'axios';

 

function RecipeForm( ) {
    const [msg, setMsg] = useState('')
     
    const submit = async (e: any) => { 
        e.preventDefault();

        try{ 

            await axios.post('http://localhost:3000/', {msg})
        }
        catch(e){
           console.log(e);
        }
        
    }
   
    return (
        <Container>

            <Form action="POST">

                <h4>Create a recipe:</h4>
                
                <Input type="text" placeholder="Recipe names" onChange={ e => {setMsg(e.target as HTMLFormElement).value}}/>

                <InputTextArea type="text" placeholder="Instructions" />

                <label><InputTime type="number" placeholder="Time to prepare" min='1' />min</label>


                <RowCenter>
                    <p >Private </p>
                    <CheckBoxWrapper>
                        <CheckBox id="checkbox" type="checkbox" />
                        <CheckBoxLabel htmlFor="checkbox" />
                    </CheckBoxWrapper>
                    <p> Public</p>
                </RowCenter>
                <h4>Select Ingredients:</h4>



                <Input type="search" placeholder="Search ingredient by name" />

                <label><InputQuantity type="number" placeholder="Quantity" />g</label>

                <Input type="search" placeholder="Search ingredient by name" />
                <input type='submit'   onClick={submit} value='submit'
                           />
            </Form>

        </Container>

    )
}

export default RecipeForm