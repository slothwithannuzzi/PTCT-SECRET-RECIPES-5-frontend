import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Text>
        <Title href="/">Secret Recipes</Title>
        <TextConatiner>
          <Menu>
            <h3>MENU</h3>
            <a href="">Home</a>
            <a href="">Sign up</a>
            <a href="">Recipes</a>
          </Menu>
          <Connect>
            <h3>Contact</h3>
            <p>Follow Us</p>
          </Connect>
        </TextConatiner>
      </Text>
    </div>
  );
}

export default Footer;

//Styled-components
const Text = styled.div``;

const Title = styled.h2`
  color: gray;
  font-size: 25px;
  display: flex;
  justify-content: center;
`;

const TextConatiner = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4% 15%;
`;

const Menu = styled.a`
  display: flex;
  flex-direction: column;
  color: gray;
  font-size: 25px;
  text-decoration: none;
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-size: 25px;
  text-decoration: none;
`;
