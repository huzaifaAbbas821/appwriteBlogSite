import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
                   <div className="flex  justify-center items-center min-h-screen mx-auto container mb-20 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                {posts.map((post) => (
                  <div
                    key={post.$id}
                    className="rounded-xl shadow-lg bg-slate-200 border-slate-400 border-[1px] "
                  >
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default AllPosts