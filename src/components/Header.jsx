import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from "react-icons/bs";


export default function Header() {
    const {keyword} = useParams();
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setText(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        navigate(`/videos/${text}`);
    }

    // when keyword changed, set keyword in search input
    useEffect(() => setText(keyword || ''), [keyword]);

    return (
        <header className='flex justify-between items-center w-full p-4 border-b border-zinc-600 text-md gap-2'>
            <div className=''>
                <Link to='/' className='flex items-center'>
                    <BsYoutube className='text-4xl text-brand' />
                    <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
                </Link>
            </div>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className='flex justify-end items-center gap-2'>
                    <input 
                        className='w-3/4 h-10 px-4 bg-black border-solid text-gray-50 border rounded-3xl'
                        type='text' 
                        id='search' 
                        title='search video' 
                        value={text}
                        onChange={({target}) => setText(target.value)}
                        placeholder='Enter video title' 
                    />
                    <button 
                        className='w-10 h-10 order-solid bg-zinc-600 border rounded-full'
                        type='' 
                        title='Search
                    '>
                        <BsSearch className='w-full h-5' />
                    </button>
                </form>
                {/* <button type='' title='Search'>
                    <CiSearch />
                </button> */}
            </div>
            {/* <Link to='/videos'>Video List </Link>
            <Link to='/videos/search/:id'>Search Result </Link>
            <Link to='/videos/watch/:id'>Video Detail </Link> */}
        </header>
    )
}