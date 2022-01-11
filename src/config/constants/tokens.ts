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
    'https://respct.club/',
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
  RESPCT: new Token(
    BSCTESTNET,
    '0x48603c29C218C82DEca1DEe8d025c8c8FbCf5104',
    18,
    'RESPCT',
    'RESPCT Token',
    'https://respct.club/',
  ),
  CAN: new Token(
    BSCTESTNET,
    '0x76514486123bCdB30e324ED1a78b54b389Ea6769',
    18,
    'CAN',
    'Canvas Token',
    'https://respct.club/',
  ),
  SENT: new Token(
    BSCTESTNET,
    '0x24fB1d5D00317A9144795d8d1eeacdAC57Ee8681',
    18,
    'SENT',
    'SENT Token',
    'https://respct.club/',
  ),
  BEAST: new Token(
    BSCTESTNET,
    '0x69fcd17d83BAa70aBca88EcB536a042D207B02eA',
    18,
    'Beast',
    'Beast Token',
    'https://respct.club/',
  ),
  TVF: new Token(
    BSCTESTNET,
    '0x623b2109A22ab01b7E180cdA155E65246A05B3b9',
    18,
    'TVF',
    'TVF Token',
    'https://respct.club/',
  ),
  TANBH: new Token(
    BSCTESTNET,
    '0x821d1e8AF1a4E4606d1E197A0458Fb1cE9D9b0ab',
    18,
    'TANBH',
    'TANBH Token',
    'https://respct.club/',
  ),
  SMRA: new Token(
    BSCTESTNET,
    '0xD95411F15e2d74377f9DC59c55654b7dd620Ac1e',
    18,
    'SMRA',
    'SMRA Token',
    'https://respct.club/',
  ),
  MKBHD: new Token(
    BSCTESTNET,
    '0x643CFEeEc1cC6D097ed120001d62EE0be157560d',
    18,
    'MKBHD',
    'MKBHD Token',
    'https://respct.club/',
  ),
  SANDY: new Token(
    BSCTESTNET,
    '0x294E0c9eDC7C81bF4268Cd580308b34258220296',
    18,
    'SANDY',
    'Sandy coin',
    'https://respct.club/',
  ),
  JOSH: new Token(
    BSCTESTNET,
    '0xaE24C973cDAd107454273F9E9d4c67C8C764DA41',
    18,
    'JOSH',
    'Josh Talks Token',
    'https://respct.club/',
  ),
  INR: new Token(
    BSCTESTNET,
    '0xd7e14191eA71179171f3C85EcDDf1cE06E820013',
    18,
    'INR',
    'Indian National Rupee',
    'https://respct.club/',
  ),
  wbnb: new Token(
    BSCTESTNET,
    '0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://respct.club/',
  ),
  cake: new Token(
    BSCTESTNET,
    '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://respct.club/',
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
