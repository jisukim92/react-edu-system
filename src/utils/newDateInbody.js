// dateTimes형식을 그래프에 '년년.월월.일일' 로 바꿔주는 함수
// API에서 호출된 dateTimes값이 string에 일반적인 날짜형태가 아니라서 라이브러리 쓰기에 애매하다 판단함
const newDateInbody = date => {
  return `${date?.slice(2, 4)}.${date?.slice(4, 6)}.${date?.slice(6, 8)}`;
};





export default newDateInbody;