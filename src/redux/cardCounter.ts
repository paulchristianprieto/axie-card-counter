import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Card {
  part: string,
  energyCost: number,
  used: number,
}

export interface Axies {
  axie1: Card[]
  axie2: Card[]
  axie3: Card[]
}

const initialState: Axies = {
  axie1: [
    {
      part: "mouth",
      energyCost: 1,
      used: 0,
    },
    {
      part: "horn",
      energyCost: 1,
      used: 0,
    },
    {
      part: "back",
      energyCost: 1,
      used: 0,
    },
    {
      part: "tail",
      energyCost: 1,
      used: 0,
    },
  ],
  axie2: [
    {
      part: "mouth",
      energyCost: 1,
      used: 0,
    },
    {
      part: "horn",
      energyCost: 1,
      used: 0,
    },
    {
      part: "back",
      energyCost: 1,
      used: 0,
    },
    {
      part: "tail",
      energyCost: 1,
      used: 0,
    },
  ],
  axie3: [
    {
      part: "mouth",
      energyCost: 1,
      used: 0,
    },
    {
      part: "horn",
      energyCost: 1,
      used: 0,
    },
    {
      part: "back",
      energyCost: 1,
      used: 0,
    },
    {
      part: "tail",
      energyCost: 1,
      used: 0,
    },
  ]
}

export const counterSlice = createSlice({
  name: 'axieCards',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer