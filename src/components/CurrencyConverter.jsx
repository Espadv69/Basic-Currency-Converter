import { useState } from 'react'
import { exchangeRates } from '../data/exchangeRates'

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
      setConvertedAmount(amount * rate)
    }
  }

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
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

      <button onClick={convertCurrency}>Convert</button>
      <h3>
        Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
      </h3>
    </div>
  )
}

export default CurrencyConverter
