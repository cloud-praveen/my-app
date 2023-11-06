import { useState, useEffect } from "react";

import axios from "axios";
const useFetch = ({ endpoint, query }) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: 'https://jsearch.p.rapidapi.com/job-details',
    headers: {
      "X-RapidAPI-Key":'82dafac91amsh0de9636e018f6e2p134519jsndcd4edf2a224',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      job_id: '2BcT7Q38BtZi8MZFAAAAAA=='
    },
  };

  const fetchData = async () => {
    setIsloading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data)
      setIsloading(false);
      
    } catch (error) {

      console.log(error)
      setError(error);
      alert('there is an error')
      
    } finally {
      setIsloading(false);
    }
  };


  useEffect(() => {
    fetchData();
  },[]);


  const refetch = () => {
    setIsloading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};



export default useFetch;






