module.exports = {
    publicPath: '',
    productionSourceMap: false,

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
Object.entries(require(`${__dirname}/project.meta`)).forEach(
    ([key, value]) => (process.env[`VUE_APP_${key.toUpperCase()}`] = value)
)
