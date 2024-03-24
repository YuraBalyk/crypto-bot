
import './start.css';
import interFace from '../../img/start/001.png';
import api from '../../img/start/01.png';
import setting from '../../img/start/02.png';
import equalize from '../../img/start/03.png';
import background from '../../img/start/004.png';



const Start = () => {


  return (

    <section className="start">
      <div className="start__wrap container">


        <div className="head-line__wrap">
          <div className="start__title-wrap">
            <div className="title-wrap__img">
              <img src={interFace} alt="interFace" />
            </div>
            <h1 className="title-wrap__title">How it start bot?</h1>
            <h2 className="title-wrap__subtitle">Сryptocurrency arbitrage fully customizable manually</h2>
          </div>
          <div className="head-line__img"><img src={background} alt="background-img" /></div>
        </div>


        <div className="start__cards">

          <div className="card__create start-card">
            <div className="img__line">
              <img className='card__img' src={api} alt="api-img" />
              <p className="card__num">01</p>
            </div>


            <h1 className="card__title">Create API keys</h1>
            <h2 className="card__subtitle">Create API keys and Connect your exchanges' APIs to ours</h2>
            
          </div>

          <div className="card__setting start-card">
            <div className="img__line">
              <img className='card__img' src={setting} alt="setting-img" />
              <p className="card__num">02</p>
            </div>
            <h1 className="card__title">Setting our service</h1>
            <h2 className="card__subtitle">Set up the exchanges, set up the pairs, set up all the settings that are there</h2>
          </div>

          <div className="card__equalize start-card">
            <div className="img__line">
              <img className='card__img' src={equalize} alt="equalize-img" />
              <p className="card__num">03</p>
            </div>
            <h1 className="card__title">Equalize  balances</h1>
            <h2 className="card__subtitle">Equalize the balances of all exchanges, and start the bot working</h2>
          </div>

        </div>

      </div>
    </section>

  );
}

export default Start;



