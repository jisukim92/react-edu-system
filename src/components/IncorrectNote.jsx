import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import getClass from "../utils/getClass"; // 직렬
import getSubject from "../utils/getSubject"; // 과목
import styled from "styled-components";
import icon from "../assets/oedot-09.svg";
import nextIcon from "../assets/nextArrow.png";
import { selectIcon } from "../assets";
import { SubjectSelect } from "../elements";

const IncorrectNote = () => {
  /*
================================================================
Hooks
================================================================
*/
  const { userInfo } = useContext(Context);
  const quizRef = useRef([]);
  const [changeValue, setChangeValue] = useState(false)
  const [subExamNumList, setSubExamNumList] = useState([]);
  const [randomExamNumList, setRandomExamNumList] = useState([]);
  const [quizList, setQuizList] = useState([]);
  const [value, setValue] = useState(
    getSubject(getClass(userInfo["CLASS_TITLE"]))[0].title
  ); //선택 과목 상태관리
  const [call, setCall] = useState(false);
  const [order, setOrder] = useState(0); // ① getQuizList  ⇨  ②   ⇨  ③
  let i = order;
  const [count, setCount] = useState(0);
  const [subjectList, setSubjectList] = useState(
    getSubject(getClass(userInfo["CLASS_TITLE"])).map(i => i.title)
  );

  // SubjectSelect 관련 state
  const [selected, setSelected] = useState("");
  const [unitSelected, setUnitSelected] = useState("");

  /*
================================================================
userId 불러오기 
================================================================
*/
  // 실제 데이터
  // const id = JSON.parse(sessionStorage.getItem("userId"));

  // 테스트 데이터
  const id = "testuser";

  const url = `/dummydata/testNumList/testuser`;

  /*
================================================================
getQuizList 함수
기능 : 선택한 과목에 해당하는 응시번호 리스트 불러오기 
================================================================
*/
  const getQuizList = async () => {
    setQuizList([]);
    setCount(0);
    setRandomExamNumList([]);
    // let subjectName = value.substring(0, 2); //선택과목
    try {
      const res = await axios.get(url).then(res => {
        let filterList = [];
        res.data.DATA.map(i => {
          if (i.TEST_TITLE.includes(value)) {
            filterList.push(i.TEST_NUM);
          }
        });
        setSubExamNumList([...filterList]);
      });
    } catch (error) {
      console.log(error);
    }
    setCall(!call);
  };

  /*
================================================================
setQuizListRandom 함수
가능 : 불러온 응시번호 리스트를 랜덤하게 재배치
================================================================
*/
  const setQuizListRandom = () => {
    let array = [];
    let arrayLength = subExamNumList.length;
    for (let i = 0; i < arrayLength; i++) {
      let randomIndex = Math.floor(Math.random() * subExamNumList.length);
      let randomExm_Number = subExamNumList[randomIndex];
      array = [...array, randomExm_Number]
      setRandomExamNumList([...array]);
      setSubExamNumList([...subExamNumList.splice(randomIndex, 1)]);
    }
    setCall(!call);
  };

  /*
================================================================
setNextQuiz 함수
가능 : 다음 문제 세팅
================================================================
*/
  const setNextQuiz = async () => {
    console.log(randomExamNumList)
    clearOnCheckTheAnswerNext();
    if (count < quizList.length - 1) {
      setCount(prev => prev + 1);
    } else if (i == randomExamNumList.length) {
    } else {
      try {
        const res = await axios
          .get(
            `/dummydata/odab-note/test_num=${randomExamNumList[i]}`
          )
          .then(res => {
            console.log(res)
            if (res.data.DATA.length > 0) {
              if (quizList.length == 0) {
                setQuizList([...res.data.DATA]);
                i++;
                setOrder(i);
              } else {
                setQuizList(prev => [...prev, ...res.data.DATA]);
                i++;
                setOrder(i);
                setCount(prev => prev + 1);
              }
            } else {
              i++;
              setNextQuiz();
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  /*
================================================================
useEffect
의존성 배열 [value]
================================================================
*/
  useEffect(() => {
    getQuizList();
    console.log(randomExamNumList)
    setOrder(0);
  }, [value]);

 



  /*
================================================================
useEffect
의존성 배열 [call]
================================================================
*/
  useEffect(() => {
    if (subExamNumList.length > 0 && call) {
      setQuizListRandom();
    }
    if (randomExamNumList.length > 0 && !call) {
      setNextQuiz();
    }
  }, [call, subExamNumList]);

  /*
================================================================
onCheckTheAnswer 함수
기능 : 정답 확인
================================================================
*/
  const onCheckTheAnswer = e => {
    e.preventDefault();
    quizRef.current[quizList[count].TEST_ANSWER].style.color = "black";
    quizRef.current[quizList[count].TEST_ANSWER].style.fontWeight = "bold";
  };

  /*
================================================================
clearOnCheckTheAnswer 함수
기능 : 다음 문제 정답 확인 초기화
================================================================
*/
  const clearOnCheckTheAnswerNext = () => {
    if (quizList.length > 0) {
      quizRef.current[quizList[count].TEST_ANSWER].style.color = "#363636";
      quizRef.current[quizList[count].TEST_ANSWER].style.fontWeight =
        "normal";
    }
  };

  useEffect(() => {
    console.log(call)
  }, [call])

  /*
================================================================
clearOnCheckTheAnswerPrev 함수
기능 : 이전 문제 정답 확인 초기화
================================================================
*/
  const clearOnCheckTheAnswerPrev = () => {
    if (quizList.length > 0) {
      quizRef.current[quizList[count].TEST_ANSWER].style.color = "#363636";
      quizRef.current[quizList[count].TEST_ANSWER].style.fontWeight =
        "normal";
    }
    setCount(prev => prev - 1);
  };

  /* 선택한 값으로 틀린문제 불러오기위해 벨류값 세팅 */
  const handleSeleted = option => {
    setValue(option);
  };

  if (quizList.length > 0) {
    return (
      <Wrap>
        <Title>{`김철수님의 틀린 문제`}</Title>
        <Text>
          <SubjectText>과목</SubjectText>
        </Text>
        <Line />
        <SelectWrap>
          <SubjectSelect
            options={subjectList}
            defaultValue={subjectList[0]}
            selected={unitSelected}
            setSelected={setSelected}
            handleSeleted={handleSeleted} //이벤트
          />
          <ButtonArar>
            <PrevBtn count={count} onClick={() => clearOnCheckTheAnswerPrev()}>
              이전문제
            </PrevBtn>
            <NextBtn
              order={order}
              lastQuiz={randomExamNumList.length}
              onClick={() => setNextQuiz()}
            >
              다음문제 <NextSpan />
            </NextBtn>
          </ButtonArar>
        </SelectWrap>
        <Question>
          {`${
            quizList.length > count ? quizList[count].TEST_QUESTION : ""
          }`}
        </Question>

        <Quiz className="quiz" ref={elem => (quizRef.current[1] = elem)}>
          {" "}
          {`${
            quizList.length > count
              ? quizList[count].TEST_EXAMPLE.split("|")[0]
              : ""
          }`}{" "}
        </Quiz>
        <Quiz className="quiz" ref={elem => (quizRef.current[2] = elem)}>
          {" "}
          {`${
            quizList.length > count
              ? quizList[count].TEST_EXAMPLE.split("|")[1]
              : ""
          }`}{" "}
        </Quiz>
        <Quiz className="quiz" ref={elem => (quizRef.current[3] = elem)}>
          {" "}
          {`${
            quizList.length > count
              ? quizList[count].TEST_EXAMPLE.split("|")[2]
              : ""
          }`}{" "}
        </Quiz>
        <Quiz className="quiz" ref={elem => (quizRef.current[4] = elem)}>
          {" "}
          {`${
            quizList.length > count
              ? quizList[count].TEST_EXAMPLE.split("|")[3]
              : ""
          }`}{" "}
        </Quiz>
        <AnswerBtn onClick={onCheckTheAnswer}>정답확인</AnswerBtn>
        <LinkStyle>
          <LinkArea
            href="http://mydata.eduhash.net/test-result"
            target="_blank"
          >
            <LinkImg />
            <LinkText>오답 노트 바로가기</LinkText>
          </LinkArea>
        </LinkStyle>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        <Title>{`${userInfo.MEM_NAME}님의 틀린 문제`}</Title>
        <Text>
          <SubjectText>과목</SubjectText>
        </Text>
        <Line />
        <SelectWrap>
          <SubjectSelect
            options={subjectList}
            defaultValue={subjectList[0]}
            selected={unitSelected}
            setSelected={setSelected}
            handleSeleted={handleSeleted} //이벤트
          />
          <NextBtn>다음 문제</NextBtn>
        </SelectWrap>
        <p>틀린 문제가 없습니다.</p>
      </Wrap>
    );
  }
};

export default IncorrectNote;

const Wrap = styled.div`
  width: 100%;
  border-radius: 1rem;
  position: relative;
  padding: 20px;
  line-height: 2;
  background-color: white;
`;

const Test = styled.div`
  border: 1px solid black;
  width: 100px;
  text-align: center;
`;

const NextSpan = styled.span`
  display: inline-block;
  width: 24px;
  height: 12px;
  background-image: url(${nextIcon});
  background-position: center;
  background-repeat: no-repeat;
`;

const ButtonArar = styled.div`
  display: flex;
`;

const Select = styled.select`
  font-family: "Pretendard", "Noto Sans KR", "Roboto", "Arial", sans-serif;
  min-width: 140px;
  height: 43px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 16px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  padding-left: 17px;
  padding-right: 40px;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: calc(100% - 17px);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

const Title = styled.p`
  line-height: 160%;
  left: 20px;
  right: 24px;
  color: #363636;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 34px;
`;

const Quiz = styled.p`
  color: #363636;
  margin-left: 46px;
  font-size: 18px;
`;

const SelectWrap = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
`;

const SubjectText = styled.div`
  margin-right: 20px;
  border-bottom: 4px solid #0e0aff;
  width: 100px;
  text-align: center;
  color: #0e0aff;
  font-size: 18px;
  font-weight: bold;
`;

const PrevBtn = styled.button`
  border: none;
  color: #444444;
  background-color: white;
  display: ${props => {
    return props.count == 0 ? "none" : "block";
  }};
`;


const NextBtn = styled.button`
  border: none;
  font-weight: 700;
  background-color: white;
  display: ${props => {
    return props.order == props.lastQuiz ? "none" : "block";
  }};
`;

const AnswerBtn = styled.button`
  width: 138px;
  height: 48px;
  border: none;
  color: white;
  display: flex;
  margin-left: auto;
  background-color: #0e0aff;
  justify-content: center;
  line-height: 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const Question = styled.div`
  font-weight: 700;
  font-size: 1.0625rem;
  margin-left: 20px;
`;

const LinkStyle = styled.div`
  width: 100%;
  height: 56px;
  border: 2px solid #a160fb;
  border-radius: 16px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled.div`
  color: #a160fb;
  font-weight: bold;
`;

const LinkArea = styled.a`
  display: flex;
`;
const LinkImg = styled.div`
  background-image: url(${icon});
  width: 34px;
  height: 34px;
  background-position: center;
  background-repeat: no-repeat;
`;

// 1 해당 과목(EXAM_TITLE)의 응시번호를 불러와서 저장
// 2 저장된 응시번호에서 false인 문제들 저장.
// 3 저장한 문제를 보여 줌
// 4 다음 문제를 누르면 현재 문제가 틀린 문제중 마지막 문제면 호출
