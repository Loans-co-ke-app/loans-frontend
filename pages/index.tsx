import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { axiosQuery } from '@ui-services/api'
import HomeFeaturedPost from '@ui-components/HomeFeaturedPost'
import HomeNews from '@ui-components/HomeNews'

export default function Home() {
  const [posts, setPosts] = React.useState<any[]>([])

  
  const fetchPosts = async () => {
    const response = await axiosQuery.get('')
    setPosts(response.data)
    console.log(response.data);
  }
  React.useEffect(() => {
    fetchPosts()
  } , [])
  return (
    <div>
      <HomeFeaturedPost posts={posts!} />
      <HomeNews  posts={posts}/>
    </div>
  );
}
