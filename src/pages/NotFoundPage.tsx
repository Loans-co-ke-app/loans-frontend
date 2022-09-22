import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='flex w-full h-full flex-col gap-4 justify-center items-center text-center'>
            <div className='relative'>
                <img src="/404.gif" alt="" className='w-96 h-96 rounded-3xl' />
            </div>
            <div className='flex flex-col gap-2 py-6'>
                <h1 className='text-4xl font-bold'>404</h1>
                <p className='text-lg font-medium'>Page not found back to <Link to={'/'}>Homepage</Link></p>
            </div>
        </div>
    )
}

export default NotFoundPage
// CS-PhySci