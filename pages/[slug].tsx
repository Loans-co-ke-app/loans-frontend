import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faBookmark, faChevronRight, faEnvelopeOpen, faFeed, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BASE_URL, { axiosQuery } from '@ui-services/api';
import HtmlDecoder from '../components/HtmlDecoder';
import { IPostEntity } from '../interfaces/Post';
import { samplePost } from '../utils/postSample';

const SinglePost = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>('');
    const { slug } = useParams()
    const [post, setPost] = React.useState<IPostEntity>(
        samplePost
    )
    const fetchPost = async () => {
        try {

            setLoading(true)
            const res = await axiosQuery.get(`/${slug}`)
            setPost(res.data)
            setError('')
            setLoading(false)
        } catch (err: any) {
            setError(err.response.data.message)
            setLoading(false)
        }

    }
    React.useEffect(() => {
        fetchPost()

    }, [])

    return (
        <div className="grid md:grid-cols-[2fr_1fr] mt-4">
            {/* Left 1 */}
            <div className='px-4'>
                <div>

                </div>
                <div className='w-full h-96 relative'>
                    <img src={post.featured_image} alt="" className='absolute h-full w-full  object-cover' />

                </div>
                <div className='py-2 text-[.85rem] flex items-center gap-2'>
                    <span>{post.authors.first_name} {post.authors.last_name}</span> <span>{moment(post.publish_date).format("LL")}</span>
                </div>
                <h1 className='text-3xl py-2 text-purple-600 font-bold'>{post.article_title}</h1>
                <div className='py-3'>
                    {HtmlDecoder({ html: post.article_body })}
                </div>
                <div className='border my-3 flex gap-2'>
                    <div className='w-2/5 h-full bg-gray-300 p-4'>
                        <img src={'/user.svg'} alt="" className='w-full h-1/2' />
                        <div className='text-[.85rem]'>
                            <span>{`${post.authors.first_name} ${post.authors.last_name}`}</span>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h1 className='text-2xl py-3'>About the author</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos sapiente praesentium sint. Voluptas, optio ducimus modi officia sunt vel. Quisquam sed nemo nam est laboriosam placeat perferendis soluta illum.
                        </p>
                        <div className='py-2 flex items-center gap-2'>
                            <FontAwesomeIcon icon={faFacebook} color="blue" />
                            <FontAwesomeIcon icon={faTwitter} color="blue" />
                            <FontAwesomeIcon icon={faFeed} color="orange" />
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Ad 1 */}
                <div className="w-80 h-64 mx-auto relative">
                    <img
                        src={"/transport.webp"}
                        alt=""
                        className="absolute w-full h-full -z-[1] object-cover"
                    />
                    <div className="w-full h-full z-10 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-2xl font-bold text-white">Advert</h1>
                    </div>
                </div>
                <hr className="h-2 my-3 bg-purple-600" />
                {/* News letter */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-purple-600 font-bold">Get newsletter</h1>{" "}
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </div>
                    <div className="bg-gray-300 p-4 bg-opacity-30">
                        <p>
                            Subscribe to our newsletter to get the latest news and updates
                        </p>
                        <div className="flex items-center justify-between py-4">
                            <input
                                type="text"
                                className="w-full px-2 py-1 rounded-md text-gray-700 focus:ring-0 focus:border-none"
                                placeholder="Enter your email"
                            />
                            <button className="bg-purple-600 text-white px-2 py-1 rounded-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="h-2 my-3 mt-5 bg-purple-600" />
                {/* Featured news */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1>Editors pick</h1>{" "}
                        <FontAwesomeIcon icon={faNewspaper} size="1x" />
                    </div>
                    {/* <ul className="flex flex-col gap-5 py-1">
                        {posts.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-full h-24 md:w-24 relative">
                                    <img
                                        src={item.featured_image}
                                        alt=""
                                        className="w-full h-full object-cover absolute"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center text-[.85rem] gap-3">
                                        <span>{item.authors.first_name}</span>
                                        <span>{moment().format("LL")}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-purple-600 font-bold">{item.article_title}</h2>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </div>
    );
};




export default SinglePost