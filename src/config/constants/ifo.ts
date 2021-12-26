import { Token, ChainId } from '@respctclub/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(
  ChainId.BSCTESTNET,
  '0x0ab3dea50da2dd253033c9488a2f0ce7af665c7d',
  18,
  farms[1].lpSymbol,
)

const ifos: Ifo[] = []

export default ifos
