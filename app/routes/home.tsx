import Header from "../welcome/components/Header";
import Footer from "../welcome/components/Footer";

export default function Index() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />
      
      <main style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          A modern programming language <br /> 
          that makes developers happier
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Mój nowy projekt w React Router 7!
        </p>
      </main>

      <Footer />
    </div>
  );
}