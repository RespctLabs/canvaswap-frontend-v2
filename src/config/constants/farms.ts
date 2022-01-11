import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     137: '0x0AB3DeA50Da2dD253033c9488a2f0Ce7Af665c7d',
  //     80001: '0x0AB3DeA50Da2dD253033c9488a2f0Ce7Af665c7d',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },

  {
    pid: 8,
    lpSymbol: 'INR-BEAST LP',
    lpAddresses: {
      137: '0xfbb00b5eeb791c5dcc7c09555f873ec24bf2210f',
      80001: '0xfbb00b5eeb791c5dcc7c09555f873ec24bf2210f',
    },
    token: serializedTokens.BEAST,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 9,
    lpSymbol: 'INR-MKBHD LP',
    lpAddresses: {
      137: '0xa5234c5ca5d07626a1c0929f0c84b708c80052f0',
      80001: '0xa5234c5ca5d07626a1c0929f0c84b708c80052f0',
    },
    token: serializedTokens.MKBHD,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 10,
    lpSymbol: 'INR-JOSH LP',
    lpAddresses: {
      137: '0xaf55a959599b4c83b265aee03ed6c6227a7d2fe4',
      80001: '0xaf55a959599b4c83b265aee03ed6c6227a7d2fe4',
    },
    token: serializedTokens.JOSH,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 11,
    lpSymbol: 'INR-SENT LP',
    lpAddresses: {
      137: '0xbb7d27923a806043c4bc8499181583fa8c136df3',
      80001: '0xbb7d27923a806043c4bc8499181583fa8c136df3',
    },
    token: serializedTokens.SENT,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 12,
    lpSymbol: 'INR-TVF LP',
    lpAddresses: {
      137: '0x4b35cdd9e64ffda6af4e822414e29f2c56f304f2',
      80001: '0x4b35cdd9e64ffda6af4e822414e29f2c56f304f2',
    },
    token: serializedTokens.TVF,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 13,
    lpSymbol: 'INR-SMRA LP',
    lpAddresses: {
      137: '0xdc0cda6995e0edb2ff294e4736c6648ef002845f',
      80001: '0xdc0cda6995e0edb2ff294e4736c6648ef002845f',
    },
    token: serializedTokens.SMRA,
    quoteToken: serializedTokens.INR,
  },
  {
    pid: 14,
    lpSymbol: 'INR-TANBH LP',
    lpAddresses: {
      137: '0xc917aac33c7144f3164673e051575ee21dea8f8b',
      80001: '0xc917aac33c7144f3164673e051575ee21dea8f8b',
    },
    token: serializedTokens.TANBH,
    quoteToken: serializedTokens.INR,
  },
]

export default farms
