import React, { useEffect } from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ChannerInfo from '../components/ChannerInfo';
import RelatedVideo from '../components/RelatedVideo';
import { formatAgo } from '../util/date';

// import { useQuery } from '@tanstack/react-query';
// import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Watch() {
    const {state: {video}} = useLocation();

    const { title, channelId, channelTitle, description, publishedAt } = video.snippet;
    console.log(video)
    return (
        <article className='py-14'>
            <div className="inner flex gap-4 flex-col lg:flex-row">
                <section className="w-full lg:w-4/6">
                    <div className='video_area rounded-2xl md:rounded-lg'>
                        <iframe 
                            id="player" 
                            type="text/html" 
                            width="100%" 
                            height="100%" 
                            src={`http://www.youtube.com/embed/${video.id}`} 
                            frameBorder="0"
                        />
                    </div>
                    <div className='mt-8 lg:mt-12 break-all'>
                        <h2 className='font-bold text-xl lg:text-3xl'>{title}</h2>
                        <ChannerInfo id={channelId} name={channelTitle} />
                        <span className='block text-sm lg:text-base mt-2 lg:mt-6'>{formatAgo(publishedAt)}</span>
                        <pre className=' mt-2 lg:mt-6 text-base lg:text-lg break-normal whitespace-pre-wrap'>{description}</pre>
                    </div>
                    <div className="">
                        여기는 코멘트!
                    </div>
                </section>
                <section className="w-full lg:w-2/6">
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

