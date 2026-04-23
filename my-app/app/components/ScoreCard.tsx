'use client';
import './ScoreCard.css'
import { useState } from 'react';
import HoleCell from './HoleCell';

export default function ScoreCard() {

    return (
        <div className="score-card">
            <HoleCell holeStats={{holeNum: 1}}></HoleCell>
        </div>
    )
}