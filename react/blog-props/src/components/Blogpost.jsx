import React from "react"
import data from "./data"
import Blog from "./Blog"

export default function Blogpost (){
    const posts = data.map(item => {
        return (
            <Blog
                item = {item}    
            />
        )
    })
    return (
        <div>
            <section className="blogSection">
                {posts}
                <div className="olderPosts">OLDER POSTS</div>
            </section>
            
        </div>
        )
}