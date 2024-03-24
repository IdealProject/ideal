import { useEffect, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const BlockLatexKeystatic = ({ formula = "" }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const renderedHtml = katex.renderToString(formula, {
      throwOnError: false,
      displayMode: true,
    });
    setHtml(renderedHtml);
  }, [formula]);

  return (
    <div className="text-center" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default BlockLatexKeystatic;
