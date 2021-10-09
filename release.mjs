const VERSION = "0.0.1";
const SOURCEMAPS_PATH = "./build/static/js";
const URL_PREFIX = "~/static/js/";

await $`npx sentry-cli releases new ${VERSION}`;
await $`npx sentry-cli releases files ${VERSION} upload-sourcemaps ${SOURCEMAPS_PATH}  --url-prefix ${URL_PREFIX}`;
await $`npx sentry-cli releases finalize ${VERSION}`;
