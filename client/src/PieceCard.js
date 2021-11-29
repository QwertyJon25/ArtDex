import React, { useState } from 'react';

export default function PieceCard({ pieceData, updatePiece, deletePiece }) {
    const { name, category, style, desc, price, date, image, id } = pieceData;

    const [newName, setNewName] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const [newStyle, setNewStyle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newImage, setNewImage] = useState("")
    
    const [showForm, setShowForm] = useState(false)


    const handleUpdate = (e) => {
        e.preventDefault();

        fetch('/pieces/'+id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: newName, category: newCategory, style: newStyle, desc: newDesc, price: newPrice, date: newDate, image: newImage})
        })
        .then(resp => resp.json())
        .then(updatedPiece => updatePiece(updatedPiece))
}

const deleteHandler = () => {
    fetch('/pieces/'+id, {method: "DELETE"})
    .then(() => deletePiece(pieceData))

}
    return (
        <li className="piece-card">
            <img src={image} alt={name} className="piece-card-img"/>
            <h6>{name}</h6>, <h6>{category}</h6>, <h6>{style}</h6> <br />
            <h6>{price}</h6>, <h6>{date}</h6> <br/>
            <h6>{desc}</h6>
            <button onClick={() => setShowForm(!showForm)} style={{backgroundColor: "#8BF5C7"}}>Edit</button>
            <button onClick={deleteHandler} style={{backgroundColor: "#FA6A74"}}>Delete</button>
            { showForm ? <form onSubmit={handleUpdate}>
                New Name: <input onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="input new name" name="name" type="text" />
                New Category: <input onChange={(e) => setNewCategory(e.target.value)} value={newCategory} placeholder="input new category" name="category" type="text" />
                New Style: <input onChange={(e) => setNewStyle(e.target.value)} value={newStyle} placeholder="input new style" name="style" type="text" />
                New Desc: <input onChange={(e) => setNewDesc(e.target.value)} value={newDesc} placeholder="input new desc" name="desc" type="text" />
                New Price: <input onChange={(e) => setNewPrice(e.target.value)} value={newPrice} placeholder="input new price" name="price" type="text" />
                New Date: <input onChange={(e) => setNewDate(e.target.value)} value={newDate} placeholder="input new date" name="date" type="text" />
                New Image: <input onChange={(e) => setNewImage(e.target.value)} value={newImage} placeholder="input new image" name="image" type="text" />
                <input type="submit" />
            </form>: null}
        </li>
    );
}