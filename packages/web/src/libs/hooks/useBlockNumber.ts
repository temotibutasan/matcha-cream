import { useWeb3React } from "@web3-react/core";
import { SetStateAction, useEffect, useState } from "react";

export const useBalance = (
) => {
  const { library } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (library) {
      const updateBlockNumber = (val: SetStateAction<undefined>) => setBlockNumber(val);
      library.on("block", updateBlockNumber);

      return () => {
        library.removeEventListener("block", updateBlockNumber);
      };
    }
    return () => {}
  }, [library]);

  return blockNumber;
}