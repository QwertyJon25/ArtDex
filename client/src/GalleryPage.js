import React, {useEffect, useState } from 'react';
import GalleryContainer from './GalleryContainer';

export default function GalleryPage() {
    const [galleries, setGalleries] = useState([])


    useEffect(() => {
        fetch('/galleries')
        .then(resp => resp.json())
        .then(galleryData => setGalleries(galleryData))
    }, [])
    

    return (
        <div className="gallery-page">
            <GalleryContainer galleries={galleries} />
        </div>
    )
}