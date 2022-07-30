import { set } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { typeOf } from "react-is";
import styled from "styled-components";
import moment from "moment";
import {
  setToDoListIcon,
  ToDoListHamburgerIcon,
  ToDoListSetIcon,
  ToDoListExerciseIcon,
  ToDoListIsDoneIcon,
  ToDoListCongraturationIcon,
  ToDoListHealthIcon,
  ToDoListPlusMobile,
  ToDoListHamburgerUnSetIcon,
  ToDoListCheck
} from "../assets";
import { useContext } from "react";
import { Context } from "../context/Context";
import { setToDoListGraph } from "../context/reducer/action";

// 클릭했을 때 편집되는 부분
// 리스트 추가 버튼 있어야함.
// - 설정 버튼으로 눌렀을 때 편집 화면으로 전환
// - 편집화면 실제로 편집을 할 수 있어야 함.
// - 리스트 추가버튼을 누르면 추가가 되어야함.
// 버튼을 클릭하면 요소가 추가되는 기능
// 웹페이지에 버튼을 클릭하면 클릭한 만큼 숫자가 증가하는 기능

// 클릭 했을 때 값이 변하고
// 변한 값을 가지고 있는게 삭제
// 체크박스 체크하면 해당 check부분 true로 변경
// 선택 삭제버튼 눌렀을 때 true인 부분 삭제
// 세트 저장누르면 select 원상복귀, check false로 변경
// input값 변경하게하기

/* 세트 저장 버튼 클릭시 select 변경, 모든 체크 해제, 로컬스토리지
[ ] 설정버튼 클릭시 조건부 렌더링
[ ] 초반 렌더링시 로컬스토리지로 이전 리스트 받아옴.
[ ] 운동시작 버튼 클릭시 타이머 동작
[ ] 운동완료 클릭시 타이머 값 전달
 */

const Todolist = () => {
  const { completionPercent, dispatch } = useContext(Context);
  const [inputFocus, setInputFocus] = useState(false)
  const [excution, setExcution] = useState(true);
  const [minute, setMinute] = useState(0);
  const [sec, setSec] = useState(0);
  const [msec, setMsec] = useState();
  const [timer, setTimer] = useState(false);
  const [select, setSelct] = useState(false); // 편집화면, 메인화면 구분
  const [perfect, setPerfect] = useState(false);
  const [perfectBanner, setPerfectBanner] = useState(false);
  const [inputGuideMessage, setInputGuideMessage] = useState(false);
  const [focusing, setFocusing] = useState(false);
  const [toDoList, setToDoList] = useState([
    {
      check: false, // 체크 유무
      title: "윗몸일으키기", // 세트의 운동 제목
      save: false,
      list: [
        // 리스트
        {
          check: false, // 체크 유무
          time: "", // 운동하는데 걸린 시간
          count: "30", // 운동 횟수
          isDone: false, // 운동 완료 유무
          inProgress: true, // 현재 진행중인 운동
          save: false
        },
        {
          check: false, // 체크 유무
          time: "", // 운동하는데 걸린 시간
          count: "30", // 운동 횟수
          isDone: false, // 운동 완료 유무
          inProgress: false, // 현재 진행중인 운동
          save: false
        }
      ]
    }
  ]);
  const checkList = [];

  /* 세트 추가 함수 */
  const addSet = () => {
    let array = toDoList;
    if (toDoList.length == 0) {
    array.push({
      check: false,
      title: "",
      save: false,
      list: [
        {
          check: false,
          time: "",
          count: "",
          isDone: false,
          inProgress: true,
          save: false
        }
      ]
    });
  }
  else {
    array.push({
      check: false,
      title: "",
      save: false,
      list: [
        {
          check: false,
          time: "",
          count: "",
          isDone: false,
          inProgress: false,
          save: false
        }
      ]
    });
  }
    setToDoList([...array]);
  };
  /* 리스트 추가 함수 */
  const addList = order => {
    let array = toDoList;
    array[order].list.push({
      check: false,
      time: "",
      count: "",
      isDone: false,
      inProgress: false,
      save: false
    });
    setToDoList([...array]);
  };
  /* 운동제목 편집하는 함수 */
  const inputTitle = (e, j) => {
    let array = toDoList;
    array[j].title = e.target.value;
    setToDoList([...array]);
  };

  /* 운동횟수의 총합을 리턴하는 함수 */
  const sumCount = j => {
    let array = toDoList;
    let sum = 0;
    array[j].list.forEach(i => {
      sum = sum + Number(i.count);
    });
    return sum;
  };

  /* 운동 횟수 편집하는 함수 */
  const inputCount = (e, j, o) => {
    let array = toDoList;
    array[j].list[o].count = e.target.value;
    setToDoList([...array]);
  };

  /* 체크하면 해당 세트의 check값과 하위 리스트 체크박스를 true로 변경 */
  const changeSetCheck = setNum => {
    let array = toDoList;
    array[setNum].check = !array[setNum].check;
    array[setNum].list.map(i => {
      i.check = array[setNum].check;
    });
    setToDoList([...array]);
  };

  /* 체크하면 해당 리스트의 check값을 true로 변경하고 모든 리스트 체크 유무에 따라 세트 체크박스 체크 유무 변경 */
  const changeListCheck = (setNum, listNum) => {
    let array = toDoList;
    let allCheckd = true;

    array[setNum].list[listNum].check = !toDoList[setNum].list[listNum].check;

    array.map(i => {
      i.list.map(j => {
        if (j.check == false) {
          allCheckd = false;
        }
      });
      allCheckd == true ? (i.check = true) : (i.check = false);
    });
    setToDoList([...array]);
  };

  /* 선택된 체크박스에 해당하는 항목을 삭제 */
  const removeCheckItems = () => {
    let array = toDoList;

    array = array.filter(array => array.check == false);

    array.map((i, j) => {
      i.list = i.list.filter(list => list.check == false);
    });
    setToDoList([...array]);
  };

  /* 세트저장 클릭시 input 비어있는지 체크 후에 select변경시켜서 원래 화면으로 되돌리고 모든 체크 해제하고 로컬스토리지에 저장 */
  const saveSetClearCheck = () => {
    let array = toDoList;
    let full = true;

    // input 비어있는지 검사
    array.forEach(i => {
      if (i.title == "") {
        full = false;
      }
      i.list.forEach((j, k) => {
        if (j.count.length == 0) {
          full = false;
        }
      });
    });
    // input 비어있으면 배너띄움
    if (full == false) {
      setInputGuideMessage(true);
    }

    // input 다 차있으면 저장
    if (full == true) {
      let array = toDoList;
      array.map(i => {
        i.check = false;
        i.save = true;
        i.list.map(j => {
          j.check = false;
          j.save = true;
        });
      });

      setSelct(false);
      setToDoList([...array]);
      localStorage.setItem("toDoList", JSON.stringify(toDoList));

      setInputFocus(false)
    }
  };

  /* 이전에 저장한 투두리스트를 로딩, 다음 날 되면 운동완료값 초기화 */
  useEffect(() => {
    if (localStorage.getItem("toDoList") != null) {
      setToDoList(JSON.parse(localStorage.getItem("toDoList")));
    }

    if (localStorage.getItem("lastAcessDate") != null) {
      let accessDate = moment();

      if (
        localStorage.getItem("lastAcessDate") != accessDate.format("YYYY.MM.DD")
      ) {
        let array = JSON.parse(localStorage.getItem("toDoList"));
        array.forEach(i => {
          array.forEach(j => {
            j.isDone = false;
          });
        });
        array[0].list[0].inProgress = true;
        setToDoList([...array]);
      }
    }
    if (localStorage.getItem("perfect") != null) {
      if (localStorage.getItem("perfect") == "true") {
        setPerfect(true);
      }
    }
  }, []);

  /* 스탑워치 실행시키기 위한 함수 */
  const startStopWatch = () => {
    if (perfect == false) {
      setTimer(true);
    }
    if (perfect == true) {
      setPerfectBanner(true);
    }
  };

  /* 스탑워치 종료, 시간전달, 운동완료했다는 체크표시, 진행중인 운동 다음 운동으로 변경, 일일 운동완료 리스트를 확인하기위해 수정된 toDoList값 로컬스토리지에 저장. 운동완료 퍼센트 기록*/
  const endStopWatch = () => {
    let isDoneCount = 0; // 완료한 운동 개수
    let exerciseCount = 0; // 전체 운동 개수
    let percent = 0; // 퍼센트

    if (timer == true) {
      setTimer(false); // 스탑워치 종료
      setMinute(0);
      setSec(0);
      setMsec(0);
      let array = toDoList;
      let first = 0;
      let second = 0;
      let completion = false;
      array.forEach((i, j) => {
        i.list.forEach((k, o) => {
          if (k.inProgress == true) {
            k.time = `${minute < 10 ? "0" + minute : minute}:${
              sec < 10 ? "0" + sec : sec
            }:${msec}`; //시간전달
            k.isDone = true; // 운동완료 체크표시
            k.inProgress = false; // 진행중 false

            first = j; // 다음꺼 진행중 true
            second = o + 1;

            if (i.list.length == o + 1) {
              first = j + 1;
              second = 0;

              if (array.length == j + 1) {
                completion = true;
              }
            }
          }
        });
      });

      if (completion == false) {
        array[first].list[second].inProgress = true; // 다음 리스트 운동 진행중으로 변경
      }
      if (completion == true) {
        setPerfect(true);
        localStorage.setItem("perfect", "true");
        setPerfectBanner(true)
      }
      localStorage.setItem("toDoList", JSON.stringify(array)); // 완료한 운동 리스트를 로컬스토리지에 저장

      array.forEach(i => {
        i.list.forEach(j => {
          exerciseCount = exerciseCount + 1; // 전체 운동 개수 계산
          if (j.isDone == true) {
            isDoneCount = isDoneCount + 1; // 완료 운동 개수 계산
          }
        });
      });

      percent = Math.floor((isDoneCount / exerciseCount) * 100);

      dispatch(setToDoListGraph(percent));
      localStorage.setItem("completionPercent", JSON.stringify(percent));

      setToDoList([...array]);
    }
  };

  /* 스탑워치 */
  useEffect(() => {
    let test = new Date();

    if (timer == true) {
      const stopWatch = setInterval(() => {
        let v = JSON.stringify(test.getTime());
        v = v.substring(10, 12);
        setMsec(v);
        if (v > 95 && excution) {
          setSec(sec + 1);
          setExcution(false);
        }
        if (v < 10) {
          setExcution(true);
        }
      }, 10);
      if (sec == 60) {
        setSec(0);
        setMinute(minute + 1);
      }
      return () => clearInterval(stopWatch);
    }
  }, [timer, msec, excution]);

  /* 운동입력하라는 배너가 뜨고 확인 버튼을 누르면 입력안된 인풋박스에 빨간 테두리 */
  const inputAlert = () => {
    setInputGuideMessage(false)
    setInputFocus(true)
  }

  const exerciseOrder = (order) => {
    if (order == 1) { return "첫번째 운동" }
    if (order == 2) { return "두번째 운동" }
    if (order == 3) { return "세번째 운동" }
    if (order == 4) { return "네번째 운동" }
    if (order == 5) { return "다섯번째 운동" }
    if (order == 6) { return "여섯번째 운동" }
    if (order == 7) { return "일곱번째 운동" }
    if (order == 8) { return "여덟번째 운동" }
    if (order == 9) { return "아홉번째 운동" }
    if (order == 10) { return "열번째 운동" }
    if (order == 11) { return "열한번째 운동" }
    if (order == 12) { return "열두번째 운동" }
    if (order == 13) { return "열세번째 운동" }
    if (order == 14) { return "열네번째 운동" }
    if (order == 15) { return "열다섯번째 운동" }
    if (order == 16) { return "열여섯번째 운동" }
    if (order == 17) { return "열일곱번째 운동" }
    if (order == 18) { return "열여덟번째 운동" }
    if (order == 19) { return "열아홉번째 운동" }
    if (order == 20) { return "열여덟번째 운동" }

  }

  return (
    <>
      <ToDoListBox>
        <H3>TO DO LIST</H3>
        <H4>오늘의 운동 목표</H4>
        <SetButton state={select} onClick={() => setSelct(!select)}></SetButton>
        <AddSetButton state={select} onClick={() => addSet()}>
          <PlusImg src={ToDoListExerciseIcon} />
          운동 종목 추가
        </AddSetButton>
        {toDoList.map((i, j) => {
          return (
            <ToDoCard key={j + "a"} state={select} array={toDoList} j={j}>
              <TitleBox state={select}>
                <TitleHamburger
                  src={
                    i.save ? ToDoListHamburgerIcon : ToDoListHamburgerUnSetIcon
                  }
                  state={select}
                />
                <TitleOrder state={select} array={toDoList} j={j}>
                  {exerciseOrder(j+1)}
                </TitleOrder>
                <Line state={select} array={toDoList} j={j}/>
                <CheckBox
                  type="checkbox"
                  id={`title${j}`}
                  checked={i.check}
                  onChange={() => changeSetCheck(j)}
                  state={select}
                />
                <TitleLabel
                  state={select}
                  checked={i.check}
                  for={`title${j}`}
                  url={ToDoListCheck}
                />
                <Title state={select} array={toDoList} j={j}>
                  {i.title}
                </Title>
                <InputTitle
                  type="text"
                  placeholder="예) 스쿼트"
                  array={toDoList}
                  j={j}
                  foucs={inputFocus}
                  value={i.title}
                  disabled={!select}
                  state={select}
                  onChange={e => inputTitle(e, j)}
                />
                <SumCount state={select} array={toDoList} j={j}>
                  {sumCount(j)}회
                </SumCount>
                <AddListButton state={select} onClick={() => addList(j)}>
                  <PlusSetImg src={ToDoListSetIcon} />
                  세트 추가
                </AddListButton>
                <AddListButtonMobile
                  state={select}
                  src={ToDoListPlusMobile}
                  onClick={() => addList(j)}
                />
              </TitleBox>
              {i.list.map((k, o) => {
                return (
                  <List
                    key={j + "a" + o + "b"}
                    state={select}
                    array={toDoList}
                    j={j}
                    o={o}
                  >
                    <CheckBox
                      type="checkbox"
                      id={`${j}list${o}`}
                      checked={k.check}
                      onChange={() => changeListCheck(j, o)}
                      state={select}
                    />
                    <ListLabel
                      state={select}
                      checked={k.check}
                      for={`${j}list${o}`}
                      url={ToDoListCheck}
                    />
                    <Set state={select} array={toDoList} j={j} o={o}>
                      {o + 1} 세트
                    </Set>
                    <Time state={select} array={toDoList} j={j} o={o}>
                      {k.time == "" ? "" : k.time}
                    </Time>
                    <Count state={select} array={toDoList} j={j} o={o}>
                      {k.count == "" ? "30회" : k.count + "회"}
                    </Count>
                    <InputCount
                      placeholder={"예) 20"}
                      value={k.count}
                      disabled={!select}
                      array={toDoList}
                      j={j}
                      o={o}
                      state={select}
                      focus={inputFocus}
                      onChange={e => inputCount(e, j, o)}
                    />
                    <InputCountText state={select} array={toDoList} j={j} o={o}>
                      회
                    </InputCountText>
                    <IsDoneBox
                      src={ToDoListIsDoneIcon}
                      state={select}
                      array={toDoList}
                      j={j}
                      o={o}
                    />
                  </List>
                );
              })}
            </ToDoCard>
          );
        })}
        <ButtonBox>
          <StartButton state={select} onClick={() => startStopWatch()}>
            {timer
              ? (minute < 10 ? "0" + minute : minute) +
                ":" +
                (sec < 10 ? "0" + sec : sec) +
                ":" +
                msec
              : "운동 시작"}
          </StartButton>
          <CompletionButton state={select} onClick={() => endStopWatch()}>
            운동 완료
          </CompletionButton>
          <RemoveButton state={select} onClick={() => removeCheckItems()}>
            선택 삭제
          </RemoveButton>
          <SaveButton state={select} onClick={() => saveSetClearCheck()}>
            세트 저장
          </SaveButton>
        </ButtonBox>
      </ToDoListBox>
      <BannerBackground state1={perfectBanner} state2={inputGuideMessage} />

      <InputGuideBannerContainer state={inputGuideMessage}>
        <TopBox>
          <HealthIcon src={ToDoListHealthIcon} />
          <InputAlertMessage>
            모든 항목을
            <br />
            입력해주세요!
          </InputAlertMessage>
        </TopBox>
        <BottomBox>
          <ConfirmMessage onClick={() => inputAlert()}>
            확인
          </ConfirmMessage>
        </BottomBox>
      </InputGuideBannerContainer>

      <CompleteBannerContainer state={perfectBanner}>
        <TopBox>
          <CongraturationIcon src={ToDoListCongraturationIcon} />
          <CongraturationMessage>
            오늘의 운동이 완료되었습니다!
          </CongraturationMessage>
        </TopBox>
        <BottomBox>
          <ConfirmMessage onClick={() => setPerfectBanner(false)}>
            확인
          </ConfirmMessage>
        </BottomBox>
      </CompleteBannerContainer>
    </>
  );
};

export default Todolist;

const ToDoListBox = styled.div`
  position: relative;
  width: 100%;
`;
const H3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28.8px;
`;
const H4 = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
  margin-bottom: 34px;
`;
const SetButton = styled.button`
  visibility: ${props => {
    return props.state ? "hidden" : "visible";
  }};
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  border: none;
  background-color: #ffffff;
  background-image: url(${setToDoListIcon});
`;

const PlusImg = styled.img`
  position: absolute;
  width: 15.85px;
  height: 15.85px;
  top: 5px;
  right: 117px;
`;

const SumCount = styled.span`
  position: absolute;
  right: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  color: #363636;

  display: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "none" : "";
  }};
  display: ${props => {
    return props.array[props.j].list[0].isDone == true ? "none" : "";
  }};
  display: ${props => {
    return props.array[props.j].list[props.array[props.j].list.length - 1]
      .isDone == true
      ? "inline"
      : "";
  }};
  display: ${props => {
    return props.state ? "none" : "";
  }};
`;

const AddSetButton = styled.button`
  width: 127px;
  height: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
  display: ${props => {
    return props.state ? "inline" : "none";
  }};
  position: absolute;
  width: 127px;
  height: 26px;
  top: 11px;
  right: 0;
  background-color: #ffffff;
  border: none;
`;

const ToDoCard = styled.div`
  padding: 20px 24px 10px 24px;

  background-color: #f5f5f5;
  border-radius: 16px;
  margin-bottom: 10px;
  margin-left: ${props => {
    return props.state ? "30px" : "";
  }};

  padding-bottom: ${props => {
    return props.state ? "10px" : "";
  }};

  height: ${props => {
    return props.array[props.j].list[0].isDone == false &&
      props.array[props.j].list[props.array[props.j].list.length - 1].isDone ==
        false
      ? "70px"
      : "";
  }};

  height: ${props => {
    return props.array[props.j].list[0].isDone == true &&
      props.array[props.j].list[props.array[props.j].list.length - 1].isDone ==
        true
      ? "70px"
      : "";
  }};
  height: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "auto" : "";
  }};

  height: ${props => {
    return props.state ? "auto" : "";
  }};
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TitleHamburger = styled.img`
  width: 20px;
  height: 20px;

  display: ${props => {
    return props.state ? "inline" : "none";
  }};

  position: ${props => {
    return props.state ? "absolute" : "";
  }};

  left: ${props => {
    return props.state ? "0px" : "";
  }};
`;

const TitleOrder = styled.span`
  height: 29px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  color: #606060;

  display: ${props => {
    return props.state ? "none" : "inline";
  }};

  color: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "#0E0AFF" : "";
  }};
  color: ${props => {
    return props.array[props.j].list[0].isDone == true ? "#0E0AFF" : "";
  }};
  color: ${props => {
    return props.array[props.j].list[props.array[props.j].list.length - 1]
      .isDone == true
      ? "#606060"
      : "";
  }};

  font-weight: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "700" : "";
  }};
  font-weight: ${props => {
    return props.array[props.j].list[0].isDone == true ? "700" : "";
  }};
  font-weight: ${props => {
    return props.array[props.j].list[props.array[props.j].list.length - 1]
      .isDone == true
      ? "500"
      : "";
  }};
`;

const Line = styled.div`
  display: inline-block;
  width: 2px;
  height: 16px;
  border: 1px solid #606060;
  box-sizing: border-box;
  margin-left: 14px;

  border-color: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "#0E0AFF" : "";
  }};
  border-color: ${props => {
    return props.array[props.j].list[0].isDone == true ? "#0E0AFF" : "";
  }};
  border-color: ${props => {
    return props.array[props.j].list[props.array[props.j].list.length - 1]
      .isDone == true
      ? "#606060"
      : "";
  }};

  display: ${props => {
    return props.state ? "none" : "inline";
  }};
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  color: #363636;
  display: ${props => {
    return props.state ? "none" : "inline";
  }};
  margin-left: 14px;
`;

const InputTitle = styled.input`
  weight: 212px;
  height: 42px;
  padding-left: 10px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 8px;
  color: #aaaaaa;
  background-color: #dadada;
  border: none;

  &:focus {
    outline: none;
  }
  display: ${props => {
    return props.state ? "inline" : "none";
  }};

  border: ${(props) => {
    return props.array[props.j].title == "" && props.foucs == true ? "1px solid red" : ""
  }};

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus::-moz-placeholder {
    color: transparent;
  }
  &:focus:-ms-input-placeholder {
    color: transparent;
  }
  &:focus::-ms-input-placeholder {
    color: transparent;
  }

  @media screen and (max-width: 890px) {
    width: 139px;
    height: 38px;
    font-size: 16px;
    margin-top: 3px;
  }
`;

const PlusSetImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 10px;
  top: 7px;
`;

const AddListButton = styled.button`
  box-sizing: border-box;
  width: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  padding-left: 30px;

  font-weight: 500;
  font-size: 14px;
  line-height: 22.4px;
  color: #0e0aff;
  position: absolute;
  right: 23px;

  border: 1px solid #0e0aff;
  border-radius: 30px;

  background-color: #f5f5f5;
  visibility: ${props => {
    return props.state ? "visible" : "hidden";
  }};

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const AddListButtonMobile = styled.img`
  position: absolute;
  right: 24px;
  display: none;
  @media screen and (max-width: 890px) {
    display: ${props => {
      return props.state ? "inline" : "none";
    }};
  }
`;

const List = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding: 15px 22px 16px 24px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  align-items: center;

  display: ${props => {
    return props.array[props.j].list[0].isDone == false &&
      props.array[props.j].list[props.array[props.j].list.length - 1].isDone ==
        false
      ? "none"
      : "";
  }};

  display: ${props => {
    return props.array[props.j].list[0].isDone == true &&
      props.array[props.j].list[props.array[props.j].list.length - 1].isDone ==
        true
      ? "none"
      : "";
  }};

  display: ${props => {
    return props.array[props.j].list[0].inProgress == true ? "block" : "";
  }};

  display: ${props => {
    return props.state ? "block" : "";
  }};

  background-color: ${props => {
    return props.array[props.j].list[props.o].inProgress == true
      ? "#00F2D5"
      : "#FFFFFF";
  }};
  background-color: ${props => {
    return props.state ? "#f5f5f5" : "";
  }};

  border-radius: ${props => {
    return props.state ? "0" : "";
  }};

  margin-left: ${props => {
    return props.state ? "20px" : "";
  }};

  margin-right: ${props => {
    return props.state ? "11px" : "";
  }};

  padding-left: ${props => {
    return props.state ? "0" : "";
  }};
  padding-right: ${props => {
    return props.state ? "0" : "";
  }};

  margin-bottom: ${props => {
    return props.state ? "21px" : "";
  }};

  padding-bottom: ${props => {
    return props.state ? "0" : "";
  }};

  height: ${props => {
    return props.state ? "45px" : "";
  }};
`;

const HambugerIcon = styled.img`
  display: ${props => {
    return props.state ? "inline" : "none";
  }};
  width: 20px;
  height: 20px;
  margin-bottom: 0px;

  position: ${props => {
    return props.state ? "absolute" : "";
  }};

  left: ${props => {
    return props.state ? "-27px" : "";
  }};

  top: ${props => {
    return props.state ? "17px" : "";
  }};
`;

const TitleLabel = styled.label`
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  background-color: #f5f5f5;
  margin-right: 9px;

  display: ${props => {
    return props.state ? "inline" : "none";
  }};
  border: 1.5px solid #aaaaaa;
  border-radius: 1.5px;

  border-color: ${(props) => {
    return props.checked == true ? "#0E0AFF" : ""
  }};
  background: url(${(props) => {
    return props.checked == true ? props.url : ""
  }});
  background-position: center;
  background-repeat: no-repeat;
`;
const ListLabel = styled.label`
  position: absolute;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  background-color: #f5f5f5;
  margin-right: 9px;
  top: 17px;
  display: ${props => {
    return props.state ? "inline" : "none";
  }};
  border: 1.5px solid #aaaaaa;
  border-radius: 1.5px;

  border-color: ${(props) => {
    return props.checked == true ? "#0E0AFF" : ""
  }};
  background: url(${(props) => {
    return props.checked == true ? props.url : ""
  }});
  background-position: center;
  background-repeat: no-repeat;
`;

const CheckBox = styled.input`
  display: none;
`;

const Set = styled.span`
  position: absolute;
  top: 20px;
  left: 25px;
  font-weight: 500;
  font-size: 18px;
  line-heght: 28.8px;
  color: #363636;

  font-weight: ${props => {
    return props.array[props.j].list[props.o].inProgress == true ? "700" : "";
  }};

  font-weight: ${props => {
    return props.state ? " 500" : "";
  }};

  color: ${props => {
    return props.array[props.j].list[props.o].isDone == true &&
      props.state == false
      ? "#AAAAAA"
      : "";
  }};

  top: ${props => {
    return props.state ? " 18px" : "";
  }};
  @media screen and (max-width: 890px) {
    top: ${props => {
      return props.state ? " 14px" : "";
    }};
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const Count = styled.span`
  position: absolute;
  font-size: 18px;
  top: 20px;
  right: 61px;
  display: ${props => {
    return props.state ? "none" : "inline";
  }};
  font-weight: ${props => {
    return props.array[props.j].list[props.o].inProgress == true ? "700" : "";
  }};

  color: ${props => {
    return props.array[props.j].list[props.o].isDone == true ? "#AAAAAA" : "";
  }};

  top: ${props => {
    return props.state ? " 18px" : "";
  }};

  @media screen and (max-width: 890px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const Time = styled.div`
  position: absolute;
  top: 22px;
  right: 110px;
  font-size: 14px;
  display: ${props => {
    return props.state ? "none" : "inline";
  }};
  font-weight: ${props => {
    return props.array[props.j].list[props.o].inProgress == true ? "700" : "";
  }};

  color: ${props => {
    return props.array[props.j].list[props.o].isDone == true ? "#AAAAAA" : "";
  }};
  @media screen and (max-width: 890px) {
    top: 19px;
    right: 101px;
    font-size: 14px;
    line-height: 25.6px;
  }
`;

const InputCount = styled.input`
  box-sizing: border-box;
  padding-right: 12px;
  width: 73px;
  height: 42px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  position: absolute;
  text-align: right;
  right: 35px;
  border-radius: 8px;
  background-color: #dadada;

  &:focus {
    outline: none;
  }
  display: ${props => {
    return props.state ? "inline" : "none";
  }};

  color: #aaaaaa;

  top: ${props => {
    return props.state ? " 8px" : "";
  }};

  border: ${(props) => {
    return props.array[props.j].list[props.o].count == "" && props.focus == true ? "1px solid red" : ""
  }};

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus::-moz-placeholder {
    color: transparent;
  }
  &:focus:-ms-input-placeholder {
    color: transparent;
  }
  &:focus::-ms-input-placeholder {
    color: transparent;
  }

  @media screen and (max-width: 890px) {
    width: 56px;
    height: 38px;
    top: 6px;
    right: 19px;
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const InputCountText = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #363636;
  position: absolute;
  right: 15px;

  display: ${props => {
    return props.state ? "inline" : "none";
  }};

  top: ${props => {
    return props.state ? " 20px" : "";
  }};

  @media screen and (max-width: 890px) {
    right: 0px;
    top: ${props => {
      return props.state ? " 14px" : "";
    }};
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const IsDoneBox = styled.img`
  position: absolute;
  right: 22px;
  width: 20px;
  height: 20px;
  margin-bottom: 0px;
  display: ${props => {
    return props.array[props.j].list[props.o].isDone == true && !props.state
      ? "inline"
      : "none";
  }};
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
`;

const StartButton = styled.button`
  width: 100%;
  margin-top: 14px;
  margin-right: 20px;
  height: 56px;
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #a160fb;
  border-radius: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #a160fb;
  line-height: 28.8px;
  display: ${props => {
    return props.state ? "none" : "block";
  }};
`;
const CompletionButton = styled.button`
  width: 100%;
  margin-top: 14px;
  height: 56px;
  box-sizing: border-box;
  background: #0e0aff;
  border-radius: 16px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  line-height: 28.8px;
  display: ${props => {
    return props.state ? "none" : "block";
  }};
`;
const RemoveButton = styled.button`
  width: 100%;
  margin-top: 14px;
  margin-right: 20px;
  height: 56px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #606060;
  border-radius: 16px;
  font-weight: 700;
  font-size: 18px;
  color: #606060;
  line-height: 28.8px;
  display: ${props => {
    return props.state ? "block" : "none";
  }};
`;
const SaveButton = styled.button`
  width: 100%;
  margin-top: 14px;
  height: 56px;
  box-sizing: border-box;
  background: #0e0aff;
  border-radius: 16px;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  line-height: 28.8px;
  display: ${props => {
    return props.state ? "block" : "none";
  }};
`;

const BannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => {
    return props.state1 || props.state2 ? "block" : "none";
  }};
`;

const InputGuideBannerContainer = styled.div`
  display: ${props => {
    return props.state ? "block" : "none";
  }};
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  right: 50%;
  bottom: 50%;
  top: 50%;
  z-index: 3;
  width: 260px;
  height: 248px;
  margin: auto 0;
  border-radius: 16px;
`;

const HealthIcon = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 18px;
`;

const InputAlertMessage = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  width: 134px;
  text-align: center;
  height: 58px;
  margin: 0 auto;
`;

const CompleteBannerContainer = styled.div`
  display: ${props => {
    return props.state ? "block" : "none";
  }};
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  right: 50%;
  bottom: 50%;
  top: 50%;
  z-index: 3;
  width: 260px;
  height: 248px;
  margin: auto 0;
  border-radius: 16px;
`;

const TopBox = styled.div`
  position: relative;
  height: 190px;
  padding-top: 29px;
  padding-bottom: 19px;
  background-color: #ffffff;
  border-radius: 16px 16px 0 0;
`;

const CongraturationIcon = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 18px;
`;

const CongraturationMessage = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  width: 114px;
  text-align: center;
  height: 58px;
  margin: 0 auto;
`;

const BottomBox = styled.div`
  padding-top: 19px;
  background-color: #0e0aff;
  border-radius: 0 0 16px 16px;
  height: 58px;
`;

const ConfirmMessage = styled.div`
  width: 35px;
  height: 29px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
`;
