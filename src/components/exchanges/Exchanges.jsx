
import './exchanges.css'
import binance from '../../img/exchanges/01.svg'
import bybit from '../../img/exchanges/02.svg'
import huobi from '../../img/exchanges/03.svg'
import kucoin from '../../img/exchanges/04.svg'

const Exchanges = () => {
    return ( 
        <section className="exchanges">

            <div className="exchanges__wrap container">
                <h1 className="exchanges__title">The bot works with popular exchanges:</h1>
                <ul className="exchanges__list">
                    <li className="exchanges__item">
                        <img src={ binance } alt="binance" className='exchanges__img' />
                    </li>
                    <li className="exchanges__item">
                        <img src={ bybit } alt="bybit" className='exchanges__img' />
                    </li>
                    <li className="exchanges__item">
                        <img src={ huobi } alt="huobi" className='exchanges__img' />
                    </li>
                    <li className="exchanges__item">
                        <img src={ kucoin } alt="kucoin" className='exchanges__img' />
                    </li>
                </ul>
            </div>

        </section>
     );
}
 
export default Exchanges;