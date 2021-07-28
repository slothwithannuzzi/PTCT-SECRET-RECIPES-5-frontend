import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

//Styled-components
const Text = styled.div``;

const Title = styled.h2`
  color: gray;
  font-size: 25px;
  display: flex;
  justify-content: center;
  @media (max-width: 625px) {
    font-size: 18px;
  }
`;

const TextConatiner = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4% 15%;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-size: 25px;
  text-decoration: none;
  align-items: center;
  line-height: 1.6;
  @media (max-width: 625px) {
    font-size: 18px;
    a {
      font-size: 15px;
    }
  }
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-size: 25px;
  text-decoration: none;
  @media (max-width: 625px) {
    font-size: 18px;
    a {
      font-size: 15px;
    }
  }
`;

const TextH3 = styled.h3`
  font-size: 35px;
  @media (max-width: 625px) {
    font-size: 18px;
  }
`;

const Icons = styled.div`
  display: flex;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evently;
  padding: 4%;
  // border: 1px solid black;
`;

function Footer() {
  return (
    <div>
      <Text>
        <Title href="/">Secret Recipes</Title>
        <TextConatiner>
          <Menu>
            <TextH3>MENU</TextH3>

            <a href="/">Home</a>
            <a href="/login">Log In</a>
            <a href="/register">Sign up</a>
            <a href="/recipe-list">Recipes</a>
            <a href="/add">Add Recipe</a>
          </Menu>
          <Connect>
            <TextH3>Contact</TextH3>
            <Icons className="icons">
              <Icon className="email">
                <MailOutlineIcon style={{ fontSize: 50 }} />
              </Icon>
              <Icon className="twitter" href="https://twitter.com/">
                <TwitterIcon style={{ fontSize: 50 }} to="www.google.com" />
              </Icon>
              <Icon className="insta" href="https://www.instagram.com/">
                <InstagramIcon style={{ fontSize: 50 }} />
              </Icon>
              <Icon className="facebook" href="https://www.facebook.com/">
                <FacebookIcon style={{ fontSize: 50 }} />
              </Icon>
            </Icons>
          </Connect>
        </TextConatiner>
      </Text>
    </div>
  );
}

export default Footer;
