module.exports = {
  port: process.env['APP_PORT'] || 3000,
  redis: {
    host: process.env['APP_REDIS_HOST'] || '127.0.0.1',
    port: process.env['APP_REDIS_PORT'] || 6379,
    password: process.env['APP_REDIS_PASS']
  }
};
