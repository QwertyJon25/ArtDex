import React from 'react'

export default function DirectorCard({ directorData }) {
const { name, bio, contact, image } = directorData;



    return (
        <div className="director-card">
            <img src={image} alt={name} className="director-card-img"/>
            Name: {name} <br/>
            <hr/>
            Contact: {contact} <br/>
            <hr/>
            Bio: {bio}
        </div>
    )
}