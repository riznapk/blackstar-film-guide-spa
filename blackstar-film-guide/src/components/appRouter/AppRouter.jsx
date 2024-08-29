import { Routes, Route, Navigate } from "react-router-dom";
import TabsComponent from "../tabsComponent/TabsComponent";
import Layout from "./Layout";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/festival/film-guide/" replace />}
      />
      <Route
        path="/festival/film-guide/"
        element={
          <Layout>
            <TabsComponent />
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
