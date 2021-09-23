import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { CardComponent } from '../components/Card'
import { Cards } from '../redux/cardCounter'
import {
  decrementEnemyEnergyDestroy,
  decrementEnemyEnergyGain,
  endTurn,
  reset,
  incrementEnemyEnergyDestroy,
  incrementEnemyEnergyGain,
  // unuseCard,
  // useCard,
} from '../redux/energySlice'

export const Main = () => {
  const { energy, round, axies: { axie1, axie2, axie3 } } = useSelector((state: RootState) => state.energyCounter)
  const dispatch = useDispatch()

  const handleEndTurn = () => {
    dispatch(endTurn())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div>
      <div className="container mx-auto ">
        <div>Energy: {energy}</div>
        <div>Round: {round}</div>
        <div className="my-4">
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
        </div>

        <div onClick={handleEndTurn} className="flex justify-center items-center border border-black mb-2 cursor-pointer">End Turn</div>
        <div onClick={handleReset} className="flex justify-center items-center border border-black cursor-pointer">Reset</div>
      </div>
    </div>
  );
}

