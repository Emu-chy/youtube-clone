import React from "react";

const Video = ({ handleSelect, imgUrl, title, description, videoId, channelTitle }) => {
    return (
        <div ClassName="card mb-3" onClick={() => handleSelect(videoId)}>
            <img src={imgUrl} className="card-img-top" alt="" />
            <div ClassName="card-body">
                <h5 ClassName="card-title">{title}</h5>
                <p ClassName="card-text">{channelTitle}</p>
                <p ClassName="card-text">
                    <small ClassName="text-muted">{description}</small>
                </p>
            </div>
        </div>
    );
};

export default Video;
