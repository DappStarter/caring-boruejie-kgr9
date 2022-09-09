require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index raise saddle exchange grace fashion flock gasp'; 
let testAccounts = [
"0x47d53df23f081d8a01fee46624015b6b2301b5dbfd9a2296660ead1bce42e966",
"0xe5706a458df9b6b66a3732e9b909e88bf718605934fd9b2ceddb1a90a47daedd",
"0xd4c66781614b41c6ec1671ddffe58171b90d04e87f0b3ad72de189fe9d0008c3",
"0x79fa0f893336faaa9593feb0fbc9e685092afbf7d88467220e0a5ba131202064",
"0xcd7b1c21addbddf96bda5ddb5002aae04347606f1630d38dc6822c9a2184d065",
"0xe99022888db0f440cf62163f33afcd4cb1328cdf0a7a4c39d22f450d03514f91",
"0x72d77463376ddd2a42334652c9d445c910473fba7f590a6f51bd7969ee7f4a20",
"0x531919c0cd126dfa39d6ea74bc4fab86be1cf20b9e0c40368a712bd9f9e565de",
"0xc7d21a65569787cc59c871cbdcbd59cbba01e2ad2ae894a31416f93de2efe272",
"0x6bd5b0ec8544363e7a6d275ccdbb9ad3ab7e265d3a62c571ff499a609dc44b8c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


