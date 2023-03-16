import React from "react";

const Video = ({ handleSelect, imgUrl, title, description, videoId, channelTitle }) => {
    return (
        <div class="card mb-3" onClick={() => handleSelect(videoId)}>
            <img src={imgUrl} className="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{channelTitle}</p>
                <p class="card-text">
                    <small class="text-muted">{description}</small>
                </p>
            </div>
        </div>
    );
};

export default Video;
