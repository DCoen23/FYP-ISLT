const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  // const {
  //   resolver: { sourceExts, assetExts },
  // } = await getDefaultConfig();
  const defaultConfig = await getDefaultConfig();
  const { assetExts } = defaultConfig.resolver;
  return {
    resolver: {
      assetExts: [...assetExts, 'bin'], 
    },
  };
})();
