import {useState} from 'react'


export default function HoleCell(props) {
    
    let [prevStroke,setPrevStroke] = useState(0)
    
    
    return (
        <div>
            <p>hole {props.holeNumber}:</p>
            <input onChange={(e)=> {setPrevStroke(Number(e.target.value));props.updateTotal(Number(e.target.value) - prevStroke)}}></input>
        </div>
    )
}