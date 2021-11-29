import React, { useState } from 'react';
import PieceCard from "./PieceCard";

export default function PieceContainer({ pieces, updatePiece, deletePiece }) {

    const [sortBy, setSortBy] = useState("id")

    const sortedPieces = pieces?.sort((PieceA, PieceB) => {
         if (sortBy === "id") {
             return PieceA?.id - PieceB?.id
         }else if (sortBy === "style"){
             return PieceA?.style?.localeCompare(PieceB?.style)
         } else {
            return PieceA?.id - PieceB?.id
        }
     })


    const pieceCards = sortedPieces?.map(pieceObj => <PieceCard deletePiece={deletePiece} updatePiece={updatePiece} key={pieceObj.id} pieceData={pieceObj} />)


    return (
        <div className="piece-container">
            <button onClick={() => setSortBy("id")}>Sort By Default</button>
            <button onClick={() => setSortBy("style")}>Sort By Style</button>
            <ul className="cards">{pieceCards}</ul>
        </div>
    )
}