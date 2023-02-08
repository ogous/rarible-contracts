import { HardhatUserConfig } from 'hardhat/config'

// PLUGINS
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
// import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'

// Process Env Variables
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

const PK = process.env.PK
// const PK_MAINNET = process.env.PK_MAINNET
const ALCHEMY_ID = process.env.ALCHEMY_ID
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',

  // hardhat-deploy
  namedAccounts: {
    deployer: {
      default: 0
    },
    tokenOwner: 1
  },

  // networks: {
  //   // hardhat: {
  //   //   forking: {
  //   //     url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
  //   //     blockNumber: 14000000
  //   //   }
  //   // },
  //   goerli: {
  //     accounts: PK ? [PK] : [],
  //     chainId: 5,
  //     url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`
  //   }
  //   // mainnet: {
  //   //   accounts: PK_MAINNET ? [PK_MAINNET] : [],
  //   //   chainId: 1,
  //   //   url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`
  //   // }
  // },
  paths: {
    sources: 'contracts'
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY ?? ''
  },

  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: { enabled: true, runs: 200 }
        }
      }
    ]
  },

  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  }
}

export default config
