import React from "react";

const Video = () => {
    return (
        <div className={`list-group-item d-flex`}>
            <div className="row">
                <div className="col-lg-6 mr-auto"></div>
                <div className="col-lg-6 ps-0">
                    <div>
                        <span className="heading-wrap">
                            <p className="list-heading"></p>
                        </span>
                        <p className="list-description"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
