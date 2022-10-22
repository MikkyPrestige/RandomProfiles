import * as React from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "./components/errorFallback";
import Layout from "./components/layout";
import Users from "./components/users";
// import Error from "./components/error";
// import { Route, Routes } from "react-router-dom";



function App() {

   return (
      <div className="App">
         <header className="App-header">
            <h1>ASSIGNMENT 2</h1>
         </header>

         <Layout />
         <Users />

         {/* <ErrorBoundary FallbackComponent={ErrorFallback}
            onReset={() => { }} >
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route path="users" element={<Users />} />
                  <Route path="error" element={<Error />} />
               </Route>
            </Routes>
         </ErrorBoundary> */}
      </div>
   );
}

export default App;