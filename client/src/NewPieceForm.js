import React, { useState } from 'react'

export default function NewPieceForm({addNewPiece}) {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [style, setStyle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPiece = {
            name: name,
            category: category,
            style: style,
            desc: desc,
            price: price,
            date: date,
            image: image
        }

        const options = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newPiece)
    } 

    fetch('/pieces', options)
    .then(resp => resp.json())
    .then(newPiece => {
        addNewPiece(newPiece)
        setName("");
        setCategory("");
        setStyle("");
        setDesc("");
        setPrice("");
        setDate("");
        setImage("");
    })
    }

    console.log(handleSubmit)

    return (
        <div className="new-piece-form">
            <h3>Add A New Piece</h3>
            <form onSubmit={handleSubmit}>
                Name: <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name"/><br/>
                Category: <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category"/><br/>
                Style: <input value={style} onChange={(e) => setStyle(e.target.value)} type="text" name="style" placeholder="Style"/><br/>
                Desc: <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" name="desc" placeholder="Description"/><br/>
                 Price: <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="Price"/><br/>
                  Date: <input value={date} onChange={(e) => setDate(e.target.value)} type="text" name="date" placeholder="Date"/><br/>
                   Image: <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image"/><br/>
                <button type="submit">Add Piece</button>
            </form>
        </div>
    );
}