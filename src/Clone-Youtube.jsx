import React, { useEffect, useState } from "react";
import axios from "axios";

import YoutubeLogo from "./components/YoutubeLogo.component";
import Form from "./components/Form.component";
import Input from "./components/Input.component";
import Button from "./components/Button.component";
import VideoPlayer from "./components/VideoPlayer.component";
import VideoPlaylist from "./components/VideoPlaylist.component";

const CloneYoutube = () => {
    // const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getApis = async () => {
            try {
                const baseUrl = "https://www.googleapis.com/youtube/v3/search";
                const key = "AIzaSyA58MGxmPPpLoYO-tg9kNjMftBuB3N-rtk";
                const type = "video";
                const part = "snippet";

                const { data } = await axios.get(
                    `${baseUrl}?key=${key}&type=${type}&part=${part}&q=artcel`
                );
                console.log(data.items);
            } catch (err) {
                console.log(err);
            }
        };
        getApis();
    }, []);

    return (
        <>
            <div className="container">
                <header className="navbar navbar-expand navbar-light bg-light row my-3">
                    <YoutubeLogo />
                    <Form className={`d-flex mx-auto`}>
                        <Input
                            className="form-control col-md-12"
                            name="search"
                            type="text"
                            placeholder="search..."
                        />
                        <Button type="submit" className="btn btn-outline-success " text="Search" />
                    </Form>
                </header>
                <div className="row">
                    <VideoPlayer />
                    <VideoPlaylist />
                </div>
            </div>
        </>
    );
};

export default CloneYoutube;
