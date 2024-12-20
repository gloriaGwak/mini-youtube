import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannerInfo({id,name}) {
    const { youtube } = useYoutubeApi();

    const {isLoading, error, data: url } = useQuery({
    // const { data: url } = useQuery({
        queryKey: ['channel', id],
        queryFn: (e) => {
            return youtube.channelImageURL(id);
        },
            // staleTime: 5000
    });

    return (
        <div className='flex justify-start items-center gap-2 lg:gap-4 mt-2 lg:mt-6'>
            <div className='overflow-hidden rounded-full w-8 lg:w-12 h-8 lg:h-12'>
                {url && <img src={url} alt={name} className=''/>}
            </div>
            
            <p className='font-medium text-sm lg:text-base'>{name}</p>
        </div>
    );
}

