import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { CardComponent } from '../components/Card'
import { Cards } from '../redux/cardCounter'
import {
  decrementEnemyEnergyDestroy,
  decrementEnemyEnergyGain,
  endTurn,
  incrementEnemyEnergyDestroy,
  incrementEnemyEnergyGain,
  // unuseCard,
  // useCard,
} from '../redux/energySlice'

export const Main = () => {
  const { axie1, axie2, axie3 } = useSelector((state: RootState) => state.energyCounter.axies)

  console.log(axie1)

  return (
    <div>
      <header className="container mx-auto ">
        <div>
          <div className="p-2 mt-2">Front Axie</div>
          <div className="grid grid-cols-4 ">
            {Object.keys(axie1).map((card: any) => {
              return <CardComponent cardPart={card} axie="axie1" />;
            })}
          </div>
        </div>
        <div>
          <div className="p-2 mt-2">Mid Axie</div>
          <div className="grid grid-cols-4 ">
            {Object.keys(axie2).map((card: any) => {
              return <CardComponent cardPart={card} axie="axie2" />;
            })}
          </div>
        </div>
        <div>
          <div className="p-2 mt-2">Back Axie</div>
          <div className="grid grid-cols-4 ">
            {Object.keys(axie3).map((card: any) => {
              return <CardComponent cardPart={card} axie="axie3" />;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

