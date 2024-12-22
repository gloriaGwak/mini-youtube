import React, { useEffect } from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ChannerInfo from '../components/ChannerInfo';
import RelatedVideo from '../components/RelatedVideo';
import Comment from '../components/Comment';
import { formatAgo } from '../util/date';

export default function Watch() {
    const {state: {video}} = useLocation();
    const { title, channelId, channelTitle, description, publishedAt } = video.snippet;
    
    return (
        <main className='py-20 md:py-14'>
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
                    <div className='mt-4 lg:mt-6 break-all'>
                        <h2 className='font-bold text-xl lg:text-2xl'>{title}</h2>
                        <ChannerInfo id={channelId} name={channelTitle} />
                        <div className="p-4 md:p-4 mt-5 md:mt-10 bg-gray-600 rounded-2xl md:rounded-lg">
                            <span className='text-sm lg:text-base'>{formatAgo(publishedAt)}</span>
                            <pre className='mt-2 lg:mt-6 text-sm lg:text-base break-keep whitespace-pre-wrap'>{description}</pre>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-10">
                        <h3 className='mb-4 md:mb-6 font-bold text-xl lg:text-2xl'>Comments</h3>
                        <Comment id={video.id}/>
                    </div>
                </section>
                <section className="w-full lg:w-2/6 mt-10 lg:mt-0">
                    <h3 className='mb-4 md:mb-6 font-bold text-xl lg:text-2xl'>Related Videos</h3>
                    <RelatedVideo id={channelId} />
                </section>
            </div>
        </main>
    );
}