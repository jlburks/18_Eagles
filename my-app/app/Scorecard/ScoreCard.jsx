'use client'
import HoleCell from './HoleCell'
import { useState } from 'react'




export function ScoreCard() {
    // scorecard variables
    const [TotalScore,setTotalScore] =  useState(0)
    const [toPar,setToPar] = useState(0)
    // scorecard functions
    const [testFunction,setTestFunction] = useState()

    return (
        
        <div>

            {/* top main stats */}
            Total Score: {TotalScore}
            <br></br>
            To Par: {toPar}

            <HoleCell />
        </div>
    )
}

// set up ScoreCard
        // assign Scorecard component to hole number
        // pass function to HoleCell to affect total score