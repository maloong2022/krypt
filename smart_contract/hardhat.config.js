// https://eth-ropsten.alchemyapi.io/v2/Owo7ltUKKajARepah6eNfDjJhBusrZuG

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Owo7ltUKKajARepah6eNfDjJhBusrZuG',
      accounts: ['590eb2dbdde9c03561a69f3a72d33022d987a3470150a4a3e367414c81ce8504']

    }
  }
}
