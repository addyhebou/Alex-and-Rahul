import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';
import IntroText from '../FigmaParts/Intro Text.png'

let changeNumbers = (seconds, names) => {
    if (seconds === names.length - 1 ) seconds = 0;
    else seconds += 1;
    return seconds;
}

export default function Home() {
    let names = ['Addy Hebou', 'Developer', 'Video Producer', 'Programmer', 'Designer']
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => changeNumbers(seconds, names));
        }, 1500);
        return () => clearInterval(interval);
    });
 
    return (
        <div>
            <img className = "IntroText" src = {IntroText} alt = "Intro Text"/>
            <footer>
                <FadeIn>
                    <h1 className = "footerTitle">{names[seconds]}</h1>
                </FadeIn>
            </footer>
        </div>
    )
}

