import { ChainId, Token } from '@respctclub/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, BSCTESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://app.respct.club/',
  ),
  tlos: new Token(MAINNET, '0xb6C53431608E626AC81a9776ac3e999c5556717c', 18, 'TLOS', 'Telos', 'https://www.telos.net/'),
  busd: new Token(
    MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    MAINNET,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://app.respct.club/',
  ),
  safemoon: new Token(
    MAINNET,
    '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3',
    9,
    'SAFEMOON',
    'Safemoon Token',
    'https://safemoon.net/',
  ),
  bondly: new Token(
    MAINNET,
    '0x96058f8C3e16576D9BD68766f3836d9A33158f89',
    18,
    'BONDLY',
    'Bondly Token',
    'https://www.bondly.finance/',
  ),
}

export const testnetTokens = {
  CAN: new Token(
    BSCTESTNET,
    '0x76514486123bCdB30e324ED1a78b54b389Ea6769',
    18,
    'CAN',
    'Canvas Token',
    'https://www.binance.com/',
  ),
  SENT: new Token(
    BSCTESTNET,
    '0xDe61B2517185b04E061ef7480bBd007460D579fB',
    18,
    'SENT',
    'SENT Token',
    'https://www.binance.com/',
  ),
  BEAST: new Token(
    BSCTESTNET,
    '0x1a85d1b9cc3283cc9FbD828bBdDA1a717C99ab1B',
    18,
    'Beast',
    'Beast Token',
    'https://www.binance.com/',
  ),
  TVF: new Token(
    BSCTESTNET,
    '0x647E2B8F100244bC869CB2898404Ef31F1713015',
    18,
    'TVF',
    'TVF Token',
    'https://www.binance.com/',
  ),
  TANBH: new Token(
    BSCTESTNET,
    '0xB5a838D1f8Ff60d6a5C6F8c0FAa4ED2Ecec70D7B',
    18,
    'TANBH',
    'TANBH Token',
    'https://www.binance.com/',
  ),
  SMRA: new Token(
    BSCTESTNET,
    '0x500f57113E84bdeEC1Cf3618bFe1f7BaC5231B26',
    18,
    'SMRA',
    'SMRA Token',
    'https://www.binance.com/',
  ),
  MKBHD: new Token(
    BSCTESTNET,
    '0x09830Aa74eb384D912D0bB41b29Daa7902b9d1b9',
    18,
    'MKBHD',
    'MKBHD Token',
    'https://www.binance.com/',
  ),

  KSM: new Token(
    BSCTESTNET,
    '0x29fcDa8965D417d7CE981e941c90b87099504AE9',
    18,
    'KSM',
    'KABIR Token',
    'https://www.binance.com/',
  ),
  CHHOTA: new Token(
    BSCTESTNET,
    '0x40fe25d7a6fa36fb99f0316b293eBD4762408ff4',
    18,
    'CHHOTA',
    'CHOTTA ANSHUL coin',
    'https://www.binance.com/',
  ),
  UTS: new Token(
    BSCTESTNET,
    '0xb859980c32Da9b98FfF9B18CA04ee97D6bf10A8F',
    18,
    'UTS',
    'Utsav Token',
    'https://www.binance.com/',
  ),
  SANDY: new Token(
    BSCTESTNET,
    '0x51F6c7Ad98B1a644452ECf05eDDCa70FD5ec0A30',
    18,
    'SANDY',
    'Sandy coin',
    'https://www.binance.com/',
  ),
  heemv: new Token(
    BSCTESTNET,
    '0x31C6F857a19639f19A9460b6D6157A50CC77e77D',
    18,
    'HEEMV',
    'Heemank Token',
    'https://www.binance.com/',
  ),
  wbnb: new Token(
    BSCTESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  cake: new Token(
    BSCTESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://app.respct.club/',
  ),
  busd: new Token(
    BSCTESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    BSCTESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://app.respct.club/',
  ),
  bake: new Token(
    BSCTESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.BSCTESTNET) {
    return { ...testnetTokens, ...mainnetTokens }
    // return Object.keys(mainnetTokens).reduce((accum, key) => {
    //   return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    // }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()

  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
