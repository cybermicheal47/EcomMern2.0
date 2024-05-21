import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryStuff from "./CategoryStuff";
import { Mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({ padding: " 0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryStuff item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
