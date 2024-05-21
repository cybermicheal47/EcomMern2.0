import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestaxios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ catName, filter, sort, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  // Fetch products based on category or search term
  useEffect(() => {
    const getProducts = async () => {
      try {
        let endpoint = "/products";
        if (searchTerm) {
          endpoint += `?search=${searchTerm}`;
        } else if (catName) {
          endpoint += `?category=${catName}`;
        }

        const results = await publicRequest.get(endpoint);
        setProducts(results.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [catName, searchTerm]);

  // Filter products based on additional filters (excluding search term)
  useEffect(() => {
    let filtered = products;

    if (filter) {
      filtered = filtered.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key]?.includes(value)
        )
      );
    }

    if (sort === "newest") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sort === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, filter, sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <SingleProduct item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
