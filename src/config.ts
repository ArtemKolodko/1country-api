import * as process from 'process';

export default () => ({
  apiKey: process.env.API_KEY || '',
  version: process.env.npm_package_version || '0.0.1',
  name: process.env.npm_package_name || '',
  port: parseInt(process.env.PORT, 10) || 8080,
  rpcUrl: process.env.RPC_URL || 'https://api.harmony.one',
  explorerApiUrl:
    process.env.EXPLORER_API_URL || 'http://api1.explorer.t.hmny.io:3000',
  explorerApiKey: process.env.EXPLORER_API_KEY || '',
  nameWrapperAddress:
    process.env.NAME_WRAPPER_ADDRESS ||
    '0x4cd2563118e57b19179d8dc033f2b0c5b5d69ff5',
});
