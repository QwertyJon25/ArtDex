import React from 'react'

export default function ArtPieceCard({ artPieceData }) {
const { name, category, style, desc, price, date, image } = artPieceData;




    return (
        <div className="your-piece-cards">
            <img src={image} alt={name} className="piece-card-img"/>
            <span className="piece-text">
            Title: {name} <br/>
            <hr/>
            {category} <br/>
            <hr/>
            {style} <br/>
            <hr/>
            Price: {price} <br/>
            <hr/>
            Year: {date} <br/>
            <hr/>
            {desc} <br/>
            </span>
        </div>
    )
}
