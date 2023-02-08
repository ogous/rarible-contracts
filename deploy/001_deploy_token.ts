import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const results = await deploy('KANJINFT', {
    from: deployer,
    args: [],
    log: true
  })

  console.log('RESULTS: ', JSON.stringify(results))
}
export default func
func.tags = ['KANJINFT']
