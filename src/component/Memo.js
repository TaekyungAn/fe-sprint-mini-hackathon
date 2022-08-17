import StickyNote from "./StickyNote";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState, Suspense } from "react";

export const NoteContainer = styled.div`
  height: 500px;
`;

function Memo({ notice }) {
  return (
    <NoteContainer>
      <Link to="/">◀홈으로 돌아가기</Link>
      <h1>공지사항</h1>
      <p>안녕하세요! 모츠커피입니다. 공지사항을 확인해 주세요^_^</p>
      <StickyNote notice={notice} />
    </NoteContainer>
  );
}

export default Memo;
