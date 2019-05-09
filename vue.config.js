module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'
  ,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";`
      }
    }
  }
};