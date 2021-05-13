import React from 'react';

function Display({match}) {
    return (
        <div>
            <h1>Welcome to my scuffed Movie Search App!</h1>
                <h1>{match.params.movieStuff}</h1>
        </div>
    );
}

export default Display;