import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    display: flex;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color: #92B4EC;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;
export const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'MENU', content: 'Tab menu ONE' },
    { name: 'COMMUNITY', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = index => {
    // TIP: parameter로 현재 선택한 "인덱스 값을 전달"해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 "갱신되도록 함수"를 완성하세요.
    console.log(index);
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 됩니다.*/}
          {/* <li className="submenu">{menuArr[0].name}</li>
              <li className="submenu">{menuArr[1].name}</li>
              <li className="submenu">{menuArr[2].name}</li>*/}
          {menuArr.map((el, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === currentTab ? 'submenu focused' : 'submenu'
                }`} /* 클래스네임 변화 삼항연산자*/
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            );
            /**Tab 메뉴를 클릭하면 "selectMenuHandler 함수가 실행"되고, 해당 Tab 메뉴의 "index 값이 인자로 전달"됩니다  */
          })}
        </TabMenu>
        <Desc>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
