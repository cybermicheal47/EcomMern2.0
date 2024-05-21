import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutlineOutlined,
  PhoneEnabled,
  Room,
} from "@mui/icons-material";
import styled from "styled-components";
import payment from "../images/payment.png";
import { Mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  padding: 20px;

  ${Mobile({ flexDirection: "column", gap: "20px" })}
`;
const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ display: "none" })}
`;
const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  margin-right: 60px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Payment = styled.img`
  width: 50%;
  margin-top: -50px;

  ${Mobile({ marginTop: "-20px" })}
`;

const Logo = styled.h1`
  text-align: center;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 6px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>E-commerce</Logo>
        <Desc>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon color="90EE90">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="90EE90">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="90EE90">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>My Account</ListItem>

          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> New York City
        </ContactItem>
        <ContactItem>
          <PhoneEnabled style={{ marginRight: "10px" }} /> +44675758
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlined style={{ marginRight: "10px" }} />{" "}
          contact@E-commerce.com
        </ContactItem>
        <Payment src={payment} />
      </Right>
    </Container>
  );
}

export default Footer;
