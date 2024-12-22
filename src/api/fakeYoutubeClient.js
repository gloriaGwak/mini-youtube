import axios from 'axios';

export default class FakeYoutubeClient{
    async search ({params}) {
        return params.channelId ? axios.get('/data/relatedVideo.json') : axios.get('/data/search.json');
    }
    async videos () {
        return axios.get('/data/popular.json');
    }
    async channels () {
        return axios.get('/data/channel.json');
    }
    async commentThreads () {
        return axios.get('/data/comment.json');
    }
}

