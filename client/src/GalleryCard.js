import React from 'react'

export default function GalleryCard({ galleryData }) {
const { name, desc, contact, location } = galleryData;



    return (
        <div className="gallery-card">
            Name: {name} <br />
            Location: {location} <br />
            Contact: {contact} <br />
            Description: {desc} <br />
            <hr/>
        </div>
    )
}