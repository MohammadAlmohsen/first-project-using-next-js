import React from 'react';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import "./product-details.css"
async function getData(iddd) {
    // await new Promise(resolve => setTimeout(resolve, 3000)) // Wait before executing the next code 
     const res= await fetch(`http://localhost:4000/products/${iddd}`)
     if(!res.ok){
       throw new Error('Field to fetch data')
     }
     return res.json()
   }






const Page = async({params}) => {
    const ObjData =await getData(params.id);
    return (
       <div>
        <Header/>
        <main style={{ textAlign: "center" }} className="flex">
  <img alt="" src="../images/3.webp" />
  <div className="product-details">
    <div style={{ justifyContent: "space-between" }} className="flex">
      <h2>Product title</h2>
      <p className="price">$14.99</p>
    </div>
    <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      eveniet eos rem molestiae repellendus, ducimus distinctio perspiciatis
      veniam, neque iure illo eligendi. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit Suscipit consectetur.
    </p>
    <button className="flex add-to-cart">
      <i className="fa-solid fa-cart-plus" />
      Add To Cart
    </button>
  </div>
</main>


        <Footer/>
       </div>
    );
}

export default Page;
