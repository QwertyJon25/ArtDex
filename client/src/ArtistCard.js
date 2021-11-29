import React from 'react'

export default function ArtistCard({ artistData }) {
const { name, bio, contact, style, dates, image } = artistData;



    return (
        <div className="artist-card">
            <img src={image} alt={name} className="artist-card-img"/>
            Name: {name}
            Bio: {bio}
            Contact: {contact}, Style: {style}
            Dates: {dates}
        </div>
    )
}