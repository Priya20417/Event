import * as React from 'react';
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";
import Drawers from './navigation/Drawers';
function App() {
  return (
    <Drawers />
  );
}

export default App;
serviceWorkerRegistration.register();