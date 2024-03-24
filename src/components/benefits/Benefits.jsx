import './benefits.css'

import diamond from '../../img/benefits/01.svg';
import cpu from '../../img/benefits/02.svg';
import filter from '../../img/benefits/03.svg';





const Benefits = () => {
    return (
        <section className="benefits">
            <div className="benefits__wrap container">
                <h1 className="benefits__title">And other benefits</h1>

                <div className="benefits__items-wrap">

                    <div className="benefits__item">
                        <div className="item__title">
                            <img className="title__icon" src={ diamond } alt="" />
                            <h1 className="title__text">Garant profit</h1>
                        </div>
                        <h3 className="item__subtitle">Collaborate with team members using our powerful devtool integrations.</h3>
                    </div>
                    <div className="benefits__item">
                        <div className="item__title">
                            <img className="title__icon" src={ cpu } alt="" />
                            <h1 className="title__text">Automatic work</h1>
                        </div>
                        <h3 className="item__subtitle">Collaborate with team members using our powerful devtool integrations.</h3>
                    </div>
                    <div className="benefits__item">
                        <div className="item__title">
                            <img className="title__icon" src={ filter } alt="" />
                            <h1 className="title__text">Recomendation for work</h1>
                        </div>
                        <h3 className="item__subtitle">Collaborate with team members using our powerful devtool integrations.</h3>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Benefits;