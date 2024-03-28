
import './footer.css'
import social1 from '../../img/footer/01.svg';
import social2 from '../../img/footer/02.svg';
import social3 from '../../img/footer/03.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__wrap">

                    <div className="footer__top">
                        
                        <div className="top-footer__ready">
                            <h1 className="ready__text">Ready to get started?</h1>
                            <button type="button" className="ready__button">Get trial</button>
                        </div>

                        <div className="top-footer__menu-wrap">

                            <div className="top-footer__product">
                                <h2 className="product__title">Product</h2>
                                <ul className="product__menu">
                                    <li className="product__item">
                                        <a href="" className="product__link">Our features</a>
                                    </li>
                                    <li className="product__item">
                                        <a href="" className="product__link">How it start?</a>
                                    </li>
                                    <li className="product__item">
                                        <a href="" className="product__link">Branding</a>
                                    </li>
                                    <li className="product__item">
                                        <a href="" className="product__link">Offline</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="top-footer__company">
                                <h2 className="company__title">Company</h2>
                                <ul className="company__menu">
                                    <li className="company__item">
                                        <a href="" className="company__link">About</a>
                                    </li>
                                    <li className="company__item">
                                        <a href="" className="company__link">Careers</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="top-footer__contact">
                                <h2 className="contact__title">Contact</h2>
                                <ul className="contact__menu">
                                    <li className="contact__item">
                                        <a href="" className="contact__link">Discord</a>
                                    </li>
                                    <li className="contact__item">
                                        <a href="" className="contact__link">Twitter</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="footer__bottom">
                        <div className="bottom-footer__conditions">
                            <a href="" className="conditions__link">Terms & Conditions</a>
                            <a href="" className="conditions__link">Privacy Policy</a>
                        </div>

                        <div className="bottom-footer__social">
                            <ul className="social__list">
                                <li className="social__item">
                                    <a href="" className="social__link"><img src={social1} alt="" /></a>
                                </li>
                                <li className="social__item">
                                    <a href="" className="social__link"><img src={social2} alt="" /></a>
                                </li>
                                <li className="social__item">
                                    <a href="" className="social__link"><img src={social3} alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;