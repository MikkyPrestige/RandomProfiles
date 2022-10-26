import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import ErrorFallback from "./components/errorFallback";
// import Filter from "./components/filter";
import Home from "./components/home";
import Layout from "./components/layout";
import Help from "./components/help";
import Users from "./components/users";
import About from "./components/about";
import Error from "./components/error";
import UserDetails from "./components/userDetails";


function App() {

   return (
      <div className="App">
         <main>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
               <Layout />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="users" element={<Users />}>
                     <Route path="userDetails" element={<UserDetails />} />
                  </Route>
                  <Route path="help" element={<Help />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<Error />} />
               </Routes>
            </ErrorBoundary>
         </main>
      </div>
   );
}

export default App;