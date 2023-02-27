const apiBase = 'http://localhost:4000/api/v1/recipes'

const recipeDetailsServices = {
    getRecipeDetails(){
        return fetch(apiBase)
        .then((res)=>res.json())
        .then((data)=> data.results); 

    }
}

export default recipeDetailsServices;