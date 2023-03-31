const { expect } = require('chai');
const { ethers } = require('hardhat');
const { time } = require('@nomicfoundation/hardhat-network-helpers');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const ether = tokens

describe('Time Examples', () => {

  describe('Example 1', () => {
    it('demonstrates time restriction with block.timestamp', async () => {

      // Configure time
      let now = await time.latest()

      // Uncomment this to see the current timestamp
      console.log(now, 'time as of run of test')

      let depositStartTime = now + 2000 // add 1,000 seconds
      console.log(depositStartTime, 'set deposit start time')

      let withdrawStartTime = now + 6000 // add 2,000 seconds
      console.log(withdrawStartTime, 'set withdraw to withdraw start time')

      // Deploy contract with time settings
      const Contract = await ethers.getContractFactory('Time1')
      contract = await Contract.deploy(depositStartTime, withdrawStartTime)

      // Try to deposit
      await expect(contract.deposit({ value: ether(1) })).to.be.reverted

      // Advance time past deposit start time + 1 second
      await time.increaseTo(depositStartTime + 1);
      console.log(depositStartTime, 'increased test to deposit start time')

      // Desposit
      await contract.deposit({ value: ether(1) })
      expect(await ethers.provider.getBalance(contract.address)).to.equal(ether(1))

      // Try to withrwaw
      await expect(contract.withdraw()).to.be.reverted

      // Advance time past withdraw start time + 1 second
      await time.increaseTo(withdrawStartTime + 1);
      console.log(withdrawStartTime, 'increased time to withdraw start time')

      // Desposit
      await contract.withdraw()
      expect(await ethers.provider.getBalance(contract.address)).to.equal(ether(0))

    })

  })
})
