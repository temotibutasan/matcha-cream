import { createContext, FC, useContext } from 'react'
import { UseWallet, UseWalletReturns } from 'src/libs/hooks/useWallet'

export const WalletContext = createContext<UseWalletReturns>({
  isActive: false,
  walletAccount: "unkown",
  shouldDisable: false,
  isLoading: false,
  handleIsActive: () => {},
  connect: () => {throw new Error('connect function is not')},
  disconnect: () => {throw new Error('disconnect function is not')},
})

export const useWalletContext = () => {
  const context = useContext(WalletContext)
  if (context === undefined) {
      throw new Error('useMetaMask hook mususeWallett be used with a MetaMaskProvider component')
  }
  return context
}

export const WalletProvider: FC = ({ children }) => {
  const values = UseWallet()
  return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}

