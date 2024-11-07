import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Travel from "./components/Products/Products";
import Login from "./components/Login/Login";
import Cities from "./components/Cities/Cities";
import Countries from "./components/Countries/Countries";
import City from "./components/Cities/City";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/LoginProtector";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/travel"
              element={
                <ProtectedRoute>
                  <Travel />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="cities" replace />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<Countries />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
