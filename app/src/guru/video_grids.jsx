import React from 'react';
import './video.scss';

import  MovieCard from './video_list.jsx';

class VideoGrid extends React.Component {


    render() {
        return (
            <div className="app-container"> 
                <div className="search-bar">
                    <h4>
                        SVideos 
                    </h4>
                    <div>
                        <input type="text" className="search-control" placeholder="search" />
                    </div>
                </div>

                <div className="movie-grid">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>

            </div>
        )
    }
}

export default VideoGrid;