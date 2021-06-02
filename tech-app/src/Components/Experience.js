import React from 'react'
import FadeIn from 'react-fade-in';
import Marketing from '../FigmaParts/Marketing Experience.png';
import Tech from '../FigmaParts/Tech Experience.png';

export default function Experience() {
    return (
        <div className = "Experience">
            <FadeIn>
                <div className = "StrengthPics">
                    <img src = {Tech} alt = "techExperience"/>
                    <img src = {Marketing} alt = "marketingExperience"/>
                </div>
            </FadeIn>
            <footer>
                <FadeIn>
                    <h1 className = "footerTitle">Experience</h1>
                </FadeIn>
            </footer>
        </div>
    )
}

