import axios from "axios";

export const getVideoByQuery = async (searchQuery) => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/search";
    const key = "AIzaSyA58MGxmPPpLoYO-tg9kNjMftBuB3N-rtk";
    const type = "video";
    const part = "snippet";

    const { data } = await axios.get(
        `${baseUrl}?key=${key}&type=${type}&maxResults=50&part=${part}&q=${searchQuery}`
    );
    console.log(data);
    return data;
};
