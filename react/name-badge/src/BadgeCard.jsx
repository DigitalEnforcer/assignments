import React from "react";

export default function badgeCard(props){
    return (
        <>
            <div className="badge">
                <div className="badge-label">Badge</div>
                <div className="badge-contents">
                    <p className="badge-name">Name: {props.firstName} {props.lastName}</p>
                    <p className="badge-email">Email: {props.email}</p>
                    <p className="badge-phone">Phone: {props.phoneNumber}</p>
                    <span className="badge-born">Born in: {props.placeOfBirth}</span>
                    <span className="badge-food">Loves: {props.favoriteFood} </span>
                    <p className="badge-comments">Comments: {props.comments}</p>
                </div>
            </div>
        </>
    )
}