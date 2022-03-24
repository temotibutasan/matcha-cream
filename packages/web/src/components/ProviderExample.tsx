import { Web3ReactProvider } from '@web3-react/core'
import ProviderAPP from './ProviderApp'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  return new Web3Provider(provider)
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider getLibrary={getLibrary} >
      <ProviderAPP />
    </Web3ReactProvider>
  )
}
