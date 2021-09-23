import { useState, useEffect } from 'react'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { CardComponent } from '../components/Card'
import { Cards } from '../redux/cardCounter'
import plus from "../icons/plus.png";
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

  const [destroy, setDestroy] = useState<number>(0)
  const [gain, setGain] = useState<number>(0)

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

        <div className="flex flex-row items-center">
          <div className="mr-2">Energy Gain</div>
          <div
            onClick={() => {
              if (gain > 0) {
                setGain(gain - 1)
                dispatch(decrementEnemyEnergyGain())
              }
            }}
            className="border border-gray-800 cursor-pointer p-1 select-none mr-2" >
            {/* <img src={minus} width={20} /> */}
            <div className="flex justify-center items-center select-none" style={{ width: 20, height: 20 }}>
              {gain}
            </div>
          </div>
          <div
            onClick={() => {
              if (energy < 10) {
                dispatch(incrementEnemyEnergyGain())
                setGain(gain + 1)
              }
            }}
            className="border border-gray-800 cursor-pointer p-1 select-none"
          >
            <img src={plus} width={20} />
          </div>
        </div>
        <div className="flex flex-row items-center mt-2">
          <div className="mr-2">Energy Destroy</div>
          <div
            onClick={() => {
              if (destroy > 0) {
                dispatch(decrementEnemyEnergyDestroy())
                setDestroy(destroy - 1)
              }
            }}
            className="border border-gray-800 cursor-pointer p-1 select-none mr-2" >
            {/* <img src={minus} width={20} /> */}
            <div className="flex justify-center items-center" style={{ width: 20, height: 20 }}>
              {destroy}
            </div>
          </div>
          <div
            onClick={() => {
              if (energy > 0) {
                dispatch(incrementEnemyEnergyDestroy())
                setDestroy(destroy + 1)
              }
            }}
            className="border border-gray-800 cursor-pointer p-1 select-none"
          >
            <img src={plus} width={20} />
          </div>
        </div>

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

