import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import ErrorFallback from "./components/errorFallback";
import Home from "./components/home";
import Layout from "./components/layout";
// import Users from "./components/users";
// import Error from "./components/error";
// import { Route, Routes } from "react-router-dom";



function App() {

   return (
      <div className="App">
         <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     {/* <Route path="users" element={<Users />} /> */}
                     {/* <Route path="*" element={<Error />} /> */}
                  </Route>
               </Routes>
               <Home />
            </ErrorBoundary>
         </main>
      </div>
   );
}

export default App;