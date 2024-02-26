import { useState } from "react"
export default function Button()
{

    const [emoji,setEmoji] = useState("😃")

    const handleClick = (e) =>
    {
        console.log("OUCH!")
        e.target.style.display = 'none'
        setEmoji("😡")
        setTimeout(()=>{
            setEmoji("😃")
        },2000)
    }

    return(
        <div>
            <button onClick={(e) => handleClick(e)}> Click me {emoji} </button>
        </div>
    )
}