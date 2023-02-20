const apiBase = 'http://localhost:4000/api/v1/recipes'

type Types = {title:string, description: string}
const recipesService = {
    getAll() {
        return fetch(apiBase) 
        .then((res) => {
            console.log(res)
            return res.json()})
        .then((data) => {
            console.log(data)
            return data})
    }
    // postRecipe(title, description, ) {
    //     return fetch(apiBase, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title:
    //         })
    //     })
    // }
}

export default recipesService