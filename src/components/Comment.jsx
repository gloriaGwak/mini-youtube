import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import DOMPurify from "dompurify";
import { formatAgo } from '../util/date';


export default function Comment({id}) {
    const { youtube } = useYoutubeApi();

    const {isLoading, error, data: comments } = useQuery({
        queryKey: ['comments', id],
        queryFn: () => {
            return youtube.commentsList(id);
        },
            // staleTime: 5000
    });

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>error!!!</p>}
            {comments && (
                <>
                    <ul className='overflow-y-auto flex flex-col gap-4 md:gap-6 h-[50vh] md:h-auto'>
                        {comments.map(comment => (
                            <li key={comment.id} className='flex items-start w-full pr-4 gap-2 md:gap-4'>
                                <div className="overflow-hidden rounded-full w-10 h-10 md:w-12 md:h-12">
                                    <img src={`${comment.snippet.topLevelComment.snippet.authorProfileImageUrl}`} alt={comment.snippet.topLevelComment.snippet.authorDisplayName} className='w-full' />
                                </div>
                                <div className='w-[calc(100%-3rem)] md:w-[calc(100%-4rem)]'>
                                    <div>
                                        <strong className='text-base md:text-sm font-medium'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</strong>
                                        <span className='ml-2 text-sm md:text-xs font-light text-gray-200'>{formatAgo(comment.snippet.topLevelComment.snippet.publishedAt)}</span>
                                    </div>
                                    <pre
                                        className="font-light text-base md:text-sm break-keep whitespace-pre-wrap"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(comment.snippet.topLevelComment.snippet.textDisplay),
                                        }}
                                    />

                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

