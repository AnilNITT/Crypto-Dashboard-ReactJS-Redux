import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCoinList } from '../redux/action/action';

const ExchangeCoins = () => {
    const dispatch = useDispatch();
    const exchangeData = useSelector((state) => state.exchange);
    // console.log('coin', exchangeData);
    const [text1, settext1] = useState("");
    const [text2, settext2] = useState(1);
    const [units, setUnits] = useState([]);
    const [value1, setvalue1] = useState(1);
    const [value2, setvalue2] = useState(1);
    const coin = exchangeData.coinList.rates;
  
    
    useEffect(() => {
      if (exchangeData.coinList.length === 0) {
          dispatch(fetchCoinList());
      }
  }, []);
  
    const convert = () => {
      const unit = Object.values(coin).find((unit)=>{
        return unit.value==value2
      })
      // console.log('unit',unit,'value2',value2)
      console.log("value",Object.values(coin))
      setUnits(unit.unit)
      let result = (value2 / value1) * text1;
      settext2(result);
    }
  
    return (
      <div className="px-4 py-4 font-body bg-white  backdrop-blur-md rounded-lg border border-gray-200 shadow-lg items-center">
      <h4 className="text-black text-lg font-semibold ml-5">Exchange Coins</h4>
      <div className="flex flex-row mt-8">
          <div className="pr-4 items-center">
              <div className="flex my-1 content-center items-center py-1 px-2 lg:ml-3">
                  <p className="text-red-500 font-semibold mr-3 text-lg">Sell</p>
                  <select
                      onChange={(e) => setvalue1(e.target.value)}
                      className="lg:pl-8 w-[130px] h-[3rem] font-semibold rounded-lg p-1 text-black bg-gray-300 bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 inline-flex cursor-pointer"
                  >
                      {coin && Object.values(coin).map((d, k) => (
                          <option key={k} value={d.value} className='text-black'>
                              {d.name}
                          </option>
                      ))}
                   
                  </select>
              </div>
                  <div className="flex my-2 content-center items-center py-1 px-2 lg:ml-3">
                  <p className="text-green-300 font-semibold mr-3 text-lg">Buy</p>
                  <select
                      onChange={(e) => setvalue2(e.target.value)}
                      className="lg:pl-8 w-[130px]  h-[3rem] font-semibold rounded-lg text-black bg-gray-300  bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 items-center cursor-pointer"
                  >
                      {coin && Object.values(coin).map((d, k) => (
                          <option key={k} value={d.value} className='text-black'>
                             {d.name}
                          </option>
                      ))}
                  </select>
              </div>
          </div>
          <div className="-mt-5 mr-3 lg:pl-10">
              <div>
                  <label className="text-md text-black">
                      Enter value
                  </label>
                  <div className='mr-[90px] lg:w-[90px] md:w-full sm:w-[90px] w-full py-2'>
                  <input
                      type="number"
                      className="appearance-none block w-full bg-gray-100 bg-opacity-20 backdrop-blur-md text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded border border-black px-3 py-1 text-md outline-none pt-2 pb-3"
                      placeholder=""
                      value={text1 || ""}
                      onChange={(e) => settext1(e.target.value)}
                  />
                  </div>
                  <p className="mt-4 text-green-500 text-md text-transform:capitalize">{parseFloat(text2).toFixed(2)} {units}</p>
              </div>
          </div>
      </div>
      <div className="text-center mt-4 pb-4">
          <button onClick={() => convert()} className="bg-blue-400 background-opacity-10 backdrop-blur-md rounded-md text-lg py-2 px-4 text-black hover:text-white font-semibold hover:bg-blue-600 border border-black">
              Exchange
          </button>
      </div>
  </div>
    )
}

export default ExchangeCoins