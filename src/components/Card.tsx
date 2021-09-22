import { back } from "../icons/back";
import { horn } from "../icons/horn";
import { mouth } from "../icons/mouth";
import { tail } from "../icons/tail";
import minus from "../icons/minus.png";
import plus from "../icons/plus.png";
import { Card } from '../redux/cardCounter'

interface PartI {
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
  cardDetails: Card
}

export const CardComponent = ({ cardDetails }: CardComponentProps) => {


  return (
    <div className="flex flex-1">
      <div className={`flex flex-1 justify-center items-center`}>
        <div className={`border border-black p-4`}>
          <div className="flex flex-row justify-between items-center">
            {/* @ts-ignore */}
            <div className="mr-2">{part[cardDetails.part]}</div>
            <div
              // onClick={() => handleEnergyClick(details.energy)}
              className="flex items-center justify-center rounded-full bg-yellow-500 p-2"
              style={{ width: 24, height: 24 }}
            >
              {cardDetails.energyCost}
            </div>
          </div>
          <div className="flex flex-col">
            <p>Used: {cardDetails.used}</p>
            <div className="flex flex-row justify-between">
              <div className="border border-gray-800 cursor-pointer p-1">
                <img src={minus} width={20} />
              </div>
              <div className="border border-gray-800 cursor-pointer p-1">
                <img src={plus} width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
