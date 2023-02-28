import axios from 'axios'

const apiBase = 'http://localhost:4000/api/v1/recipes'

export const recipeDetailsServices = async (id:string) => {
        return await axios.get(apiBase + `/recipe/${id}`)
    }

