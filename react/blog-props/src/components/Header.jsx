import React from "react"
import Navbar from "./Navbar"

export default function Header(){
    return (
        <div className="mainHeader">
                <Navbar />
                <div className="blogTitle">
                    <h1 className="TitleOfItAll">Clean Blog</h1>
                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
        </div>
    )
}