import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./redux/action/action";
import CryptoChart from "./components/CryptoChart"
import ExchangeCoins from "./components/ExchangeCoins"
import SideBar from "./components/SideBar";
import Portfolio from "./components/Portfolio";
import {SearchBar} from "./components/SearchBar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BallTriangle } from "react-loader-spinner";


const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default);
  // const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  useEffect(() => {

    setTimeout(() => {

      if (data.coinList.length === 0) 
      {
        dispatch(fetchCoins());

        // setLoading(true);
        setCompleted(true);

        // setTimeout(() => {
        // }, 1000);
      }
    }, 2500);
  }, [data.coinList.length, dispatch]);

  return (
    <>
        {!completed ? (
    <div className="flex justify-center items-center lg:m-56 md:m-56 sm:m-56 ">
            <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
          </div>
        ) : (
            <>
            <div className="bg-white flex md:h-14">
            <Navbar />
            </div>
              <div className="bg-slate-200 py-4 px-4   backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-2">
                  <div className="md:col-span-3 lg:grid-cols-3 sm:grid-cols-3 container-fluid">
                    <SearchBar />
                    <CryptoChart />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Portfolio />
                      <ExchangeCoins />
                    </div>
                  </div>
                  <SideBar />
                </div>
              </div>
            </>
          )}
    
    </>
  );
}

export default App;