import { useState } from 'react';
import styled from 'styled-components';
import { Tab } from './Tab';

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: orange;
`;
function Header() {
  return (
    <div>
      <img src='./bigmots_logo.png' alt='big_logo' />
      <Tab />
      <div>Header.js작동중</div>
    </div>
  );
}

export default Header;
