import React from "react"


export default function Card(props){
    let value
    let border
    if (props.spot.price <= 500) {
        value = "$"
    }
    else if (props.spot.price <= 1000){
        value ="$$"
    }
    else if (props.spot.price > 1000){
        value ="$$$"
    }

    if (props.spot.timeToGo === "Summer") {
        border = "summer.jpg"
    }
    else if (props.spot.timeToGo === "Fall"){
        border = "fall.jpg"
    }
    else if (props.spot.timeToGo === "Spring"){
        border = "spring.jpg"
    }
    else if (props.spot.timeToGo === "Winter"){
        border = "winter.jpg"
    }
    return (
        <div className="vacationSpot" style={{backgroundImage: `url(./src/assets/${border})`, width: "400px", borderRadius: "25px", backgroundSize:"cover"}}>
            <div className="vacationCard">
                <img src={`./src/assets/${props.spot.coverImg}`} className="card-image"/>
                <div className="information">
                    <h2 className="vacation-place">{props.spot.place}</h2>
                    <h3 className="vacation-price">${props.spot.price}</h3>
                    <p className="vacation-time">Available {props.spot.timeToGo} 2024</p>
                    {/* <p className="money">{value}</p> */}
                </div>
            </div>
        </div>
    )
}