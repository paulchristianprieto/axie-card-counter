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
  color?: string
}

export const CardComponent = ({ cardPart, axie, color }: CardComponentProps) => {
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
    dispatch(changeEnergyCost({
      key: axie,
      part: cardPart
    }))
  }

  const usedBackground = () => {
    if (details.used === 0) {
      return ''
    }
    if (details.used === 1) {
      return 'bg-yellow-500'
    }
    if (details.used === 2) {
      return 'bg-red-500'
    }
    if (details.used > 2) {
      return 'bg-pink-700'
    }
  }

  return (
    <div className="flex flex-1">
      <div className={`flex flex-1 justify-center items-center ${color}`}>
        <div className={`border border-black p-4 ${usedBackground()} rounded-xl`}>
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="mr-2">{part[cardPart]}</div>
            <div
              onClick={handleChangeEnergyCost}
              className="flex items-center justify-center rounded-full bg-yellow-500 p-2 cursor-pointer select-none"
              style={{ width: 30, height: 30 }}
            >
              {details.energyCost}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div
                onClick={handleUnuseCard}
                className="border border-gray-800 cursor-pointer p-1 select-none rounded-md" >
                {/* <img src={minus} width={20} /> */}
                <div className="flex justify-center items-center" style={{ width: 20, height: 20 }}>
                  {details.used}
                </div>
              </div>
              <div
                onClick={handleUseCard}
                className="border border-gray-800 cursor-pointer p-1 select-none rounded-md"
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
