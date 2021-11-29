import React, {useEffect, useState } from 'react';
import PieceContainer from './PieceContainer';
import NewPieceForm from './NewPieceForm';

export default function PiecePage() {
    const [pieces, setPieces] = useState([])


    useEffect(() => {
        fetch('/pieces/')
        .then(resp => resp.json())
        .then(pieceData => setPieces(pieceData))
    }, [])

    const addNewPiece = (newPieceObj) => {
        setPieces((prevArray) => [...prevArray, newPieceObj])
    }

    const updatePiece = (updatedPiece) => {

        const updatedArray = pieces.map((oldPieceObj) => {
            if(updatedPiece.id === oldPieceObj.id) {
                return {...updatedPiece}
            } else{
                return oldPieceObj
            }
        })

        setPieces(updatedArray)
    }

    const deletePiece = (clickedPiece) => {
        const newArray = pieces.filter((oldPieceObj) => oldPieceObj.id !== clickedPiece.id)
        setPieces(newArray)
    }
    
    

    return (
        <div className="piece-page">
            <PieceContainer deletePiece={deletePiece} updatePiece={updatePiece} pieces={pieces} />
            <NewPieceForm addNewPiece={addNewPiece}/>
        </div>
    )
}