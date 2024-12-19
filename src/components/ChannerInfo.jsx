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
        <div>
            {url && <img src={url} alt={name} />}
            <p>{name}</p>
        </div>
    );
}

