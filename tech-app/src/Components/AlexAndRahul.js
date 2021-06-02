import React from 'react'
import FadeIn from 'react-fade-in';
import Banner from '../FigmaParts/Banner.png';
import Asset from '../FigmaParts/Asset.png';
import Growth from '../FigmaParts/Growth.png';

export default function AlexAndRahul() {
    return (
        <div className = "AlexAndRahul">
            <img className = "Banner" src = {Banner} alt = "Design Element"/>
            <FadeIn>
                <div className = "StrengthPics">
                    <img src = {Asset} alt = "why i am an asset to them"/>
                    <img src = {Growth} alt = "why i am an asset to them"/>
                </div>
            </FadeIn>
            <footer>
                <FadeIn>
                    <h1 className = "footerTitle">Alex And Rahul</h1>
                </FadeIn>
            </footer>
        </div>
    )
}

