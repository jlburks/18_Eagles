'use client'
import HoleCell from './HoleCell'
import { useState } from 'react'




export function ScoreCard() {
    // scorecard variables
    const [TotalScore,setTotalScore] =  useState(0)
    const [toPar,setToPar] = useState(0)
    // scorecard functions
    const [testFunction,setTestFunction] = useState()


    const updateTotal = (i) => {
        setTotalScore(i+TotalScore)
    }

    return (
        
        <div>

            {/* top main stats */}
            Total Score: {TotalScore}
            <br></br>
            To Par: {toPar}
            <div id="card">
            <HoleCell className="holeCell" id="hole1" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole2"/>
            <HoleCell className="holeCell" id="hole3"/>
            <HoleCell className="holeCell" id="hole4"/>
            <HoleCell className="holeCell" id="hole5"/>
            <HoleCell className="holeCell" id="hole6"/>
            <HoleCell className="holeCell" id="hole7"/>
            <HoleCell className="holeCell" id="hole8"/>
            <HoleCell className="holeCell" id="hole9"/>
            <HoleCell className="holeCell" id="hole10"/>
            <HoleCell className="holeCell" id="hole12"/>
            <HoleCell className="holeCell" id="hole13"/>
            <HoleCell className="holeCell" id="hole14"/>
            <HoleCell className="holeCell" id="hole15"/>
            <HoleCell className="holeCell" id="hole16"/>
            <HoleCell className="holeCell" id="hole17"/>
            <HoleCell className="holeCell" id="hole18"/>
            </div>
        </div>
    )
}

// set up ScoreCard
        // assign Scorecard component to hole number
        // pass function to HoleCell to affect total score