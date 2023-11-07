import TextAnalyzer from "@src/challenges/text-analyzer";
import Layout from "@src/layout/Layout";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
    </Route>
    <Route path="/text-analyzer" element={<TextAnalyzer />} />

    <Route path="*" element={<>No Match</>} />
  </Routes>
);

export default MainRoutes;
