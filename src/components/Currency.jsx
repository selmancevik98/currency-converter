import React, { useState } from 'react'
import './css/Currency.css'
import axios from 'axios'


let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
let API_KEY = 'fca_live_DqaiPB4ww1b273X46Dg7Baw1vOwUEdBuRSFzsR4M';



function Currency() {

    const [amount, setAmount] = useState(0)
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('EUR')
    const [result, setResult] = useState(0)

    const converte_func = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result)

    }


    return (
        <div className='currency-div'>
            <div className='currency-from-div'>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}

                    type="number" className='amount' />

                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>CHF</option>
                    <option>JPY</option>
                </select>

            </div>

            <div className='currency-to-div'>

                <input
                    value={result}
                    onChange={(e) => setValue(e.target.value)}
                    type="number" className='result' />

                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className='to-currency-option'>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                    <option>CHF</option>
                    <option>JPY</option>
                </select>
            </div>


            <button
                onClick={converte_func}
                className='convert-btn'>CONVERT</button>

        </div>
    )
}

export default Currency