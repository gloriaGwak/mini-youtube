import React from 'react';

export default function Loading() {
    const placeholderCount = 15; // Quantity of placeholder
    
    return (
        <ul className="grid grid-cols-1 gap-y-12 md:gap-y-8 md:gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Array.from({ length: placeholderCount }).map((_, index) => (
            <li key={index} className="flex flex-col items-center justify-center w-full rounded-lg animate-pulse"
            >
                <div className="video_area w-full rounded-2xl bg-gray-200 md:rounded-lg animate-pulse"></div>
                <div className='w-full mt-4'>
                    <div className="w-3/4 h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
            </li>
            ))}
        </ul>
    );
}