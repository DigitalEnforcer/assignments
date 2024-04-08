import React from "react"

export default function Blog(props){
    return (
        <div className="blog-post-preview">
            <h2 className="blog-title">{props.item.title}</h2>
            <h3 className="blog-subtitle">{props.item.subTitle}</h3>
            <p className="blog-author-date">Posted by {props.item.author} on {props.item.date}</p>
            <hr></hr>
        </div>
    )
}