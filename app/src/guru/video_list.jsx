import React from 'react';
import Image from '../images/mountian1.jpg';

const MovieCard = (props) => (
    <div className="movie-card" >
        <div className="image-container">
            <img src={Image} height="100%" width="100%" alt="Image" />
        </div>
        <div className="description">
            <h4> House of cards </h4>
            <p>
                Here is a full list of the CSS named colors as specified in CSS3 (CSS Color Module Level 4). 
                These are based on the X11 color set. The above basic colors are also included in this chart.
            </p>
        </div>
    </div>
)

export default MovieCard;