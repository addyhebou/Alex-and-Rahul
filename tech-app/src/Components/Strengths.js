import React from 'react'
import FadeIn from 'react-fade-in';
import Banner from '../FigmaParts/Banner.png';
import DDD from '../FigmaParts/Strengths Text.png';
import Icons from '../FigmaParts/Strength Pic.png';

export default function Strengths() {
    return (
        <div className = "Strengths">
            <img className = "Banner" src = {Banner} alt = "Design Element"/>
            <FadeIn>
                <div className = "StrengthPics">
                    <img src = {DDD} alt = "Design, Development, Marketing"/>
                    <img src = {Icons} alt = "Icon of Premiere Pro, Figma, and React"/>
                </div>
            </FadeIn>
            <footer>
                <FadeIn>
                    <h1 className = "footerTitle">Strengths</h1>
                </FadeIn>
            </footer>
        </div>
    )
}

