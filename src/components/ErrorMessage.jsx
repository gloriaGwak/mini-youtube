import React from 'react';
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


export default function ErrorMessage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <TbFaceIdError className="w-16 h-16 mb-6" alt="Error" />
            <p className="text-lg font-medium">Oops! Something went wrong. 😢</p>
            <button
                onClick={() => navigate('/')}
                className="mt-10 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
                Go to Home
            </button>
        </div>
    );
}

