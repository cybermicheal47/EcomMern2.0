import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 32px;
  background-color: teal;
  color: white;
  text-align: center;
  font-weight: 600px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Announcement = () => {
  return <Container>We have Great Deals</Container>;
};

export default Announcement;
