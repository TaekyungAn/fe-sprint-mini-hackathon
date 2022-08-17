import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./Loading";

export const HomeContainer = styled.div`
  height: 500px;
`;

function Menu() {
  return (
    <HomeContainer>
      <h1>메인 홈 화면</h1>
      <Link to="/memo">Memo</Link>
    </HomeContainer>
  );
}

export default Menu;
