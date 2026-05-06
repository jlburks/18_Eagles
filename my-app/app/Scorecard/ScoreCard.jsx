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
            <h1 className="text-3xl font-bold underline">Total Score: {TotalScore}</h1>
            
            To Par: {toPar}
            <div id="card" className="grid grid-cols-3 gap-4">
            <HoleCell className="holeCell" id="hole1" updateTotal={updateTotal} holeNumber={1}/> 
            <HoleCell className="holeCell" id="hole2" updateTotal={updateTotal} holeNumber={2}/> 
            <HoleCell className="holeCell" id="hole3" updateTotal={updateTotal} holeNumber={3}/> 
            <HoleCell className="holeCell" id="hole4" updateTotal={updateTotal} holeNumber={4}/> 
            <HoleCell className="holeCell" id="hole5" updateTotal={updateTotal} holeNumber={5}/> 
            <HoleCell className="holeCell" id="hole6" updateTotal={updateTotal} holeNumber={6}/> 
            <HoleCell className="holeCell" id="hole7" updateTotal={updateTotal} holeNumber={7}/> 
            <HoleCell className="holeCell" id="hole8" updateTotal={updateTotal} holeNumber={8}/> 
            <HoleCell className="holeCell" id="hole9" updateTotal={updateTotal} holeNumber={9}/> 
            <HoleCell className="holeCell" id="hole10" updateTotal={updateTotal} holeNumber={10}/> 
            <HoleCell className="holeCell" id="hole12" updateTotal={updateTotal} holeNumber={11}/> 
            <HoleCell className="holeCell" id="hole13" updateTotal={updateTotal} holeNumber={12}/>
            <HoleCell className="holeCell" id="hole14" updateTotal={updateTotal} holeNumber={13}/>
            <HoleCell className="holeCell" id="hole15" updateTotal={updateTotal} holeNumber={14}/>
            <HoleCell className="holeCell" id="hole16" updateTotal={updateTotal} holeNumber={15}/>
            <HoleCell className="holeCell" id="hole17" updateTotal={updateTotal} holeNumber={16}/>
            <HoleCell className="holeCell" id="hole18" updateTotal={updateTotal} holeNumber={17}/>
            <HoleCell className="holeCell" id="hole18" updateTotal={updateTotal} holeNumber={18}/>
            </div>
        </div>
    )
}

