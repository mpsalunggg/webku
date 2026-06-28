import Giscus from "@giscus/react";
import { useTheme } from "../layout/ThemeProvider";

const Comments = () => {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="mpsalunggg/mps"
      repoId="R_kgDOLPxXmQ"
      category="Writing Comments"
      categoryId="DIC_kwDOLPxXmc4DAC-D"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme={theme == "light" ? "light_protanopia" : "dark_protanopia"}
      lang="id"
      loading="lazy"
    />
  );
};

export default Comments;
