import React from 'react';

export default function NotFound() {
    return (
        <div className="inner">
            <div className="flex flex-col items-center justify-center h-screen py-20 md:py-14 text-white text-center ">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-6">Oops! The page you`re looking for doesn`t exist. Try one of these instead:</p>
                <div className="space-x-4">
                    <a href="/" className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">Go to Homepage</a>
                </div>
            </div>
        </div>
    )
}