import React from 'react';
import DirectorCard from "./DirectorCard";

export default function DirectorContainer({ directors }) {

    const directorCards = directors?.map(directorObj => <DirectorCard key={directorObj.id} directorData={directorObj} />)


    return (
        <div className="director-container">
            <ul className="cards">{directorCards}</ul>
        </div>
    )
}