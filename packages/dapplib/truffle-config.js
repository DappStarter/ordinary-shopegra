require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remind home hunt lobster flush torch'; 
let testAccounts = [
"0xe8e08519e804cc3cd9b91d0554782d4807f2984433c2dd3f0d7576a5d1499dc4",
"0x3131e3d3a519dd0d60e3817360bfff3befb332d9447252ff37862eeeb04d501f",
"0xfaf6548a8a31ac422fda1ff4d54a35ddd832134bbb4da50ece232833186adb10",
"0x533e284914560cc6c4f0bfbc2f3d139c9e556c194e001e9fcd14d56e240a7f17",
"0xcb5e09ba379005aad38c5331d062da6e63bd5930bff992f7bb7c84ae94c0d063",
"0xa89b7b58c70345765d26498881c5e3c66fe04767b043d70447080f6a5fc3369d",
"0x9c4c189500295a13c3ae0831bb7168cf4970524dafa680f798b2f48838091ef5",
"0x9869283a6aa7d29cb9354fd6a473a491488efe1b0d29858f5973faddce5f68b0",
"0x0815396c4ca90436dbbba6e4ddd6406e404ea4c7bf90cba7e3616616a7668dd5",
"0x08e8f41f6df7965b3a2cbde0a68a6dc66d7a9c133d7bb6a5e5f46d4baf061480"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
