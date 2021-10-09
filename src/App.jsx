import React from "react";
import * as Sentry from "@sentry/react";

import SentryConfig from "./sentry/Config";

import Ajax from "./view/Ajax";
import Error from "./view/Error";
import HashChange from "./view/HashChange";
import History from "./view/History";
import InsertRes from "./view/InsertRes";
import CustomReport from "./view/CustomReport";
import PromiseError from "./view/PromiseError";
import Stat from "./view/Stat";

function App() {
  React.useEffect(() => {
  }, []);

  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      <SentryConfig/>
      <div className="section-groups">
        <Error/>
        <Ajax/>
        <HashChange/>
        <History/>
        <InsertRes/>
        <CustomReport/>
        <PromiseError/>
        <Stat/>
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
