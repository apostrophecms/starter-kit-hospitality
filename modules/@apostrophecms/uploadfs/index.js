if (process.env.AZURE_STORAGE_ACCOUNTNAME) {
  module.exports = {
    options: {
      uploadfs: {
        storage: 'azure',
        account: process.env.AZURE_STORAGE_ACCOUNTNAME,
        container: process.env.AZURE_STORAGE_CONTAINERNAME,
        key: process.env.AZURE_STORAGE_ACCESSKEY,
        disabledFileKey: process.env.AZURE_STORAGE_DISABLEDFILEKEY,
        // Always required for Azure
        tempPath: __dirname + '/temp',
        // by default we gzip encode EVERYTHING except for a short list of excpetions, found in defaultGzipBlacklist.js
        // if for some reason you want to enable gzip encoding for one of these types, you can
        // you can also add types to ignore when gzipping
        gzipEncoding: {
          jpg: true,
          rando: false
        },
        imageSizes: [
          {
            name: 'small',
            width: 320,
            height: 320
          },
          {
            name: 'medium',
            width: 640,
            height: 640
          },
          {
            name: 'large',
            width: 1140,
            height: 1140
          }
        ],
        // Render up to 4 image sizes at once. Note this means 4 at once per call
        // to copyImageIn. There is currently no built-in throttling of multiple calls to
        // copyImageIn
        parallel: 4
      }
    }
  };
}