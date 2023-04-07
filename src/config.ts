import * as process from 'process';

export default () => ({
  apiKey: process.env.API_KEY || '',
  web3: {
    rpcUrl: process.env.RPC_URL || 'https://api.harmony.one',
  },
  version: process.env.npm_package_version || '0.0.1',
  name: process.env.npm_package_name || '',
  port: parseInt(process.env.PORT, 10) || 8080,
});
