import { useState, useEffect } from 'react';
import axios from 'axios';

const usePrice = () => {
  const [price, setPrice] = useState(null);

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  const todayFormatted = getFormattedDate();
  const APIUrl = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=N8C4IMCIJLLWQ021';
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get(APIUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        const price = response.data['Time Series (Digital Currency Daily)']?.[todayFormatted]?.['4a. close (USD)'];
        setPrice(price);
      })
      .catch((error) => {
        const errorMessage = 'Loading...';
        const updatedError = { ...error, message: errorMessage };
        throw updatedError;
      });
  }, [apiKey, todayFormatted]);
  return { price };
};

export default usePrice;
