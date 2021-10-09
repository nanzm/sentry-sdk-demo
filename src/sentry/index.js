import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { getCache } from "../lib/storage";

export const defaultConfig = {
  dsn: "http://d6eca399952c4c0ca067f28987aeed48@localhost:9000//3",
  environment: "dev",
  release: "0.0.1",
};

const config = Object.assign(defaultConfig, getCache())

Sentry.init({
  dsn: config.dsn,
  integrations: [ new Integrations.BrowserTracing() ],
  environment: config.environment,
  release: config.release,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
