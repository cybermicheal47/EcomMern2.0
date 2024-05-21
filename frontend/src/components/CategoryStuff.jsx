import styled from "styled-components";
import { Mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 100vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${Mobile({ height: "50vh" })}
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 16px;
  background-color: white;
  cursor: pointer;
  font-weight: 800;
  font-size: 16px;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

const CategoryStuff = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.catName}`}>
        <Image src={item.image} />
        <InfoContainer>
          <Title> {item.title}</Title>
          <Button>Shop Now</Button>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default CategoryStuff;
