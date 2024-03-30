
import './analogos.css';
import shadow from '../../img/analogos/shadow.svg';
import educ from '../../img/analogos/01.svg';
import img2 from '../../img/analogos/02.svg';
import img3 from '../../img/analogos/03.svg';

const Analogos = () => {
    return (
        <section className="analogos">
            <div className="analogos__wrap container">

                <div className="analogos__headline">

                    <div className="headline__img">
                        <div className="headline-img__image">
                            <img src={educ} alt="educ-img" className="headline-img__image" />
                        </div>
                        <img src={shadow} alt="shadow-imgm" className="analogs__shadow" />
                    </div>
                    <h1 className="headline__title">no analogos <span>of market</span></h1>
                    <h2 className="headline__subtitle">Сryptocurrency arbitrage fully customizable manually</h2>
                </div>

                <div className="analogos__content">

                    <div className="analogos__card">
                        <div className="analogos-card__img"><img src={img2} alt="img2" /></div>

                        <div className="analogos-card__text">
                            <p className="analogos-card-text__title">Recommendations for pairing/budget allocation</p>
                            <p className="analogos-card-text__description">
                                We have a wide selection of information on which pairs are more and less likely to be profitable.
                                We will recommend you how to best allocate your funds to maximize profitability for your bank.
                            </p>
                        </div>
                    </div>

                    <div className="analogos__card">
                        <div className="analogos-card__img"><img src={img3} alt="img3" /></div>

                        <div className="analogos-card__text">
                            <p className="analogos-card-text__title">Recommendations for pairing/budget allocation</p>
                            <p className="analogos-card-text__description">
                                We have a wide selection of information on which pairs are more and less likely to be profitable.
                                We will recommend you how to best allocate your funds to maximize profitability for your bank.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Analogos;