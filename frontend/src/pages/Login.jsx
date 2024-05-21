import styled from "styled-components";
import { Mobile } from "../responsive";
import { useState } from "react";
import { apicallLogin } from "../redux/apicall";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  ${Mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 30px 0px;
`;
const Form = styled.form`
  display: flex;

  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 16px 10px;
  padding: 10px;
`;

const Button = styled.button`
  border: 2px solid lightgreen;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 70px;
  width: 30%;
  ${Mobile({ padding: "10px 20px", width: "24%" })}

  &:hover {
    background-color: lightgreen;
    color: inherit;
  }

  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
const Linkt = styled.a`
  cursor: pointer;
  font-size: 14px;
`;

const Error = styled.span`
  color: red;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    apicallLogin(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title> Login To Your Account</Title>

        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />

          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong , try again</Error>}
        </Form>
        <LinkContainer>
          <StyledLink to="/signup">
            <Linkt>CREATE A NEW ACCOUNT</Linkt>
          </StyledLink>
          <Linkt>Forgot PASSWORD?</Linkt>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
