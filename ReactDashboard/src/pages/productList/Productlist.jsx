import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";

import pic from "../../img/pic.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../data";
import { Link } from "react-router-dom";
import { DeleteProducts, getProducts } from "../../redux/apicall";
import { useDispatch, useSelector } from "react-redux";
function Productlist() {
  const [productdata, setproductdata] = useState(productRows);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  const handledelete = (id) => {
    DeleteProducts(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "product",
      headerName: "Products",
      width: 200,

      renderCell: (params) => {
        return (
          <div className="productlistitem">
            <img className="productlistImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productlistedit">Edit</button>
            </Link>

            <ClearIcon
              className="productlistdelete"
              onClick={() => handledelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Productlist;
