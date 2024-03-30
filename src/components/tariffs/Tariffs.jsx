
import './tariffs.css'
import left from '../../img/tariffs/01.svg';
import right from '../../img/tariffs/02.svg';
import business from '../../img/tariffs/001.svg';
import shadow from '../../img/tariffs/shadow.svg';


const Tariffs = () => {
    return (
        <section className="tariffs">
            <div className="tariffs__wrap container">

                <div className="tariffs__headline">
                    <div className="tariffs-headline__left-img"><img src={left} alt="left-img" /></div>

                    <div className="tariffs-headline__main-block">
                        <div className="tariffs-headline__icon">
                            <div className="headline-icon__img">
                                <img src={business} alt="business-img" />
                            </div>
                            <img src={shadow} alt="shadow-img" className="tariffs-headline__shadow" />
                        </div>
                        <h1 className="tariffs-headline__title">Tariffs</h1>
                        <h2 className="tariffs-headline__subtitle">Сryptocurrency arbitrage fully customizable manually</h2>
                    </div>

                    <div className="tariffs-headline__right-img"><img src={right} alt="right-img" /></div>
                </div>

                <div className="tariffs__cards">
                    <div className="tariffs__item">
                        <h1 className="tariffs-item__title">weak</h1>
                        <p className="tariffs-item__amount">$470</p>
                        <button type="button" className='tariffs-item__button'>Get trial</button>
                    </div>
                    <div className="tariffs__item">
                        <h1 className="tariffs-item__title">Month</h1>
                        <p className="tariffs-item__amount">$750</p>
                        <button type="button" className='tariffs-item__button'>Get trial</button>
                    </div>
                    <div className="tariffs__item">
                        <h1 className="tariffs-item__title">year</h1>
                        <p className="tariffs-item__amount">$12.950</p>
                        <button type="button" className='tariffs-item__button'>Get trial</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Tariffs;