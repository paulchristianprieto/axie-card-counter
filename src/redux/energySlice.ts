import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IEnergy = {
  energy: 3,
  round: 1,
  axies: {
    axie1: {
      mouth: {
        energyCost: 1,
        used: 0,
      },
      horn: {
        energyCost: 1,
        used: 0,
      },
      back: {
        energyCost: 1,
        used: 0,
      },
      tail: {
        energyCost: 1,
        used: 0,
      },
    },
    axie2: {
      mouth: {
        energyCost: 1,
        used: 0,
      },
      horn: {

        energyCost: 1,
        used: 0,
      },
      back: {
        energyCost: 1,
        used: 0,
      },
      tail: {
        energyCost: 1,
        used: 0,
      },
    },
    axie3: {
      mouth: {
        energyCost: 1,
        used: 0,
      },
      horn: {

        energyCost: 1,
        used: 0,
      },
      back: {
        energyCost: 1,
        used: 0,
      },
      tail: {
        energyCost: 1,
        used: 0,
      },
    },
  }
}

export interface IEnergy {
  energy: number
  round: number
  axies: IAxies
}

export interface IAxies {
  axie1: ICards
  axie2: ICards
  axie3: ICards
}

export type ICards = {
  mouth: ICard
  horn: ICard
  back: ICard
  tail: ICard
}

export interface ICard {
  energyCost: number
  used: number
}


export interface UseCardPayload {
  key: keyof IAxies
  part: keyof ICards
}

export interface ChangeEnergyCostPayload {
  key: keyof IAxies
  part: keyof ICards
}

export const energySlice = createSlice({
  name: 'energy',
  initialState,
  reducers: {
    enemyUseCard: (state, action: PayloadAction<UseCardPayload>) => {
      if (state.energy - state.axies[action.payload.key][action.payload.part].energyCost >= 0) {
        console.log("redux")
        state.axies[action.payload.key][action.payload.part].used += 1;
        state.energy -= state.axies[action.payload.key][action.payload.part].energyCost;
      }
    },
    enemyUnuseCard: (state, action: PayloadAction<UseCardPayload>) => {
      if (state.axies[action.payload.key][action.payload.part].used > 0) {
        state.axies[action.payload.key][action.payload.part].used -= 1
        state.energy += state.axies[action.payload.key][action.payload.part].energyCost;
      }
    },
    endTurn: (state) => {
      state.energy += 2;
      state.round += 1;
    },
    changeEnergyCost: (state, action: PayloadAction<ChangeEnergyCostPayload>) => {
      if (state.axies[action.payload.key][action.payload.part].energyCost < 2) {
        state.axies[action.payload.key][action.payload.part].energyCost += 1
      }
      else {
        state.axies[action.payload.key][action.payload.part].energyCost = 0
      }
    },
    incrementEnemyEnergyGain: (state) => {
      if (state.energy <= 10)
        state.energy += 1
    },
    decrementEnemyEnergyGain: (state, action: PayloadAction<number>) => {
      if (state.energy > 0)
        state.energy -= 1
    },
    incrementEnemyEnergyDestroy: (state, action: PayloadAction<number>) => {
      if (state.energy > 0)
        state.energy -= 1
    },
    decrementEnemyEnergyDestroy: (state, action: PayloadAction<number>) => {
      if (state.energy <= 10)
        state.energy += 1
    },
    reset: (state) => {
      state = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  enemyUseCard,
  enemyUnuseCard,
  endTurn,
  changeEnergyCost,
  incrementEnemyEnergyGain,
  decrementEnemyEnergyGain,
  incrementEnemyEnergyDestroy,
  decrementEnemyEnergyDestroy
} = energySlice.actions

export default energySlice.reducer