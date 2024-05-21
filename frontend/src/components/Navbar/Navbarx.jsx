import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

const NavbarContainer = styled.nav`
  position: ${(props) =>
    props.extendNavbar || props.scrolled ? "fixed" : "relative"};
  z-index: 1000;
  width: ${(props) => (props.extendNavbar ? "80vw" : "100%")};
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  transition: top 0.5s ease-in;

  &.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background-color: inherit;
  }

  @media (min-width: 800px) {
    height: 80px;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  flex: 33.3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavbarLink = styled(Link)`
  color: black;
  font-size: 18px;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 799px) {
    display: none;
  }
`;

const CenterContainer = styled.div`
  flex: 30.7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterTitle = styled.h1`
  cursor: pointer;
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const NavbarLinkCenterTitle = styled(Link)`
  color: black;
  font-size: 18px;
  text-decoration: none;
`;

const RightContainer = styled.div`
  flex: 36%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 800px) {
    margin-right: 50px;
    gap: 20px;
  }
`;

const Searchcontainer = styled.form`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 799px) {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  padding: 5px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Buttonstyled = styled.button`
  border-radius: 15%;

  background: #bebcbc;
  cursor: pointer;
`;
const ButtonstyledMobile = styled.button`
  border-radius: 15%;

  background: #bebcbc;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const ShopingCartStyle = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const OpenLinksButton = styled.div`
  width: 70px;
  height: 50px;
  z-index: 1006;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  padding-top: 80px;
  z-index: 999;
  @media (min-width: 800px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: 18px;
  text-decoration: none;
  margin: 10px;
`;

const SearchcontainerExtended = styled.form`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Navbarx = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  const { searchTerm: urlKeyword } = useParams();
  const [searchTerm, setSearchTerm] = useState(urlKeyword || "");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`products?search=${searchTerm.trim()}`);
      setSearchTerm("");
    } else {
      navigate("/");
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar} scrolled={scrolled}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>

            {user ? (
              <>
                <NavbarLink>
                  {" "}
                  <span>{user.username}</span>{" "}
                </NavbarLink>
                <NavbarLink>
                  {" "}
                  <Buttonstyled onClick={handleLogout}>
                    Logout
                  </Buttonstyled>{" "}
                </NavbarLink>
              </>
            ) : (
              <>
                <NavbarLink to="/signin">Login</NavbarLink>
                <NavbarLink to="/signup">Register</NavbarLink>{" "}
              </>
            )}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <CenterContainer>
          <NavbarLinkCenterTitle to="/">
            <CenterTitle>E-commerce</CenterTitle>
          </NavbarLinkCenterTitle>
        </CenterContainer>
        <RightContainer>
          <Searchcontainer onSubmit={handleSearch}>
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              <Search style={{ color: "grey", fontSize: 18 }} />
            </Button>
          </Searchcontainer>
          <Link to="/cart">
            <ShopingCartStyle>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </ShopingCartStyle>
          </Link>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>

          {user ? (
            <>
              <span>{user.username}</span>
              <ButtonstyledMobile onClick={handleLogout}>
                Logout
              </ButtonstyledMobile>
            </>
          ) : (
            <>
              <NavbarLinkExtended to="/signin">Login</NavbarLinkExtended>
              <NavbarLinkExtended to="/signup">Register</NavbarLinkExtended>
            </>
          )}

          {/* {user ? (
            user.username
          ) : (
            <NavbarLinkExtended to="/signin">Login</NavbarLinkExtended>
          )}
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <NavbarLinkExtended to="/signup">Register</NavbarLinkExtended>
          )} */}
          <SearchcontainerExtended onSubmit={handleSearch}>
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              <Search style={{ color: "grey", fontSize: 18 }} />
            </Button>
          </SearchcontainerExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbarx;
