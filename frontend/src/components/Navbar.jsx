import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Mobile } from "../responsive";

const Navbar = () => {
  const Container = styled.div`
    max-height: 60px;
    ${Mobile({ minHeight: "50px", width: "10px", margin: "auto" })}
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${Mobile({ padding: "10px 0px", justifyContent: "center" })}
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({ display: "none" })}
  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
    ${Mobile({ flex: 2, justifyContent: "center", gap: "0px" })}
  `;
  const Searchcontainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;
  `;

  const Input = styled.input`
    border: none;
    padding: 5px;
    ${Mobile({ width: "50px", padding: "1px" })}
  `;

  const Logo = styled.h1`
    font-weight: bold;
    ${Mobile({ fontSize: "20px", paddingLeft: "10px" })}
  `;

  const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    ${Mobile({ fontSize: "14px", marginLeft: "10px" })}
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>

          <Searchcontainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 18 }} />
          </Searchcontainer>
        </Left>
        <Center>
          <Logo> Ecommerce</Logo>
        </Center>
        <Right>
          <MenuItem> Login</MenuItem>
          <MenuItem> Register</MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
