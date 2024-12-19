import axios from 'axios';

export default class FakeYoutubeClient{
    async search () {
        return axios.get('/data/search.json');
    }
    async videos () {
        return axios.get('/data/popular.json');
    }
    async channels () {
        return axios.get('/data/channel.json');
    }
}

