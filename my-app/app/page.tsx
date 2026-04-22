'use client'
import Image from "next/image";
import ScoreCard from "./components/ScoreCard"
import { useState } from "react";

export default function Home() {
  const [hole1,setHole1] = useState(0)
  const [hole2,setHole2] = useState(0)
  const [hole3,setHole3] = useState(0)
  // const [hole4,setHole4] = useState(0)
  // const [hole5,setHole5] = useState(0)
  // const [hole6,setHole6] = useState(0)
  // const [hole7,setHole7] = useState(0)
  // const [hole8,setHole8] = useState(0)
  // const [hole9,setHole9] = useState(0)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        hole 1: <input onChange={(e)=>{setHole1(Number(e.target.value))}}></input>
        hole 2: <input onChange={(e)=>{setHole2(Number(e.target.value))}}></input>
        hole 3: <input onChange={(e)=>{setHole3(Number(e.target.value))}}></input>
        {/* hole 4: <input onChange={(e)=>{setHole4(e)}}></input>
        hole 5: <input onChange={(e)=>{setHole5(e)}}></input>
        hole 6: <input onChange={(e)=>{setHole6(e)}}></input>
        hole 7: <input onChange={(e)=>{setHole7(e)}}></input>
        hole 8: <input onChange={(e)=>{setHole8(e)}}></input>
        hole 9: <input onChange={(e)=>{setHole9(e)}}></input> */}
      </div>
        Total Score: {Number(hole1+hole2+hole3)}
    </div>
  );
}
