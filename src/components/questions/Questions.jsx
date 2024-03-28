
import React, { useState } from 'react';
import './questions.css';
import education from '../../img/questions/001.png';
import close from '../../img/questions/02.png'


const Questions = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "Where can I watch?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Varius vitae, convallis amet lacus sit aliquet nibh?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Mauris id nibh eu fermentum mattis purus?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Eros imperdiet rhoncus?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Fames imperdiet quam fermentum?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Tortor nisl pellentesque sit quis orci dolor?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        },
        {
            question: "Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?",
            answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis."
        }
    ];

    const toggleItem = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }


    return (

        <section className="questions">
            <div className="questions__wrap container">

                <div className="questions__headline">
                    <div className="questions__title-wrap">
                        <div className="questions__title-icon">
                            <img src={education} alt="education-img" />
                        </div>
                        <h1 className="questions__title">Frequently <br /> asked questions</h1>
                    </div>
                    <h2 className="questions__subtitle">Cryptocurrency arbitrage fully customizable manually</h2>
                </div>

                <div className="questions__list">

                    {questions.map((item, index) => (
                        <div key={index} className="questions__item">

                            <div className="questions__block" onClick={() => toggleItem(index)}>
                                {item.question}
                                <img src={close} alt="close-img" className="questions-list__icon"
                                    style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                                />
                            </div>

                            {activeIndex === index && (
                                <p className={`questions-list__popup ${activeIndex === index ? 'active' : ''}`}>
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </section>


    );
}

export default Questions;