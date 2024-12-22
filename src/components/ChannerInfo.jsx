import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannerInfo({id,name,type}) {
    const { youtube } = useYoutubeApi();
    const isList = type === 'list';

    const {isLoading, error, data: url } = useQuery({
        queryKey: ['channel', id],
        queryFn: (e) => {
            return youtube.channelImageURL(id);
        },
        staleTime: 1000 * 60 *5
    });

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            <div className='flex justify-start items-center gap-2 my-1 lg:my-2'>
                {isList ? (
                    <>
                        <div className='overflow-hidden rounded-full w-6 lg:w-8 h-6 lg:h-8'>
                            {url && <img src={url} alt={name} className=''/>}
                        </div>
                        <p className='font-medium text-xs lg:text-sm'>{name}</p>
                    </>
                ) : (
                    <>
                        <div className='overflow-hidden rounded-full w-10 lg:w-9 h-10 lg:h-9'>
                            {url && <img src={url} alt={name} className=''/>}
                        </div>
                        <p className='font-medium text-sm lg:text-base'>{name}</p>
                    </>
                )}
            </div>
        </>
    );
}

