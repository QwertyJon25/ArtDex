import React from 'react';
import ArtistCard from "./ArtistCard";

export default function ArtistContainer({ artists }) {

    const artistCards = artists?.map(artistObj => <ArtistCard key={artistObj.id} artistData={artistObj} />)


    return (
        <div className="artist-container">
            <ul className="cards">{artistCards}</ul>
        </div>
    )
}