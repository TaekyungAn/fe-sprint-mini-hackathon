function StickyNote({ notice }) {
  console.log(notice);
  return (
    <div>
      <ul>
        <li>"id": 2,</li>
        <li>"createdAt": "2022.08.15",</li>
        <li>"userId": "사과",</li>
        <li>"title": "시원한 음료 메뉴",</li>
        <li>"text": "내용을 입력해주세요.",</li>
        <li>"isDone": false</li>
      </ul>
      {/* {notice.map((notice) => (
        <div className="notice-preview" key={notice.id}>
          <h2>{notice.title}</h2>
          <p>Written by {notice.userId}</p>
        </div>
      ))} */}
      <p>되고있는가</p>
    </div>
  );
}

export default StickyNote;
