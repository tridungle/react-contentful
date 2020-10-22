import { useEffect, useState } from 'react'

import { getBlogPosts } from '../contentful'

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPosts().then((blogPosts) => {
      setPosts(blogPosts)
      setLoading(false)
    })
  }, [])
  return [posts, isLoading]
}
