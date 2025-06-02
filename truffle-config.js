
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },

compilers: {
  solc: {
    version: "0.4.24",
    // optionnel : parser: "solcjs",
  },
},

};
