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
        setTotalScore(Number(i+TotalScore))
    }

    return (
        
        <div>

            {/* top main stats */}
            Total Score: {TotalScore}
            <br></br>
            To Par: {toPar}
            <div id="card">
            <HoleCell className="holeCell" id="hole1" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole2" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole3" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole4" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole5" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole6" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole7" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole8" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole9" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole10" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole12" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole13" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole14" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole15" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole16" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole17" updateTotal={updateTotal}/>
            <HoleCell className="holeCell" id="hole18" updateTotal={updateTotal}/>
            </div>
        </div>
    )
}

// set up ScoreCard
        // assign Scorecard component to hole number
        // pass function to HoleCell to affect total score