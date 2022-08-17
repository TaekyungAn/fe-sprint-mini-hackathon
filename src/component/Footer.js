import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightgray;
  color: white;
`;
const Footer_Ul = styled.ul`
  float: left;
`;

function Footer() {
  return (
    <div>
      <FooterContainer>
        <ul>
          <li>회사소개</li>
          <li>인재채용</li>
          <li>인재채용</li>
          <li>제휴제안</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>청소년보호정책</li>
          <li>네이버 정책</li>
          <li>고객센터</li>
          <li>ⓒ NAVER Corp.</li>
        </ul>
      </FooterContainer>
    </div>
  );
}

export default Footer;
