import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Covid = () => {

    const [country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({name: ""});
    console.log(selectedCountry, "selectedCountry")
    const [covidData, setCovidData] = useState({});

    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/countries',
      headers: {
        'X-RapidAPI-Key': '82af082083mshf57355bad330b86p10f0acjsn20fe2f2ffd7e',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };

    async function getCountry(){
        try {
            const response = await axios.request(options);
            console.log(response.data.response);
            setCountry(response.data.response);
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(event){
      // console.log(event.target.value, event.target.name)
      setSelectedCountry({...selectedCountry, [event.target.name] : event.target.value})
    }

   

    async function statistics(){
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params:{
          country: selectedCountry.name
        },
        headers: {
          'X-RapidAPI-Key': '82af082083mshf57355bad330b86p10f0acjsn20fe2f2ffd7e',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setCovidData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
        getCountry();
    },[]);


  return (
    <div>
      <label>Select Country : </label>
        <select onChange={handleChange} name='name'>
          {country.map((coun, index)=>(
            <option value={coun} key={index}>{coun}</option>
          ))}
        </select><br/>

        <button onClick={statistics}>Click</button>
        <div>{covidData.cases}</div>
        {covidData && <div> {selectedCountry.name} = {JSON.stringify(covidData.response.continent)}</div>}

    </div>
  )
}

export default Covid;