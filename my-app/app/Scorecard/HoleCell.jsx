import {useState} from 'react'


export default function HoleCell(props) {
    
    let [prevStroke,setPrevStroke] = useState(0)


    
    return (
        <div>
            <input onChange={(e)=> {setPrevStroke(Number(e.target.value));props.updateTotal(Number(e.target.value) - prevStroke)}}></input>
            hole#
        </div>
    )
}