import React, { useEffect, useState } from 'react'
import { Container } from '../Global.style';
import recipesFormService from '../Services/recipesFormService';
import Spacer from './Spacer/Spacer';
import { Input, Form, InputTextArea, InputTime, InputQuantity, CheckBoxWrapper, CheckBox, CheckBoxLabel, RowCenter } from './RecipeForm.Style'

// type Props = {}

function RecipeForm() {
    const [recipesForm, setRecipesForm] = useState([])

    useEffect(() => {

    }, [])
    return (
        <Container>

            <Form action="">

                <h4>Create a recipe:</h4>
                <Input type="text" placeholder="Recipe names" />
                
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
            </Form>

        </Container>

    )
}

export default RecipeForm