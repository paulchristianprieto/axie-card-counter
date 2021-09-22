// import { useState } from "react";
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { CardComponent } from '../components/Card'
// import "./App.css";
// import { Card } from "./components/card";
// import { defaultCardState } from "./cardState";


export const Main = () => {
  // const [cardState, setCardState] = useState(defaultCardState);
  const axie1 = useSelector((state: RootState) => state.cardCounter.axie1)
  const axie2 = useSelector((state: RootState) => state.cardCounter.axie2)
  const axie3 = useSelector((state: RootState) => state.cardCounter.axie3)

  return (
    <div>
      <header className="container mx-auto ">
        <div>
          <div className="p-2 mt-2">Front Axie</div>
          <div className="grid grid-cols-4 ">
            {axie1.map((card) => {
              return <CardComponent cardDetails={card} />;
            })}
          </div>
        </div>
        <div>
          <div className="p-2 mt-2">Mid Axie</div>
          <div className="grid grid-cols-4 ">
            {axie1.map((card) => {
              return <CardComponent cardDetails={card} />;
            })}
          </div>
        </div>
        <div>
          <div className="p-2 mt-2">Back Axie</div>
          <div className="grid grid-cols-4 ">
            {axie1.map((card) => {
              return <CardComponent cardDetails={card} />;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

