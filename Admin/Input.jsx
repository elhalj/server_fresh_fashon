import React, { useState } from 'react'

const Input = () => {

    const [formdata, setFormdata] = useState({nma:"",image:"", price:"", category:"", description:"", stock:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/articles", formdata);
            if(!res.data){
                console.log("erreur dans les champs");
            }
            console.log("ajout avec succes");
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <>
    <div>
        <form action="">
            <label htmlFor="name">
                <input type="text" name='name' value={formdata.name} onChange={handleChange} placeholder='nom' />
            </label>
            <label htmlFor="image">
                <input type="img" name='image' value={formdata.image} onChange={handleChange} placeholder='choisir l"image' />
            </label>
            <label htmlFor="price">
                <input type="text" name='price' value={formdata.price} onChange={handleChange} placeholder='price' />
            </label>
            <label htmlFor="category">
                <input type="text" name='category' value={formdata.category} onChange={handleChange} placeholder='categorie' />
            </label>
            <label htmlFor="description">
                <textarea name="description" id="description" value={formdata.description} onChange={handleChange} placeholder='decription'/>
            </label>
            <label htmlFor="number">
                <input type="number" name='stock' value={formdata.stock} onChange={handleChange} placeholder='stock' />
            </label>
            <button type='submit' onClick={handleSubmit}>Ajouter Arcticle</button>
        </form>
    </div>
    </>
  )
}

export default Input
