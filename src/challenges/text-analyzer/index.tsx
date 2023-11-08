import TextAnalyzerContainer from "./components/container/TextAnalyzerContainer";
import Layout from "./layout/layout";

/**
 * TODO
 * Arreglar bug de cantidad de parrafos
 * Arreglar bug de cantidad de pronombres
 */
const TextAnalyzer = () => {
  return (
    <Layout>
      <TextAnalyzerContainer />
    </Layout>
  );
};

export default TextAnalyzer;
