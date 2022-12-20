import { getPostsState } from "../redux/store"

const Post = function ({ post, displayMode }) {
    const title = post.title
    const content = post.content
    switch (displayMode) {
        case "Newsfeed":
            return (
                <div className="PostInNewsfeed">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            )
        default:
            return null
    }
}

export default Post
