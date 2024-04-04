import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Covid = () => {

    const [country, setCountry] = useState([]);

    // const options = {
    //     method: 'GET',
    //     url: 'https://covid-19-statistics.p.rapidapi.com/regions',
    //     headers: {
    //       'X-RapidAPI-Key': '82af082083mshf57355bad330b86p10f0acjsn20fe2f2ffd7e',
    //       'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
    //     }
    //   };
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        // params: { country: userInput },
        headers: {
          "X-RapidAPI-Key": "70e311e7cemsh3bc616aa5a797bdp147e88jsn06780403abe7",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };

    async function getCountry(){
        try {
            const response = await axios.request(options);
            // console.log(response.data)
            setCountry(response.data)
        } catch (error) {
            console.log(error)
        }
    }

   
    useEffect(() => {
        getCountry()
    },[])


  return (
    <div>
        <select>
            {country.map((c) => (
                <option>{c}</option>
            ))}
        </select>
    </div>
  )
}

export default Covid
