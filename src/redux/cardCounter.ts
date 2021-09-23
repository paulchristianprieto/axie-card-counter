import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Cards = {
  mouth: Card
  horn: Card
  back: Card
  tail: Card
}

export interface Card {
  energyCost: number
  used: number
}

export interface Axies {
  axie1: Cards
  axie2: Cards
  axie3: Cards
}

const initialState: Axies = {
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

export interface UseCardPayload {
  key: keyof Axies
  part: keyof Cards
}


export const counterSlice = createSlice({
  name: 'axieCards',
  initialState,
  reducers: {
    incrementUsedCard: (state, action: PayloadAction<UseCardPayload>) => {
      state[action.payload.key][action.payload.part].used += 1
    },
    decrementUsedCard: (state, action: PayloadAction<UseCardPayload>) => {
      state[action.payload.key][action.payload.part].used -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementUsedCard, decrementUsedCard, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer