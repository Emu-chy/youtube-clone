/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const VideoPlayer = () => {
    return (
        <div className="col-lg-8 mb-4">
            <div className="video">
                <iframe
                    width="100%"
                    height={468}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="details">
                <h6>title</h6>
                <div>
                    <p> description </p>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
