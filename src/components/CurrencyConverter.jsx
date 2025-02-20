import { useState } from 'react'
import { exchangeRates } from '../data/exchangeRates'

import './CurrencyConverter.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount)
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency] || 1
      const convertedValue = amount * rate
      setConvertedAmount(convertedValue.toFixed(2))
    }
  }

  return (
    <div>
      <div className="currency">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="form__currency">
        <input
          type="number"
          className="input__currency"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="button__currency" onClick={convertCurrency}>
          Convert
        </button>
      </div>
      <h3>
        Converted Amount: {convertedAmount} {toCurrency}
      </h3>
    </div>
  )
}

export default CurrencyConverter
