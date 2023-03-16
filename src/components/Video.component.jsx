import React from "react";

const Video = ({ imgUrl, title, description, videoId, channelTitle }) => {
    return (
        <div className={`list-group-item d-flex`}>
            <div className="row">
                <div className="col-lg-6 mr-auto">
                    <img src={imgUrl} className="image-list" alt="" />
                </div>
                <div className="col-lg-6 ps-0">
                    <div>
                        <span className="heading-wrap">
                            <p className="list-heading">{title}</p>
                        </span>
                        <p className="list-description">{channelTitle}</p>
                        <p className="list-description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
