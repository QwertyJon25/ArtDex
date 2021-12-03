import React from 'react'

export default function ArtPieceCard({ artPieceData }) {
const { name, category, style, desc, price, date, image } = artPieceData;




    return (
        <div>
            <img src={image} alt={name} className="piece-card-img"/>
            <h6>{name}</h6> <h6>{category}</h6> <h6>{style}</h6>
            <h6>Price: {price}</h6> <h6>Years: {date}</h6>
            <h6>{desc}</h6>
        </div>
    )
}
