module.exports = {
  apps: [
    {
      name: 'Wonderland',
      exec_mode: 'cluster',
      instances: 4,
      script: './.output/server/index.mjs'
    }
  ]
}
