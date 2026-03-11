import { lazy, Suspense, useEffect, useState } from "react";

const JetBrainsHeader = lazy(() => 
  import("@jetbrains/kotlin-web-site-ui/out/components/header/index.js").then(mod => {
    import("@jetbrains/kotlin-web-site-ui/out/components/header/index.css");
    
    return { default: mod.default || mod.Header };
  })
);

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ height: "64px", background: "#19191c" }} />;
  }

  return (
    <Suspense fallback={<div style={{ height: "64px", background: "#19191c" }} />}>
      <JetBrainsHeader />
    </Suspense>
  );
}
