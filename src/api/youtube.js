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
            }
        })
        .then((res) => res.data.items)
    }
}