import styled from "styled-components";
import { Mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../redux/registerRedux";
import { apicallRegister } from "../redux/apicall";
import { useNavigate } from "react-router-dom";

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
  flex-wrap: wrap;
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

  &:hover {
    background-color: lightgreen;
    color: inherit;
  }
`;
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.registration);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch(registerStart);

    try {
      await apicallRegister(
        dispatch,
        {
          firstName,
          lastName,
          username,
          email,
          password,
        },

        dispatch(registerSuccess()),

        navigate("/signin")
      );
    } catch (error) {}
  };
  return (
    <Container>
      <Wrapper>
        <Title> Create An Account</Title>

        <Form>
          <Input
            placeholder=" First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleRegister} disabled={isLoading}>
            {isLoading ? "Creating..." : "CREATE"}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
