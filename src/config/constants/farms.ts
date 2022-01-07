import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      137: '0x0AB3DeA50Da2dD253033c9488a2f0Ce7Af665c7d',
      80001: '0x0AB3DeA50Da2dD253033c9488a2f0Ce7Af665c7d',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BEAST-CAN LP',
    lpAddresses: {
      137: '0xe66b545186033f92ff5957de502fca71da9c6b11',
      80001: '0xe66b545186033f92ff5957de502fca71da9c6b11',
    },
    token: serializedTokens.BEAST,
    quoteToken: serializedTokens.CAN,
  },
  {
    pid: 2,
    lpSymbol: 'MKBHD-CAN LP',
    lpAddresses: {
      137: '0xd5f5c21edb7efa43e811f10ceb703167062a6a15',
      80001: '0xd5f5c21edb7efa43e811f10ceb703167062a6a15',
    },
    token: serializedTokens.MKBHD,
    quoteToken: serializedTokens.CAN,
  },
  {
    pid: 3,
    lpSymbol: 'SENT-CAN LP',
    lpAddresses: {
      137: '0x64652a1c8a5cbd7f920f02766743ffb9fe14a423',
      80001: '0x64652a1c8a5cbd7f920f02766743ffb9fe14a423',
    },
    token: serializedTokens.SENT,
    quoteToken: serializedTokens.CAN,
  },
  {
    pid: 4,
    lpSymbol: 'SMRA-CAN LP',
    lpAddresses: {
      137: '0x29bcaa1e174282b945bc3d9808c9f75d8d3b2678',
      80001: '0x29bcaa1e174282b945bc3d9808c9f75d8d3b2678',
    },
    token: serializedTokens.SMRA,
    quoteToken: serializedTokens.CAN,
  },
  {
    pid: 5,
    lpSymbol: 'TANBH-CAN LP',
    lpAddresses: {
      137: '0x250eec60da82e4a52b19319a3c245b8c097f4b6a',
      80001: '0x250eec60da82e4a52b19319a3c245b8c097f4b6a',
    },
    token: serializedTokens.TANBH,
    quoteToken: serializedTokens.CAN,
  },
  {
    pid: 6,
    lpSymbol: 'TVF-CAN LP',
    lpAddresses: {
      137: '0x57442c997d0bd7f072bd7c702ad9dfdf726cccb6',
      80001: '0x57442c997d0bd7f072bd7c702ad9dfdf726cccb6',
    },
    token: serializedTokens.TVF,
    quoteToken: serializedTokens.CAN,
  },
]

export default farms
