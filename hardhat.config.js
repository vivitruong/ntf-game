require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://frosty-attentive-panorama.ethereum-goerli.discover.quiknode.pro/49cf57eed05321f3069846b84df2727fa9b6d3ad/',
      accounts: ['52a58cc19c24c36890c0ab956e35190cf76c3ba92c230246c7556c1b01b16e57'],
    },
  },
};
