import React, { useEffect, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const InlineLatexKeystatic = ({ formula = "" }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const renderedHtml = katex.renderToString(formula, {
      throwOnError: false,
      displayMode: false,
    });
    setHtml(renderedHtml);
  }, [formula]);

  return (
    <span className="inline-block" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default InlineLatexKeystatic;
