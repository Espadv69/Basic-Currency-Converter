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
}

export default CurrencyConverter
