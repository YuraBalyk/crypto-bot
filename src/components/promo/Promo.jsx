
import './promo.css'
import bgImg1 from '../../img/main/bg1.png';
import bgImg2 from '../../img/main/robot.png';
import shadow1 from '../../img/main/shadow1.png';
import shadow2 from '../../img/main/shadow2.png';


function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrap container">

                <div className="promo__info-block">
                    <div className="promo__info">
                        <h1 className="promo__title">crypto arbitrage bot</h1>
                        <h2 className="promo__subtitle">Connect the API to your exchanges and <br /> the bot will do the rest for you</h2>
                        <button type="button" className='promo__button'>Get trial</button>
                    </div>

                    <div className="promo__indexes">
                        <div className="indexes__trade">
                            <p className="trade__nums">360M</p>
                            <h2 className="trade__text">Volume trade</h2>
                        </div>
                        <div className="indexes__ligaments">
                            <p className="ligaments__nums">192К+</p>
                            <h2 className="ligaments__text">Found ligaments</h2>
                        </div>
                    </div>
                </div>



                <div className="promo__background-wrap">
                    <div className="promo__background">
                        {/* <img src={bgImg1} alt="img1" className="promo__bg-image"/> */}
                        {/* <img src={shadow1} alt="" className="promo__bg-shadow"/> */}
                        <img src={bgImg2} alt="img2" className="promo__bg-robot"/>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Promo;