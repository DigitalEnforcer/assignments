import React from "react";

//Need the [name]: value function to match up the color details
//Need to have a && to make the extra input color options show or not
//button should add colors inputs

export default function Gradient(){
    const [color, setColor] = React.useState({
        firstColor: "#000000",
        secondColor: "#000000",
        degree: 0
    })



    function handleChange (event){
        const {name, value} = event.target 
        setColor(prevColor =>{
            return {
                ...prevColor,
                [name]:value
            }
        })
    }
    console.log(color)
    const gradientStyle = {
        background: `linear-gradient(${color.degree}deg, ${color.firstColor}, ${color.secondColor})`}

    return (
        <>
        <h1 className="codeTitle">CSS Gradient Code Generator</h1>
        <form className="box2">
            <div className="colorOptions">
                <h2>Options</h2>
                <div className="option1">
                    <span>Color 1:</span>
                    <span>{color.firstColor}</span>
                    <input type="color"
                    value={color.firstColor}
                    onChange={handleChange}
                    name="firstColor"
                    />
                </div>
                <div className="option2">
                    <span>Color 2:</span>
                    <span>{color.secondColor}</span>
                    <input type="color"
                    value={color.secondColor}
                    onChange={handleChange}
                    name="secondColor"
                    />
                </div>
                <div className="option3">
                    <span>Angle:</span>
                    <input type="number"
                    value={color.degree}
                    onChange={handleChange}
                    name="degree"
                    />
                </div>
            </div>
            <div className="colorGradientOutput">
                <textarea readOnly value={`background: linear-gradient(${color.degree}deg, ${color.firstColor} , ${color.secondColor});
                                        \n-moz-background: linear-gradient(${color.degree}deg, ${color.firstColor} , ${color.secondColor});
                                        \n-webkit: linear-gradient(${color.degree}deg, ${color.firstColor} , ${color.secondColor})`}
                                    onChange={handleChange}

                        />
                <div style={gradientStyle} className="box1"></div>
            </div>
        </form>
        </>
    )
}