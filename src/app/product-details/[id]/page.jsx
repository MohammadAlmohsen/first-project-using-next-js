import React from "react";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
async function getData(iddd) {
  // await new Promise(resolve => setTimeout(resolve, 3000)) // Wait before executing the next code
  const res = await fetch(`http://localhost:4000/products/${iddd}`);
  if (!res.ok) {
    throw new Error("Field to fetch data");
  }
  return res.json();
}

const Page = async ({ params }) => {
  const ObjData = await getData(params.id);
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
      <main style={{ textAlign: "center" }} className="flex">
        <img alt="" src={`.${ObjData.productImg}`}/>
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{ObjData.title}</h2>
            <p className="price">${ObjData.price}</p>
          </div>
          <p className="description">
          {ObjData.description}
          </p>
          <button className="flex add-to-cart">
            <i className="fa-solid fa-cart-plus" />
            <FontAwesomeIcon style={{width:"1.1rem"}} icon={faCartPlus}/>
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
