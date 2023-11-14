import TextAnalyzer from "@src/challenges/text-analyzer";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<TextAnalyzer />}>
      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
    </Route>
    <Route path="/text-analyzer" element={<TextAnalyzer />} />

    <Route path="*" element={<>No Match</>} />
  </Routes>
);

export default MainRoutes;
