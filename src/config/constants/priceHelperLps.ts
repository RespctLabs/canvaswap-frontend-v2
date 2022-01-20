import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get
   * contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'QSD-MATIC LP',
    lpAddresses: {
      137: '',
      80001: '0xfbb00b5eeb791c5dcc7c09555f873ec24bf2210f',
    },
    token: tokens.qsd,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
