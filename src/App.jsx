import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  Users,
  Search,
  Error,
  ErrorFallBack,
  Profile,
  ProfileDisplay,
  Register,
  UpdatePassword,
} from "./components";

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
            <Route path="profile" element={<Profile />} />
            <Route path="profileDisplay" element={<ProfileDisplay />} />
            <Route path="register" element={<Register />} />
            <Route path="update" element={<UpdatePassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;
