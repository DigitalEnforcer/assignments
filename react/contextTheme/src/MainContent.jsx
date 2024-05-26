import React from "react";
import {ThemeContext} from "./themeContext";

export default function MainContent(){
    const context = React.useContext(ThemeContext)
    return (
        <div className={`${context.mode}-mode`}> 
            <div className={`mainPageContent`}>
                <h1>Web Content for Everyone</h1>
                <p> In a world of false truths, we need to be perceptive enough to combat those falsehoods and bring truth to the masses. 
                    There is nothing that is sacred any more and so we have the right to create our own truths and pass those off as fact. 
                    Without the higher order of perception, we are all merely fools. Rest assured, we have the ability to convince those
                    who do not believe into believers. 
                </p>
                <br></br>
                <h3>Follow The BrotherHood and become a Force for Good!</h3>
            </div>
        </div>
    )
}