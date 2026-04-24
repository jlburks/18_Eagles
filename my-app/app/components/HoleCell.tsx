import { useState } from "react";

export default function HoleCell({holeNum,par,editScore}) {
    const [holeNumber, setHoleNumber] = useState(holeNum);
    const [strokes,setStrokes] = useState(0)
    const [parNumber, setParNumber] = useState(par);

    const assignHoleNumber = ()=> {
        setHoleNumber(holeNumber)
    }
    

    const getStrokes = () => {
        if (strokes > 0) {
            return strokes
        } else {
            return null
        }
    }

    const fromPar = () => {
        if (strokes > 0) {
            return(strokes-parNumber)
        }
    }

    return (
        <div className="hole-cell">
            <input type="number" onChange={(e)=> {
                console.log(e)
                setStrokes(Number(e.target.value))
                editScore(Number(e.target.value))
            }}></input>
            hole: {holeNumber} par: {parNumber}
        </div>
    )
}