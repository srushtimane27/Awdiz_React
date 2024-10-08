import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CurrencyConverter = () => {

    const [disable, setDisable] = useState(true)
    const [currencies, setCurrencies] = useState([])
    const [selectedCurrencies, setSelectedCurrencies] = useState({first: "", second: ""})
    // console.log(selectedCurrencies, "selectedCurrency")
    const [convertAmount, setConvertAmount] = useState(null)


    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
            'X-RapidAPI-Key': 'd4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };

    async function getCurrencies(){
        try {
            const response = await axios.request(options);
            // console.log(response.data)
            setCurrencies(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(event){
        // console.log(event.target.value, event.target.name)
        setSelectedCurrencies({...selectedCurrencies, [event.target.name]: event.target.value})
    }

    async function convert(){
        const options = {
            method: 'GET',
            url: 'https://currency-exchange.p.rapidapi.com/exchange',
            params: {
                from: selectedCurrencies.first,
                to: selectedCurrencies.second,
                q: '10'
            },
            headers: {
                'X-RapidAPI-Key': 'd4584fc53amshc3b26f4e59b237fp195eeajsnd3a4644cf75f',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setConvertAmount(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(selectedCurrencies.first && selectedCurrencies.second){
            setDisable(false)
        }

    },[selectedCurrencies])

    useEffect(() => {
        getCurrencies()

    },[])



  return (
    <div>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
        <label>Select First Currency</label>
        <select onChange={handleChange} name='first'>
            <option>Select First Currency</option>
            {currencies.map((c) =>(
                <option value={c}>{c}</option>
            ))}
        </select>
        </div>
        
        <div>
        <label>Select Second Currency</label>
        <select onChange={handleChange} name='second'>
            <option>Select Second Currency</option>
            {currencies.map((c) => (
                <option value={c}>{c}</option>
            ))}
        </select>
        </div>
    </div>
    <button disabled={disable} onClick={convert}>Convert</button>
    {convertAmount && <div> 1 {selectedCurrencies.first} = {convertAmount} {selectedCurrencies.second} </div> }
    </div>
  )
}

export default CurrencyConverter