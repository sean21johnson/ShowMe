// import * as Raven from "@sentry/react";

function init() {
	// Raven.init({
	// 	dsn:
	// 		"https://d8dac28a7c5940a2ad4b5c6f98f3a6b1@o593389.ingest.sentry.io/5741694",
	// 	// Set tracesSampleRate to 1.0 to capture 100%
	// 	// of transactions for performance monitoring.
	// 	// We recommend adjusting this value in production
	// 	tracesSampleRate: 1.0,
	// });
}

function log(error) {
	console.error(error)
	// Raven.captureException(error);
}

const logger = {
	init,
	log
}

export default logger;
