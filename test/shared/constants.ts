import { BigNumber } from 'ethers'

export const MaxUint128 = BigNumber.from(2).pow(128).sub(1)

export const ZERO_EX = '0x1000000000000000000000000000000000000000' // dummy address

export enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
}

export const MSG_SENDER = '0x0000000000000000000000000000000000000000'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000001'
