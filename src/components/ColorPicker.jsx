import { useState } from "react"
import styles from "./ColorPicker.module.css"
export default function ColorPicker()
{

    const [color, setColor] = useState();

    function handleColorChange(event)
    {
        setColor(event.target.value)
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_color} style={{backgroundColor: color}}>
                {color}
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}