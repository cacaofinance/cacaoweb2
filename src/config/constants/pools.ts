import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cacao,
    earningToken: tokens.cacao,
    contractAddress: {
      97: '0x5b0dd0476aB10780aeEe7903FCdD4980086b0954',
      56: '0x7f96C519ffC373fb847E145f26DcA292e14DBb70',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
