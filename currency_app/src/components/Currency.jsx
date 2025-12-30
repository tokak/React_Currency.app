import React, { useState } from "react";
import "../css/currency.css";
import {FaExchangeAlt, FaMoneyBillWave, FaGlobe, FaSyncAlt,} from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "https://app.freecurrencyapi.com/ sitesinden api keyinizi kopyalayınız";

function Currency() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  const exChange = async () => {
    const response =   await  axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result =  ((response.data.data[toCurrency])*amount).toFixed(2);
    setResult(result);
  };

  return (
    <>
      <div className="page">
        <div className="currency-container">
          <h2>
            <FaExchangeAlt /> Döviz Dönüştürücü
          </h2>

          <div className="row">
            <div className="input-group">
              <FaMoneyBillWave className="icon" />
              <input type="number" placeholder="Tutar" className="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div className="select-group">
              <FaGlobe className="icon" />
              <select className="currency" onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
              </select>
            </div>

            <span className="arrow">→</span>

            <div className="select-group">
              <FaGlobe className="icon" />
              <select className="currency" onChange={(e) => setToCurrency(e.target.value)}>
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="input-group">
              <FaMoneyBillWave className="icon" />
              <input style={{color: 'white'}} type="number" placeholder="Sonuç" className="result" value={result} onChange={(e)=> setresult(e.target.value)} disabled/>
            </div>
          </div>

          <button className="convert-btn" onClick={exChange}>
            <FaSyncAlt /> Dönüştür
          </button>
        </div>
      </div>
    </>
  );
}

export default Currency;
