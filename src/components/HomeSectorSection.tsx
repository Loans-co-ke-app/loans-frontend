import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IPostEntity } from '../interfaces/Post'
import HomeSectorSectionItem from './HomeSectorSectionItem'

const HomeSectorSection = ({ title, posts, loading }: { loading: boolean, title: string, posts: IPostEntity[] }) => {
    return (
        <div className='py-4 flex flex-col gap-2 border-b '>
            <h2 className='text-purple-600 text-center my-2'>{title}</h2>
            <div className='flex flex-wrap gap-4'>
                {
                    posts.map((post) => (

                        <HomeSectorSectionItem post={post} key={post.article_title} loading={loading} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeSectorSection