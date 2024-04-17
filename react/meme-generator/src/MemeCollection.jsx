import React from "react";

export default function memeCollection (props){
    console.log(props)

    const [isShown, setIsShown] = React.useState(false)
    const [topText, setTopText] = React.useState("")
    const [bottomText, setBottomText] = React.useState("")

    function handleChangeTop (event){
        const {value} = event.target
        setTopText(value)
    }
    function handleChangeBottom (event){
        const {value} = event.target
        setBottomText(value)
    }

    function removeMeme (memeId){
        const updatedMemes = props.memeList.filter(meme => meme.id !== memeId);
        props.setMemeList(updatedMemes)
    }

    function editMeme (memeId){
       props.setMemeList(prevMemeList => {
            return prevMemeList.map(meme => {
                if(meme.id === memeId){
                    return {
                        ...meme,
                        topText,
                        bottomText
                    }
                }else {
                    return meme
                }
            })
       }
       )
       toggleShown()
    }

    function toggleShown (){
        setIsShown(prevShown => !prevShown)

    }
    console.log (topText, bottomText)
    const allMemes = props.memeList.map(meme => {
        return (
            <div key={meme.id}>
                <div className="memeImageContainer">
                    <img src={meme.randomImage} className ="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
                <div className="editWindow">
                    <button onClick={() => removeMeme(meme.id)}>Delete</button>
                    <button onClick={toggleShown}>Edit</button>
                </div>
                    {isShown && <div className="editWindow">
                                <input 
                                    type="text"
                                    placeholder="Top Text"
                                    onChange={handleChangeTop}
                                    name="topText"
                                    value={topText}
                                />

                                <input 
                                    type="text"
                                    placeholder="Bottom Text"
                                    onChange={handleChangeBottom}
                                    name="bottomText"
                                    value={bottomText}
                                />
                                <button onClick={() => editMeme(meme.id)}>Update</button>
                                <button onClick={toggleShown}>Cancel</button>
                            </div>}
            </div>
        )
    })
    return (
        <div>{allMemes.reverse()}</div>
    )
}
