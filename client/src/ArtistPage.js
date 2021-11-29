import React, {useEffect, useState } from 'react';
import ArtistContainer from './ArtistContainer';

export default function ArtistPage() {
    const [artists, setArtists] = useState([])


    useEffect(() => {
        fetch('/artists')
        .then(resp => resp.json())
        .then(artistData => setArtists(artistData))
    }, [])
    

    return (
        <div className="artist-page">
            <ArtistContainer artists={artists} />
        </div>
    )
}