import {useState} from 'react'


export default function HoleCell(props) {
    
    let [prevStroke,setPrevStroke] = useState(0)
    
    
    return (
        <div className="rounded-xl border border-green-300 p-4 backdrop-blur-none ">
            <p>hole {props.holeNumber}</p>
            <input className="bg-gray-100 p-3 rounded-md" onChange={(e)=> {setPrevStroke(Number(e.target.value));props.updateTotal(Number(e.target.value) - prevStroke)}}></input>
        </div>
    )
}