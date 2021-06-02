import React from 'react';
import FadeIn from 'react-fade-in';
import Banner from '../FigmaParts/Banner.png';
import ContactIcons from '../FigmaParts/Contact Icons.png';
import Message from '../FigmaParts/Message.png';

export default function Contact() {
    return (
        <div className = "">
            <img className = "Banner" src = {Banner} alt = "Design Element"/>
            <FadeIn>
                <div className = "Contact">
                    <img src = {Message} alt = "ContactIcons"/>
                    <img src = {ContactIcons} alt = "ContactIcons"/>
                </div>
            </FadeIn>
            <footer>
                <FadeIn>
                    <h1 className = "footerTitle">Contact</h1>
                </FadeIn>
            </footer>
        </div>
    )
}

