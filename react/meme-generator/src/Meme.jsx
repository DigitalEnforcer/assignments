import React from "react";
import memeData from "./memeData";

export default function Meme(){
  //  const [memeImage, setMemeImage] = React.useState()
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function randomMeme(){
        const randomElement = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)]
        const randomMeme = randomElement.url
        setMeme (prevMeme => ({
            ...prevMeme,
            randomImage: randomMeme
        }))
    }
    function handleChange (event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }
    
    return (
        <main>
            <div className="memeForm">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form-input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form-input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button className="form-button" onClick={randomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="memeImageContainer">
                <img src={meme.randomImage} className ="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
 

/*
1.
const [color, setColor] = useState("pink")

setColor("red")


2.
const [color, setColor] = React.useState("pink")

setColor(prevColor => {
    return (prevColor === "pink" ? "blue" : "pink"

    )
})

3.
const [people, setPeople] = React.useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevState => {
    return [...prevState, 
        {
            firstName: "David", 
            lastName: "Frohlich"
        }]
    })

4a.
const [colors, setColors] = React.useState(["pink", "blue"])
setColors (prevColors => [...preColors, "green"])

4b.
const [countObject, setCountObject] = React.useState({count:0})
setCountObject(prevCountObject => ({count: prevCountObject.count + 1}))

5.
const [person, setPerson] = React.useState({
    firstName: "John",
    lastName: "Smith"
})
setPerson(prevPerson => {
    return {...prevPerson, age:"30"}})

6.
Data type was changed from an array to a string

*/