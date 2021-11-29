import React from 'react'

export default function GalleryCard({ galleryData }) {
const { name, desc, contact, location } = galleryData;



    return (
        <div className="gallery-card">
            Name: {name}
            Location: {location}, Contact: {contact}
            Description: {desc}
        </div>
    )
}