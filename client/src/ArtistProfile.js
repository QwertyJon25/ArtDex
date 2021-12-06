import React, { useState, useEffect } from 'react'
import ArtPieceCard from './ArtPieceCard'

export default function ArtistProfile() {
    //fetch request for pieces
    const [artPieces, setArtPieces] = useState([])


    useEffect(() => {
        fetch('/pieces/')
        .then(resp => resp.json())
        .then(pieceData => setArtPieces(pieceData))
    }, [])

    //filter function for pieces to iterate only artist id associated pieces
    
    // const sortedPieces = artPieces?.sort(() => {
    //      if (artPieces.artist_id === artist.id){
    //          return piece
    //  })

     //sortedPiecs?.map
    const artPieceCards = artPieces?.map(artPieceObj => <ArtPieceCard key={artPieceObj.id} artPieceData={artPieceObj} />)

    //import artist profile




    return (
        <div>
            <ul className="your-cards">{artPieceCards}</ul>
        </div>
    )
}
