import axios from 'axios';


const KEY = 'AIzaSyC6Cd0DwTXTA48dPiBc5Y32s45DHkizseg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        type: 'video',
        key: `${KEY}`
    }
});