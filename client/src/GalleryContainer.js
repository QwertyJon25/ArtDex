import React from 'react';
import GalleryCard from "./GalleryCard";

export default function GalleryContainer({ galleries }) {

    const galleryCards = galleries?.map(galleryObj => <GalleryCard key={galleryObj.id} galleryData={galleryObj} />)


    return (
        <div className="gallery-container">
            <ul className="cards">{galleryCards}</ul>
            <div className="gallery-div"/>
        </div>
    )
}