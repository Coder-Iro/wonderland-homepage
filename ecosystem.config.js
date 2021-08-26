module.exports = {
  apps: [
    {
      name: 'WonderlandWeb',
      exec_mode: 'cluster',
      instances: 2, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
          "API_URL_BROWSER": "https://wonder.teamif.io/",
      }
    }
  ]
}
