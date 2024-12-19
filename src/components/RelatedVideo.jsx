import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

import { useNavigate, useLocation } from 'react-router-dom';
import { formatAgo } from '../util/date';


export default function RelatedVideo({id}) {
    const { youtube } = useYoutubeApi();
    const navigate = useNavigate();
    const {state: {video}} = useLocation();

    const {isLoading, error, data: videos } = useQuery({
    // const { data: videos } = useQuery({
        queryKey: ['relatedVideo', id],
        queryFn: (e) => {
            return youtube.relatedVideo(id);
        }
    });
    
    console.log(videos,id)
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            {videos && (
                <>
                    <p>연관</p>
                    <ul>
                        {videos.map(vdo => (
                            <li>
                                <p>연관</p>
                                <p>{vdo.id}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

