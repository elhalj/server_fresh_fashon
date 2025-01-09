import React from 'react'

const Articles = () => {

    const getArticle = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/recupererArcticle");
            console.log("recupere avec succes :",res);
        } catch (error) {
            console.log("probleme de recuperation",error.message);
        }
    }
    const article = getArticle

  return (
    <>
      <section>
        <table>
        {article.map(a => {
            (
                <div>
                    <thead>
                    <tr>id</tr>
                    <tr>image</tr>
                    <tr>price</tr>
                    <tr>category</tr>
                    <tr>name</tr>
                    <tr>stock</tr>
                </thead>
                <tbody>
                    <td key={a.id}>{a.id}</td>
                    <td>{a.image}</td>
                    <td>{a.price}</td>
                    <td>{a.category}</td>
                    <td>{a.name}</td>
                    <td>{a.stock}</td>
                </tbody>
                </div>
            )
        })}
        </table>
        
      </section>
    </>
  )
}

export default Articles
