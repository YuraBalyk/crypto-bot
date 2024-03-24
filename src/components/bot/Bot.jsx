
import './bot.css'
import interFace from '../../img/security/001.png';
import botLogo from '../../img/security/01.svg';
import bybit from '../../img/security/02.svg';
import huobi from '../../img/security/03.svg';
import kucoin from '../../img/security/04.svg';
import binance from '../../img/security/05.svg';
import lock from '../../img/security/lock.svg';
import time from '../../img/security/time.svg';
import ball from '../../img/security/ball.png';
import shadow from '../../img/security/shadow.png';

const Bot = () => {
    return (
        <section className="bot">
            <div className="bot__wrap container">


                <div className="bot__title-wrap">
                    <div className="bot__icon"><img src={interFace} alt="" /></div>
                    <h1 className="bot__title">Automated bot for <span>inter-exchange</span></h1>
                    <h2 className="bot__subtitle">Сryptocurrency arbitrage fully customizable manually</h2>
                </div>

                <div className="bot__fast-security-wrap">

                    <div className="bot__fast">
                        <div className="fast__text-wrap">
                            <div className="fast__icon"><img src={time} alt="icon" /></div>
                            <h1 className="fast__title">Fast working speed</h1>
                            <p className="fast__text">
                                The reaction time to a bet is  0.01 ms, so we have a large number of available profitable bets every 24 hours.
                                Without our service, it is even theoretically impossible to get such a number.
                                Since some of them (connections) appear literally for 1 second. We manage to work them out.
                            </p>
                        </div>

                        <div className="fast__background">
                            <img src={ball} alt="ball" className='background__fast-img' />
                            <img src={shadow} alt="shadow" className='background__fast-shadow' />
                        </div>
                    </div>

                    <div className="bot__security">

                        <div className="security__text-wrap">
                            <div className="security__icon"><img src={lock} alt="icon" /></div>
                            <h1 className="security__title">Security</h1>
                            <p className="security__text">All money is kept on your exchange accounts. </p>
                        </div>


                        <div className="security__icons-block">
                            <ul className="icons-block__list">
                                <li><a href="" className="icons-block__item item1"><img src={binance} alt="icon" /></a></li>
                                <li><a href="" className="icons-block__item item2"><img src={bybit} alt="icon" /></a></li>
                                <li><a href="" className="icons-block__item item3"><img src={huobi} alt="icon" /></a></li>
                                <li><a href="" className="icons-block__item item4"><img src={kucoin} alt="icon" /></a></li>
                                <li><a href="" className="icons-block__item item5"><img src={botLogo} alt="icon" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>


        </section>
    );
}

export default Bot;