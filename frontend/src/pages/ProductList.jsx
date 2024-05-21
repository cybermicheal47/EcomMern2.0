import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-right: 6px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const Option = styled.option`
  font-size: 14px;
`;

function ProductList() {
  const location = useLocation();
  const catName = location.pathname.split("/")[2];
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Title>{catName || searchTerm || "ALL Products"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>20</Option>
            <Option>30</Option>
            <Option>40</Option>
            <Option>50</Option>
            <Option>60</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        catName={catName}
        filter={filter}
        sort={sort}
        searchTerm={searchTerm}
      />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
