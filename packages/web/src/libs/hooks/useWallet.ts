import { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core';
import { injected } from 'src/connectors/connect';

export type UseWalletReturns = {
    isActive: boolean,
    walletAccount:string | null | undefined,
    shouldDisable:boolean,
    isLoading:boolean,
    handleIsActive: () => void,
    connect: () => Promise<void>,
    disconnect: () => Promise<void>,
  }

export const UseWallet = ():UseWalletReturns => {
    const { activate, account, library, connector, active, deactivate } = useWeb3React()
    const [isActive, setIsActive] = useState(active)
    const [walletAccount, setWalletAccount] = useState(account)
    const [shouldDisable, setShouldDisable] = useState(false) // Should disable connect button while connecting to MetaMask
    const [isLoading, setIsLoading] = useState(true)

    // Init Loading
    useEffect(() => {
        connect().then(val => {
            setIsLoading(false)
        })
    }, [])

    // Check when App is Connected or Disconnected to MetaMask
    const handleIsActive = useCallback(() => {
        console.log('App is connected with MetaMask ', active)
        setIsActive(active)
    }, [active])

    useEffect(() => {
        handleIsActive()
    }, [handleIsActive])

    const handleWalletAcccount = useCallback(() => {
        console.log('App is connected with MetaMask ', account)
        setWalletAccount(account)
    }, [account])

    useEffect(() => {
        handleWalletAcccount()
    }, [handleWalletAcccount])

    // Connect to MetaMask wallet
    const connect = async () => {
        console.log('Connecting to MetaMask...')
        setShouldDisable(true)
        try {
            await activate(injected).then(() => {
                setShouldDisable(false)
            })
        } catch(error) {
            console.log('Error on connecting: ', error)
        }
    }

    // Disconnect from Metamask wallet
    const disconnect = async () => {
        console.log('Disconnecting wallet from App...')
        try {
            await deactivate()
        } catch(error) {
            console.log('Error on disconnnect: ', error)
        }
    }

    return {
        isActive,
        walletAccount,
        shouldDisable,
        isLoading,
        handleIsActive,
        connect,
        disconnect,
      }
}