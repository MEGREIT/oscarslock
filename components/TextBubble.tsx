// components/TextBubble.js
import styled from "styled-components";

const Bubble = styled.div`
  position: relative;
  background-color: #a33331; /* Background color for the bubble */
  color: white;
  padding: 20px;
  border-radius: 15px;
  min-width: 290px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  margin: 20px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #a33331; /* Same color as the bubble */
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;

  &::before {
    content: "★ "; /* Unicode star symbol */
    color: white;
    margin-right: 5px;
  }
`;

const TextBubble = () => {
  return (
    <Bubble>
      <List>
        <ListItem>EXPRESS SERVICE</ListItem>
        <ListItem>AVAILABLE ON CALL</ListItem>
        <ListItem>FREE CONSULTATION</ListItem>
        <ListItem>PRICE MATCH GUARANTEE</ListItem>
        <ListItem>YEARS OF EXPERIENCE</ListItem>
        <ListItem>PROFESSIONAL & TRUSTED</ListItem>
      </List>
    </Bubble>
  );
};

export default TextBubble;
