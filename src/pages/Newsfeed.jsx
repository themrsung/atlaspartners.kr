import axios from "axios"
import { useEffect, useState } from "react"
import Post from "../components/Post"

const Newsfeed = function () {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts")
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <main className="Newsfeed Wrap">
            <section className="NewsfeedPostsList">
                {posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            post={post}
                            displayMode="Newsfeed"
                        ></Post>
                    )
                })}
            </section>
        </main>
    )
}

export default Newsfeed
