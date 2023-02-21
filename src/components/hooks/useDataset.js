import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useDataset = () => {
  const dataSet = useSelector(state => state.globalData?.dataSet);
  const [tickerData, setTickerData] = useState();
  useEffect(() => {
    if (dataSet && Array.isArray(dataSet)) {
      dataSet.sort(
        (a, b) =>
          a.market_cap &&
          b.market_cap &&
          parseFloat(a.market_cap) > parseFloat(b.market_cap)
      );
      const temp = dataSet?.filter((data) => {
        const base = data.base
        if (base === "BTC" || base === "ETH" || base === "LTC" || base === "ADA" || base === "USDC")
          return true
        else return false
      })
      setTickerData(temp)
    }
  }, [dataSet]);

  return tickerData;
};
