import React from "react";
import Video from "./Video.component";

const VideoPlaylist = () => {
    return (
        <div>
            <div className="col-lg-4 vid-measure ">
                <ul className="list-group">
                    <Video />
                </ul>
            </div>
        </div>
    );
};

export default VideoPlaylist;
