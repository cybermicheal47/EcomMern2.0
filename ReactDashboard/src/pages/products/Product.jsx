import React from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../data";
import pic from "../../img/pic.jpg";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";

function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  return (
    <div className="product">
      <div className="producttilecontainer">
        <h1 className="productTitle"> Product</h1>
        <Link to="/newproduct">
          <button className="addProductButton"> Add New Product</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopRight">
          <div className="productTopRightInfo"></div>
          <img src={product.img || pic} className="productTopimg" />
          <span className="productName">{product.title}</span>
          <div className="productTopRightBottom">
            <div className="productTopRightItem">
              <span className="productTopRightKey">id:</span>
              <span className="productTopRightValue">{product._id}</span>
            </div>
            <div className="productTopRightItem"></div>

            <div className="productTopRightItem">
              <span className="productTopRightKey">in stock:</span>
              <span className="productTopRightValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
