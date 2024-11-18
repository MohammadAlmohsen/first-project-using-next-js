import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: " auto 1fr auto",
      }}
    >
      <Header />
      <main style={{ textAlign: "center" }}>
      <p style={{fontSize:"1.9rem",fontWeight:"bold",marginBottom:"10px"}}>Sorry</p>
      
      <p style={{fontSize:"1.9rem",fontWeight:"500"}}>we could not found this page were looing for :(</p>

      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
