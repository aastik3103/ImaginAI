import React, { useState } from 'react'

export default function RecipeGenerator() {
  
  const [ingredients,setIngredients] = useState("");  
  const [cuisine,setCuisine] = useState("");  
  const [recipe,setRecipe] = useState("");  
  const [dietaryRestrictions,setDietaryRestrictions] = useState("");  

  const createRecipe = async ()=>{
    try{
        const response = await fetch(`http://localhost:8080/create-recipe?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`)
        const data = await response.text();
        setRecipe(data)
    }
    catch(error){
        console.log(error);
    }
  }

  return (
    <div>
        <h2>Generate Recipe</h2>
        <input
            type='text'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder='Enter Ingredients'
        />
        <input
            type='text'
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder='Enter Cuisine'
        />
        <input
            type='text'
            value={dietaryRestrictions}
            onChange={(e) => setDietaryRestrictions(e.target.value)}
            placeholder='Enter dietary restrictions'
        />
        <button onClick={createRecipe}>Create Recipe</button>
        <div className='output'>
            <pre className='recipe-text'>{recipe}</pre>
        </div>
    </div>
  )
}
