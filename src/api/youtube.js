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
    async relatedVideo (id) {
        return this.apiClient
            .playlists({
                params: {
                    part:'snippet,contentDetails',
                    maxResults: 25,
                    channelId: id
                }
            }
        )
        .then((res) => res.data.items)
        // https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_4u-bXaba7yrRz_6x6kb_w&maxResults=25&key=AIzaSyD_L7qaV1AQApYmfFoVWJkcAXe2aIrJUYA
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
}
