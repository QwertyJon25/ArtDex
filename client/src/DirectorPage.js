import React, {useEffect, useState } from 'react';
import DirectorContainer from './DirectorContainer';

export default function DirectorPage() {
    const [directors, setDirectors] = useState([])


    useEffect(() => {
        fetch('/directors')
        .then(resp => resp.json())
        .then(directorData => setDirectors(directorData))
    }, [])
    

    return (
        <div className="director-page">
            <DirectorContainer directors={directors} />
        </div>
    )
}