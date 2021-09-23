import { back } from "../icons/back";
import { horn } from "../icons/horn";
import { mouth } from "../icons/mouth";
import { tail } from "../icons/tail";
import minus from "../icons/minus.png";
import plus from "../icons/plus.png";
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Axies } from '../redux/cardCounter'
import {
  decrementEnemyEnergyDestroy,
  decrementEnemyEnergyGain,
  endTurn,
  incrementEnemyEnergyDestroy,
  incrementEnemyEnergyGain,
  enemyUnuseCard,
  enemyUseCard,
  changeEnergyCost
} from '../redux/energySlice'

type PartI = {
  back: any
  horn: any
  mouth: any
  tail: any
}

const part: PartI = {
  back: back,
  horn: horn,
  mouth: mouth,
  tail: tail,
};

interface CardComponentProps {
  cardPart: keyof PartI
  axie: keyof Axies
}

export const CardComponent = ({ cardPart, axie }: CardComponentProps) => {
  const { [cardPart]: details } = useSelector((state: RootState) => state.energyCounter.axies[axie])

  const dispatch = useDispatch()
  // console.log(details)

  const handleUseCard = () => {
    dispatch(enemyUseCard({
      key: axie,
      part: cardPart
    }))
  }

  const handleUnuseCard = () => {
    dispatch(enemyUnuseCard({
      key: axie,
      part: cardPart
    }))
  }

  const handleChangeEnergyCost = () => {
    console.log("Asd")
    dispatch(changeEnergyCost({
      key: axie,
      part: cardPart
    }))
  }

  return (
    <div className="flex flex-1">
      <div className={`flex flex-1 justify-center items-center`}>
        <div className={`border border-black p-4`}>
          <div className="flex flex-row justify-between items-center">
            <div className="mr-2">{part[cardPart]}</div>
            <div
              onClick={handleChangeEnergyCost}
              className="flex items-center justify-center rounded-full bg-yellow-500 p-2 cursor-pointer select-none"
              style={{ width: 24, height: 24 }}
            >
              {details.energyCost}
            </div>
          </div>
          <div className="flex flex-col">
            <p>Used: </p>
            <div className="flex flex-row justify-between">
              <div
                onClick={handleUnuseCard}
                className="border border-gray-800 cursor-pointer p-1" >
                {/* <img src={minus} width={20} /> */}
                <div className="flex justify-center items-center" style={{ width: 20, height: 20 }}>
                  {details.used}
                </div>
              </div>
              <div
                onClick={handleUseCard}
                className="border border-gray-800 cursor-pointer p-1"
              >
                <img src={plus} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
