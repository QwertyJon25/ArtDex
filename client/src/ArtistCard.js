import React from 'react'

export default function ArtistCard({ artistData }) {
const { name, bio, contact, style, dates, image } = artistData;



    return (
        <div className="artist-card">
            <img src={image} alt={name} className="artist-card-img"/>
            {name} <br/>
            <hr/>
            {bio} <br/>
            <hr/>
            Contact: {contact} <br/>
            <hr/>
            Style: {style} <br/>
            <hr/>
            Dates: {dates}
        </div>
    )
}