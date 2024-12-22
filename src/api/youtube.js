export default class Youtube{
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    
    async search (keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword (keyword) {
        return this.apiClient
        .search({
            params: {
                part:'snippet',
                maxResults:25,
                order:'date',
                type:'video',
                q:keyword,
            }
        })
        .then((res) => res.data.items)
        .then((items) => items.map((item) => ({...item, id: item.id.videoId}))) 
    }
    async #mostPopular () {
        return this.apiClient
        .videos({
            params: {
                part:'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'kr',
                order:'date',
                type:'video',
                maxResults:25,
            }
        })
        .then((res) => res.data.items)
    }

    async relatedVideo (id) {
        return this.apiClient
        .search({
            params: {
                part:'snippet',
                channelId: id,
                maxResults:25,
                order:'date',
                type:'video',
            }
        })
        .then((res) => res.data.items)
        .then((items) => items.map((item) => ({...item, id: item.id.videoId}))) 
    }

    async channelImageURL (id) {
        return this.apiClient
        .channels({
            params: {
                part:'snippet,contentDetails,statistics',
                id
            }
        })
        .then((res) => res.data.items[0].snippet.thumbnails.default.url)        
    }

    async commentsList (id) {
        return this.apiClient
        .commentThreads({
            params: {
                part:'snippet,replies',
                videoId: id,
                // maxResults:25,
            }
        })
        .then((res) => res.data.items)
    }
}
