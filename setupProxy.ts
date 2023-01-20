const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://3.38.26.161:8080/',
			changeOrigin: true,
		})
	);
};