import React, { useState } from 'react';

import './examples.css';
import mainIcon from '../../img/examples/001.png';
import binance from '../../img/examples/02.png';
import huobi from '../../img/examples/03.png';
import bybit from '../../img/examples/01.png';
import arrows from '../../img/examples/arrows.png';
import arrowRight from '../../img/examples/arrow-right.png';
import arrowDown from '../../img/examples/arrow-down.png';
import tezer from '../../img/examples/tezer.svg';
import shadow from '../../img/examples/shadow.png'



const Examples = () => {

    const [visibleRows, setVisibleRows] = useState({});

    const toggleVisibility = (index) => {
        setVisibleRows((currentVisibleRows) => ({
            ...currentVisibleRows,
            [index]: !currentVisibleRows[index],
        }));
    };

    const rows = Array(6).fill(null);

    return (
        <section className='examples'>
            <div className="examples__wrap container">

                <div className="examples__title-wrap">
                    <div className="examples__main-icon">
                        <img src={mainIcon} alt="mainIcon" />
                        <img src={shadow} alt="shadow" className="examples__shadow" />
                    </div>

                    <h1 className="examples__title">Examples of recent<span>bot mappings</span></h1>
                    <h2 className="examples__subtitle">Сryptocurrency arbitrage fully customizable manually</h2>
                </div>

                <div className="examples__table">

                    <div className=" table-row__name ">
                        <div className="column__name exchanges-column__name">
                            <p>Exchanges:</p>
                        </div>
                        <div className="column__name actions-column__name">
                            <p>Actions:</p>
                        </div>
                        <div className="column__name profit-column__name">
                            <p>Profit:</p>
                        </div>
                    </div>

                    {rows.map((_, index) => (
                        <div key={index} className="table__row">
                            <div className="table-row__wrap">

                                <div className="exchanges__column">

                                    <div className="exchanges-column__icons">
                                        <img src={bybit} alt="bybit" />
                                        <img src={arrows} alt="arrows" />
                                        <img src={binance} alt="binance" />
                                    </div>
                                </div>

                                <div className="actions__column">

                                    <div className="actions__sell">
                                        <img src={binance} alt="binance" className="sell__icon" />
                                        <p className="sell__text">Selled 0,5 BTC <br /> for $14,500</p>
                                    </div>

                                    <div className="actions__arrow-right">
                                        <img src={arrowRight} alt="arrowRight" />
                                    </div>

                                    <div className="actions__buy">
                                        <img src={bybit} alt="binance" className="buy__icon" />
                                        <p className="buy__text">Buyed 0,5 BTC $ 14,100</p>
                                    </div>

                                    <div className="actions__arrow-right">
                                        <img src={arrowRight} alt="arrowRight" />
                                    </div>

                                    <div className="actions__move">
                                        <p className="move__text">Move 0,5 BTC From ByBit to Binance</p>
                                    </div>
                                </div>

                                <div className="profit__column">

                                    <div className="profit__img">
                                        <img src={tezer} alt="tezer" />
                                    </div>
                                    <div className="profit__amount">
                                        <p className="amount__text">Profit:</p>
                                        <p className="amount__value">$ 380 USDT</p>
                                    </div>
                                </div>

                                <button type='button' className="arrow__hidden" onClick={() => toggleVisibility(index)}>
                                    <img src={arrowDown} alt="arrowDown" className={`arrow__icon ${visibleRows[index] ? 'is-rotated' : ''}`} />
                                </button>

                            </div>

                            <div className={`actions__column actions-column__hidden ${visibleRows[index] ? 'show' : ''}`}>

                                <div className="actions__sell">
                                    <img src={binance} alt="binance" className="sell__icon" />
                                    <p className="sell__text">Selled 0,5 BTC <br /> for $14,500</p>
                                </div>

                                <div className="actions__arrow-right">
                                    <img src={arrowRight} alt="arrowRight" />
                                </div>

                                <div className="actions__buy">
                                    <img src={bybit} alt="binance" className="buy__icon" />
                                    <p className="buy__text">Buyed 0,5 BTC $ 14,100</p>
                                </div>

                                <div className="actions__arrow-right">
                                    <img src={arrowRight} alt="arrowRight" />
                                </div>

                                <div className="actions__move">
                                    <p className="move__text">Move 0,5 BTC From ByBit to Binance</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <button type='button' className="table__button">Get trial</button>
            </div>
        </section>
    );
}

export default Examples;






