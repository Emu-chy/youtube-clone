/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const VideoPlayer = ({ title, description, videoId, channelTitle }) => {
    return (
        <div className="col-sm-8 mb-4">
            <div className="video">
                <iframe
                    width="100%"
                    height={468}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="details">
                <h6>{title}</h6>
                <div>
                    <p> {description} </p>
                </div>
                <p>{channelTitle}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
