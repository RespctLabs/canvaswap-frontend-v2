import { Currency, ETHER, Token } from '@respctclub/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MATIC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
