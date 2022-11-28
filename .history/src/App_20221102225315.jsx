import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Layout, Home, Users, Search, Help, About, Error, ErrorFallBack, Footer } from "./components";


const App = () => {

   return (
      <div className="App">
         <main>
            <ErrorBoundary FallbackComponent={ErrorFallBack}>
               <Layout />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="users">
                     <Route index element={<Users />} />
                     <Route path=":id" element={<Search />} />
                  </Route>
                  <Route path="help" element={<Help />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<Error />} />
               </Routes>
            </ErrorBoundary>
            <Footer />
         </main>
      </div>
   );
}

export default App;