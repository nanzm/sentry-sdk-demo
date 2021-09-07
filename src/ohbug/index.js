import Ohbug from '@ohbug/browser'
import { getCache } from "../lib/storage";

export const defaultConfig = {
  apiKey: "4111c123f0aab6e312dd29cb26dbc7f0ff78caa0ccf8c1684163d2782bea3d5d",
  appVersion: "0.0.1",
  appType: "react",
  endpoint: "http://localhost:6660/report",
  releaseStage: process.env.NODE_ENV,
  maxActions: 10,
  user: {
    id: 8532429,
    username: "小明",
  }
};

const config = Object.assign(defaultConfig, getCache())

Ohbug.init(config)
