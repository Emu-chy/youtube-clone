import React from "react";

const Video = ({ imgUrl, title, description, videoId, channelTitle }) => {
    return (
        // <div className={`list-group-item mb-3`}>
        //     <div>
        //         <div className="col-lg-8 mr-auto">
        //             <img
        //                 src={imgUrl}
        //                 className="list-image"
        //                 style={{ height: "300px", width: "320px" }}
        //                 alt=""
        //             />
        //         </div>
        //         <div className="col-lg-4 ps-0">
        //             <div>
        //                 <span className="heading-wrap">
        //                     <p className="list-heading">{title}</p>
        //                 </span>
        //                 <p className="list-description">{channelTitle}</p>
        //                 <p className="list-description"> {description} </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div class="card mb-3">
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
