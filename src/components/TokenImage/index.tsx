import React from 'react'
import {
  TokenPairImage as UIKitTokenPairImage,
  TokenPairImageProps as UIKitTokenPairImageProps,
  TokenImage as UIKitTokenImage,
  ImageProps,
} from '@respctclub/uikit'
import tokens from 'config/constants/tokens'
import { Token } from '@respctclub/sdk'

interface TokenPairImageProps extends Omit<UIKitTokenPairImageProps, 'primarySrc' | 'secondarySrc'> {
  primaryToken: Token
  secondaryToken: Token
}

const getImageUrlFromToken = (token: Token) => {
<<<<<<< HEAD
  const address = token.symbol === 'MATIC' ? tokens.wbnb.address : token.address
  return `/images/tokens/${address}.svg`
=======
  const address = token.symbol === 'MATIC' ? tokens.wbnb.address : token.address
  return `/images/tokens/${address}.jpg`
>>>>>>> 7ea2d66d3ab1bfda362fd8e6c509c3ec5634a63f
}

export const TokenPairImage: React.FC<TokenPairImageProps> = ({ primaryToken, secondaryToken, ...props }) => {
  return (
    <UIKitTokenPairImage
      primarySrc={getImageUrlFromToken(primaryToken)}
      secondarySrc={getImageUrlFromToken(secondaryToken)}
      {...props}
    />
  )
}

interface TokenImageProps extends ImageProps {
  token: Token
}

export const TokenImage: React.FC<TokenImageProps> = ({ token, ...props }) => {
  return <UIKitTokenImage src={getImageUrlFromToken(token)} {...props} />
}
