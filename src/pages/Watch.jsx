import React, { useEffect } from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ChannerInfo from '../components/ChannerInfo';
import RelatedVideo from '../components/RelatedVideo';

// import { useQuery } from '@tanstack/react-query';
// import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Watch() {
    const {state: {video}} = useLocation();

    const { title, channelId, channelTitle, description, publishedAt } = video.snippet;

    return (
        <article className='py-14'>
            <div className="inner flex gap-4 flex-col md:flex-row">
                <section className="w-full md:w-3/4 bg-gray-800">
                    <div className=''>
                        <iframe 
                            id="player" 
                            type="text/html" 
                            width="100%" 
                            height="390" 
                            src={`http://www.youtube.com/embed/${video.id}`} 
                            frameBorder="0"
                        />
                    </div>
                    <div className=''>
                        <h2>{title}</h2>
                        <ChannerInfo id={channelId} name={channelTitle} />
                        <pre>{description}</pre>
                    </div>
                    <div className="">
                        여기는 코멘트!
                    </div>
                </section>
                <section className="w-full md:w-1/4 bg-gray-800">
                    <RelatedVideo id={channelId} video={video} />
                </section>
            </div>
        </article>
    );
}


// https://www.googleapis.com/youtube/v3/search
//   ?part=snippet
//   &relatedToVideoId={VIDEO_ID}
//   &type=video
//   &key={YOUR_API_KEY}

