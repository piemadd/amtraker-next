const withPWA = require('next-pwa')

let config = withPWA({
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development'
    }
})

config.headers = (async () => {
    return [
        {
            source: '/trainicons/[trainState]',
            headers: [
                {
                    key: 'Content-Type',
                    value: 'image/svg+xml',
                }
            ]
        }
    ]
})

module.exports = config;