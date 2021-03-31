import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x2ac205e012fd7a843e348ce839951dcd54713b9d',
      56: '0x2ac205e012fd7a843e348ce839951dcd54713b9d',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'CACAO-BNB LP',
    lpAddresses: {
      97: '0x2ac205e012fd7a843e348ce839951dcd54713b9d',
      56: '0x2ac205e012fd7a843e348ce839951dcd54713b9d',
    },
    token: tokens.cacao,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }
]

export default farms
