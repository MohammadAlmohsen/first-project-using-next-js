import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const arr = [
  { productIng: "./images/1.png" },
  { productIng: "./images/2.webp" },
  { productIng: "./images/3.webp" },
  { productIng: "./images/4.webp" },
  { productIng: "./images/5.webp" },
  { productIng: "./images/6.webp" },
  { productIng: "./images/7.webp" },
  { productIng: "./images/8.png" },
];

// fetch data functhon on the server using fetch
async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 3000)) // Wait before executing the next code
  const res = await fetch("http://localhost:4000/products");
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
const Products = async () => {
  const arrData = await getData();

  return (
    <section className="products flex">
      {arrData.map((item) => {
        return (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <Image
                width={266}
                height={260}
                quality={100}
                src={item.productImg}
                alt=""
              />
            </Link>
            <div style={{ width: "266px" }} className="content">
              <h1 className="title">{item.title.slice(0, 15)}...</h1>
              <p className="description">{item.description.slice(0, 111)}...</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">${item.price}</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    style={{ width: "1.1rem" }}
                    icon={faCartPlus}
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
