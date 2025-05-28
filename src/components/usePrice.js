import { useState, useEffect } from "react";
import axios from "axios";

const usePrice = () => {
  const [price, setPrice] = useState(null);
  const [eth, setEth] = useState(null);

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  const todayFormatted = getFormattedDate();
  const APIUrl =
    "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=N8C4IMCIJLLWQ021";
  const APIUrl1 =
    "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=N8C4IMCIJLLWQ021";
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    Promise.all([
      axios.get(APIUrl, { headers: { Authorization: `Bearer ${apiKey}` } }),
      axios.get(APIUrl1, { headers: { Authorization: `Bearer ${apiKey}` } }),
    ])
      .then(([response, response1]) => {
        const price =
          response.data["Time Series (Digital Currency Daily)"]?.[
            todayFormatted
          ]?.["4a. close (USD)"];
        const eth =
          response1.data["Time Series (Digital Currency Daily)"]?.[
            todayFormatted
          ]?.["4a. close (USD)"];
        setPrice(price);
        setEth(eth);
      })
      .catch((error) => {
        const errorMessage = "Loading...";
        const updatedError = { ...error, message: errorMessage };
        throw updatedError;
      });
  }, [apiKey, todayFormatted]);
  return { price, eth };
};

export default usePrice;
