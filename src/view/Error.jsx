import React from "react";
import { randomString } from "../lib/utils"

function Boo() {
  throw new Error(title);
}

function Error() {
  const [ isError, setError ] = React.useState(false);

  const handleError = () => {
    const obj = {};
    console.log(obj.user.job);
  };

  const handleError1 = () => {
    let user = {}
    user.detail[randomString(10)]
  };

  return (
    <div className="section">
      <h1>Error</h1>
      <button onClick={() => handleError()}>undefined 按钮</button>
      <button onClick={() => handleError1()}>随机错误 按钮</button>
      <button onClick={() => {
        setError(true)
      }}>崩溃 按钮
      </button>
      {isError ? <Boo/> : null}
    </div>
  );
}

export default Error;
