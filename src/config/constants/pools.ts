import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      137: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      80001: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 245,
  //   stakingToken: serializedTokens.SENT,
  //   earningToken: serializedTokens.CAN,
  //   contractAddress: {
  //     137: '0x64652a1c8a5cbd7f920f02766743ffb9fe14a423',
  //     80001: '0x64652a1c8a5cbd7f920f02766743ffb9fe14a423',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.1262',
  // },
]
// SENT-CAN -- 0x64652a1c8a5cbd7f920f02766743ffb9fe14a423
// TVF-CAN -- 0x57442c997d0bd7f072bd7c702ad9dfdf726cccb6
// TANBH-CAN -- 0x250eec60da82e4a52b19319a3c245b8c097f4b6a
// BEAST-CAN -- 0xe66b545186033f92ff5957de502fca71da9c6b11
// MKBHD-CAN -- 0xd5f5c21edb7efa43e811f10ceb703167062a6a15
// SMRA-CAN -- 0x29bcaa1e174282b945bc3d9808c9f75d8d3b2678

export default pools
