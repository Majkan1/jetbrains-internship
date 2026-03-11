import { useState, useEffect } from "react";

export default function Footer() {
  const [Comp, setComp] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      import("@jetbrains/kotlin-web-site-ui/out/components/footer/index.js"),
      import("@jetbrains/kotlin-web-site-ui/out/components/footer/index.css")
    ]).then(([mod]) => {
      setComp(() => mod.default);
    }).catch(err => console.error("Footer load error:", err));
  }, []);

  if (!Comp) return <div style={{ height: '200px', backgroundColor: '#19191c' }} />;

  return <Comp />;
}