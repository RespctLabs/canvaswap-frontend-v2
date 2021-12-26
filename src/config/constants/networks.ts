import { ChainId } from '@respctclub/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.BSCTESTNET]: 'https://rpc-mumbai.maticvigil.com',
}

export default NETWORK_URLS
