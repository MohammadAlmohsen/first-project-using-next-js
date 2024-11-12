import React from 'react';


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
const Products = () => {
    return (
        <section className="products flex">
        {arr.map((item) => {
          return (
            <article key={item.productIng} className="card">
              <a href="/pages/product-details.html">
                <img width={266} src={item.productIng} alt=""/>
              </a>
              <div style={{ width: "266px" }} className="content">
                <h1 className="title">Product Title</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <div className="price">$100</div>
                  <button className="add-to-cart flex">
                    <i className="fa-solid fa-cart-plus" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>    
    );
}

export default Products;
