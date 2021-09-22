// import { useState } from "react";
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
// import "./App.css";
// import { Card } from "./components/card";
// import { defaultCardState } from "./cardState";


export const Main = () => {
  // const [cardState, setCardState] = useState(defaultCardState);
  const axies = useSelector((state: RootState) => state.cardCounter)

  console.log(axies)

  return (
    <div>
      {/* <header className="container mx-auto ">
        {cardState.map((axie, axieIndex) => {
          return (
            <div>
              <div className="p-2 mt-2">{axie.axie} Axie</div>
              <div className="grid grid-cols-4 ">
                {axie.cards.map((card) => {
                  return <Card details={card}  />;
                })}
              </div>
            </div>
          );
        })}
      </header> */}
    </div>
  );
}

