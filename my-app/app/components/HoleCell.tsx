import { useState } from "react";

export default function HoleCell(holeNum: number) {
    const [holeNumber, setHoleNumber] = useState(holeNum);
    const [stokes,setStrokes] = useState()
    const [parNumber, setParNumber] = useState(0);

    return (
        <div className="hole-cell">
            <input type="number" onChange={(e)=> {
                setStrokes(e.target.value)
            }}></input>
            hole: {holeNumber}
        </div>
    )
}