import { TurborepoAccessTraceResult } from "next/dist/build/turborepo-access-trace";
import { Holtwood_One_SC } from "next/font/google";
import Image from "next/image";
import {ScoreCard} from './Scorecard/ScoreCard'

export default function Home() {

 
  
  return ( 
    <div>
      {/* app name */}
      <h1>18 Eagles</h1>
      {/* course name */}
      <h2>Course Name</h2>
      {/* scorecard: 
          hole: par,playerStrokes
          +-Par e.g. +2, -1, etc.
          Total score */}
      <ScoreCard />
      
          
    </div>
  );
}


