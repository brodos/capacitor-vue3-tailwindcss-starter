module.exports = {
  publicPath: '/',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
          args[0].hash = true
          args[0].title = "Tailwind UI"
          return args
      })
  }
}
