import React from "react";
import { setCache, remove } from "../lib/storage";
import { defaultConfig } from "./index";

function Config() {
  return (
    <form className="config-panel" onSubmit={(e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData) || {};
      const { apiKey, appVersion, appType, endpoint, releaseStage, maxActions } = formProps;

      console.log("formProps", formProps);

      setCache({ apiKey, appVersion, appType, endpoint, releaseStage, maxActions: +maxActions });

      window.location.reload();
    }}>
      <div className="section">
        <h1>sdk 配置</h1>

        <div className="form-item">
          <label>apiKey: </label>
          <input type="text" name="apiKey" defaultValue={defaultConfig.apiKey}/>
        </div>


        <div className="form-item">
          <label>appVersion: </label>
          <input type="text" name="appVersion" defaultValue={defaultConfig.appVersion}/>
        </div>

        <div className="form-item">
          <label>appType: </label>
          <input type="text" name="appType" defaultValue={defaultConfig.appType}/>
        </div>

        <div className="form-item">
          <label>endpoint: </label>
          <input type="text" name="endpoint" defaultValue={defaultConfig.endpoint}/>
        </div>

        <div className="form-item">
          <label>releaseStage: </label>
          <input type="text" name="releaseStage" defaultValue={defaultConfig.releaseStage}/>
        </div>

        <div className="form-item">
          <label>maxActions: </label>
          <input type="number" name="maxActions" defaultValue={defaultConfig.maxActions}/>
        </div>

        <div className="form-item submit">
          <button type="submit">确定</button>
          <button type="button" onClick={() => {
            remove();
            window.location.reload();
          }}>恢复默认
          </button>
        </div>

      </div>
    </form>
  );
}

export default Config;
