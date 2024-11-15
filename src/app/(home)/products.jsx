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

  // fetch data functhon on the server using fetch
  async function getData() {
    const res= await fetch("https://fakestoreapi.com/products")
    if(!res.ok){
      throw new Error('Field to fetch data')
    }
    return res.json()
  }
const Products = async () => {
  const data =await getData();
 
    return (
        <section className="products flex">
        {data.map((item) => {
          return (
            <article title={item.title} key={item.productIng} className="card">
              <a href="/pages/product-details.html">
              {/* <img width={266} src={item.image} alt=""/>*/}
              </a>
              <div style={{ width: "266px" }} className="content">
                <h1 className="title">{item.title.slice(0,15)}...</h1>
                <p className="description">
                  {item.description.slice(0,111)}...
                </p>
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <div className="price">${item.price}</div>
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
