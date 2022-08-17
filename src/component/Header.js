import styled from "styled-components";
import { Tab } from "./Tab";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: orange;
`;
function Header() {
  return (
    <ModalContainer>
      <img
        src="https://i.pinimg.com/564x/52/bf/f0/52bff02f55b23a28e182d5b9d3235639.jpg"
        alt="big_logo"
      />
      <div>Header.js작동중</div>
    </ModalContainer>
  );
}

export default Header;
