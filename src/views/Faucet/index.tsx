import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { ChevronRightIcon, Button, AutoRenewIcon, ChevronDownIcon, Box, Flex, Heading, Text } from '@respctclub/uikit'
import { AppBody } from 'components/App'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { registerToken, setupNetwork } from 'utils/wallet'
import tokens from 'config/constants/tokens'
import { getFaucetContract } from 'utils/contractHelpers'
import { getContract } from 'utils'
import { useWeb3React } from '@web3-react/core'
import { Link } from 'react-router-dom'
import Page from '../Page'
import Column, { AutoColumn } from '../../components/Layout/Column'
import { AutoRow, RowBetween } from '../../components/Layout/Row'
import TokenAbi from '../../config/abi/INRERC20.json'

export default function Index() {
  const [balance, setBalance] = useState(null)
  const { chainId } = useActiveWeb3React()
  const { account } = useWeb3React()
  const INRToken = tokens.INR

  const ethereum = window.ethereum
  const provider = new ethers.providers.Web3Provider(ethereum)

  useEffect(() => {
    getBalance()
    // ethereum.on('chainChanged', () => {
    //   window.location.reload()
    // })
    // ethereum.on('accountsChanged', () => {
    //   window.location.reload()
    // })

    // eslint-disable-next-line
  }, [])

  const getBalance = async () => {
    const contract = getContract(INRToken.address, TokenAbi)
    await contract
      .balanceOf(account)
      .then((bal) => setBalance((bal / 10 ** 18).toString()))
      .catch((err) => console.log(err))
  }
  const faucet = async () => {
    const contract = getFaucetContract(provider.getSigner())
    await contract
      .extractToken()
      .then((res) => {
        getBalance()
      })
      .catch((err) => {
        console.log(err)
      })
    getBalance()
  }
  const showToken = async () => {
    await registerToken(INRToken.address, INRToken.symbol, INRToken.decimals)
  }
  const addNetwork = async () => {
    setupNetwork()
  }

  return (
    <Page>
      <Flex width="100%" justifyContent="center" position="relative">
        <Flex flexDirection="column">
          <AppBody>
            <AutoColumn gap="md" style={{ padding: '2rem' }}>
              <AutoRow justify="space-between">
                <Heading as="h2" mb="8px">
                  Recieve INR to your wallet
                </Heading>
                <Text color="textSubtle" fontSize="14px">
                  You currently have {balance ?? 0} INR
                </Text>
              </AutoRow>

              <AutoColumn gap="md">
                <Button onClick={faucet} disabled={balance > 15}>
                  Request Token!
                </Button>
                <Button onClick={showToken}>View Token in MetaMask</Button>
                <Button onClick={addNetwork} disabled={chainId === 80001}>
                  Add/Switch Network
                </Button>
                <br />
                <Button variant="secondary" scale="sm" as="a" href="https://faucet.polygon.technology" target="_blank">
                  Polygon Faucet
                </Button>
              </AutoColumn>
            </AutoColumn>
          </AppBody>
        </Flex>
      </Flex>
    </Page>
  )
}
