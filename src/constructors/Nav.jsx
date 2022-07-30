import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLogo, toggle } from "../assets";
import MenuList from "../elements/MenuList";
import NavToggle from "../elements/NavToggle";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useContext } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import oedot_06 from "../assets/oedot_06.svg";
import { navButtonX, navButtonHamburger } from "../assets";

import { LogOut } from "../context/reducer/action";

const Nav = props => {
  const { dispatch } = useContext(Context);
  const [imgUrl, setImgUrl] = useState("");
  const [select, setSelect] = useState(true); // 성적 현황메뉴 선택유무 판별
  const [buttonSelect, setButtonSelect] = useState(false); // 햄버거 선택유무
  const [navTransition, setNavTransition] = useState(false);
  const [d_Day, setD_Day] = useState(""); // 디데이값
  const [examDate, setExamDate] = useState(""); // 직렬별 시험 날짜를 여기에 저장
  const [lastAccessDate, setLastAcessDate] = useState(
    // 마지막 접속일
    window.localStorage.lastAccessDate
  );

  const path = useLocation().pathname; // url 뒷부분 주소
  const navigate = useNavigate();
  const testStatus = useRef(); //exam
  const navButton = useRef(); //햄버거 버튼
  const accessDate = moment(); //오늘 접속 날짜

  const policeExamDate = "2022.08.20"; // 경찰필기시험
  const fireExamDate = "2023.04.09"; // 소방필기시험
  const adminExamDate = "2023.06.17"; // 행정필기시험

  const d_DaySetting = () => {
    //직렬에 따라 디데이 값 세팅
    // if (props.depart == "police") {
      setD_Day(
        Math.floor(
          -1 * moment.duration(accessDate.diff(policeExamDate)).asDays()
        )
      );
    //   setExamDate(policeExamDate);
    // } else if (props.depart == "fire") {
    //   setD_Day(
    //     Math.floor(-1 * moment.duration(accessDate.diff(fireExamDate)).asDays())
    //   );
    //   setExamDate(fireExamDate);
    // } else if (props.depart == "admin") {
    //   setD_Day(
    //     Math.floor(
    //       -1 * moment.duration(accessDate.diff(adminExamDate)).asDays()
    //     )
    //   );
      setExamDate(policeExamDate);
    
  };

  // 사용자 사진 호출해서 받아옴.

  const getPhotourl = async () => {
    try {
      const reponse = await axios
        .get(`/profile/20220727/testuser`)
        .then(res => {
          setImgUrl(res.data.DATA.PICTURE);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  /* 사용자 사진, 디데이 세팅 */
  useEffect(() => {
    getPhotourl();
    d_DaySetting();
  }, []);
  useEffect(() => {
    setSelect(false);
    setButtonSelect(false);
    // 페이지 이동시 마다 마지막 접속일 갱신
    localStorage.setItem(
      "lastAccessDate",
      `${accessDate.format("YYYY.MM.DD")}`
    );
  }, [path]);

  return (
    <>
      <NavBackground state={buttonSelect} />
      <BackgroundMobileBar state={buttonSelect}>
        <LogoImgMobile
          state={select}
          className="logo"
          src={NavLogo}
          alt="NAVLOGO"
          path={path}
        />
      </BackgroundMobileBar>

      <Navbar depart={props.depart} state={buttonSelect} trans={navTransition}>
        <NavButton
          onClick={() => setButtonSelect(!buttonSelect)}
          state={buttonSelect}
        />
        <DdayBox>
          <div className="exam">최종시험 응시일</div>
          <div className="examDate">{examDate}</div>
          <div className="dDay">D-{d_Day}</div>
        </DdayBox>
        <GradeMenu onClick={() => setSelect(!select)} path={path}>
          <Title onClick={() => setSelect(!select)}>성적 현황</Title>
        </GradeMenu>
        <DropdownMenu state={select} path={path}>
          <MonthlyLi
            path={path}
          >
            <Title>월별 모의고사</Title>
          </MonthlyLi>
          <DailyLi
            path={path}
            onClick={() => {
              navigate("/report/daily");
            }}
          >
            <Title>진도별 테스트</Title>
          </DailyLi>
          <PhysicalLi
            path={path}
          >
            <Title>체력 테스트</Title>
          </PhysicalLi>
        </DropdownMenu>
        <HealthMenu
          path={path}
          onClick={() => {
            navigate("/health");
          }}
        >
          <Title>나의 건강</Title>
        </HealthMenu>
        <CalendarMenu
          path={path}
        >
          <Title>캘린더</Title>
        </CalendarMenu>
        <NoticeMenu
          path={path}
        >
          <Title>게시판</Title>
        </NoticeMenu>
        <MypageMenu
          path={path}
          onClick={() => {
            navigate("/mypage/main");
          }}
        >
          <Title>마이페이지</Title>
        </MypageMenu>
        <UserBox state={select} path={path}>
          <MyImg src={imgUrl} />
          <Name>김철수</Name>
          <LogOutIcon
            src={oedot_06}
            alt="oedot_06"
            onClick={e => {

                e.preventDefault();
                dispatch(LogOut());
                navigate("/");
            }}
          />
        </UserBox>
        <LastAcess state={select} path={path}>
          마지막 접속일 {lastAccessDate}
        </LastAcess>
        <Line state={select} path={path} />

        <LogoImg
          state={buttonSelect}
          className="logo"
          src={NavLogo}
          alt="NAVLOGO"
          path={path}
        />
      </Navbar>
    </>
  );
};

const NavBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 200;
  width: 98vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 890px) {
    display: ${props => {
      return props.state ? "block" : "none";
    }};
  }
`;

const BackgroundMobileBar = styled.div`
  display: none;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  @media screen and (max-width: 890px) {
    display: ${props => {
      return props.state ? "block" : "";
    }};
  }
`;

const LogoImgMobile = styled.img`
  width: 114px;
  height: 36px;
  display: none;

  @media screen and (max-width: 890px) {
    display: block;
    position: absolute;
    top: 12px;
    left: 21px;
  }
`;
/* 사이드바 */
const Navbar = styled.div`
  z-index: 999;
  position: fixed;
  width: 253px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #dadada;
  overflow: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 890px) {
    border: none;
    width: 100%;
    width: ${props => {
      return props.state ? "375px" : "";
    }};
    height: ${props => {
      return props.state ? "100vh" : "60px";
    }};
    right: 0;
    top: 0;
    overflow: hidden;

    .logo {
      width: 136px;
    }
  }

  @media screen and (max-width: 375px) {
    width: 375px;
    right: 0;
    height: ${props => {
      return props.state ? `100vh` : "60px";
    }};
    top: 0;
    overflow: hidden;

    .logo {
      width: 136px;
    }
  }
`;

/* 햄버거 버튼 */
const NavButton = styled.button`
  display: none;
  border: none;
  background-color: #ffffff;
  @media screen and (max-width: 890px) {
    display: block;
    position: absolute;
    top: 21px;
    right: 20px;
    width: 20px;
    height: 18px;
    background-image: url(${props => {
      return props.state ? navButtonX : navButtonHamburger;
    }});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

/* 성적 현황 */
const GradeMenu = styled.div`
  width: 210px;
  height: 60px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 62px;
  border-bottom: 1px solid #dadada;
  font-weight: ${props => {
    return props.path == "/report/monthly" ||
      props.path == "/report/daily" ||
      props.path == "/report/physical"
      ? "700"
      : "300";
  }};
  color: ${props => {
    return props.path == "/report/monthly" ||
      props.path == "/report/daily" ||
      props.path == "/report/physical"
      ? "#0E0AFF"
      : "#606060";
  }};
  cursor: pointer;
  line-height: 3.875rem;

  &:hover {
    background-color: #f1f3ff;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.29vh;
    top: 0;
    overflow: hidden;
    margin-top: 1.65vh;
    .logobox {
      position: absolute;
      width: ${window.innerWidth};
      height: 160px;
      top: 12px;
      .logo {
        width: 114px;
        height: 36px;
      }
    }
  }
`;
/* 나의 건강 */
const HealthMenu = styled.div`
  width: 210px;
  height: 60px;
  border-bottom: 1px solid #dadada;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  line-height: 62px;
  text-align: center;
  font-weight: ${props => {
    return props.path == "/health" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/health" ? "#0E0AFF" : "#606060";
  }};
  cursor: pointer;
  line-height: 3.875rem;

  &:hover {
    background-color: #f1f3ff;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.29vh;
  }
`;
/* 캘린더 */
const CalendarMenu = styled.div`
  width: 210px;
  border-bottom: 1px solid #dadada;
  margin: 0 auto;
  height: 60px;
  text-align: center;
  font-size: 20px;
  line-height: 62px;
  font-weight: ${props => {
    return props.path == "/mypage/schedule" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/mypage/schedule" ? "#0E0AFF" : "#606060";
  }};
  cursor: pointer;
  line-height: 3.875rem;

  &:hover {
    background-color: #f1f3ff;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.29vh;
  }
`;
/* 게시판 */
const NoticeMenu = styled.div`
  width: 210px;

  border-bottom: 1px solid #dadada;
  margin: 0 auto;
  height: 60px;
  text-align: center;
  font-size: 20px;
  line-height: 62px;
  font-weight: ${props => {
    return props.path == "/notice/main" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/notice/main" ? "#0E0AFF" : "#606060";
  }};
  cursor: pointer;
  line-height: 3.875rem;

  &:hover {
    background-color: #f1f3ff;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.29vh;
  }
`;
/* 마이페이지 */
const MypageMenu = styled.div`
  width: 210px;

  border-bottom: 1px solid #dadada;
  margin: 0 auto;
  height: 60px;
  text-align: center;
  font-size: 20px;
  line-height: 62px;
  text-align: center;
  font-weight: ${props => {
    return props.path == "/mypage/main" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/mypage/main" ? "#0E0AFF" : "#606060";
  }};

  cursor: pointer;
  line-height: 3.875rem;

  &:hover {
    background-color: #f1f3ff;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 8.29vh;
  }
`;
/* 월별 모의고사 */
const MonthlyLi = styled.li`
  height: 56px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 62px;
  font-weight: ${props => {
    return props.path == "/report/monthly" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/report/monthly" ? "#363636" : "#AAAAAA";
  }};
  cursor: pointer;
  &:hover {
    font-weight: 700;
    color: #363636;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 33.3%;
  }
`;
/* 진도별 테스트 */
const DailyLi = styled.li`
  height: 56px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 62px;
  font-weight: ${props => {
    return props.path == "/report/daily" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/report/daily" ? "#363636" : "#AAAAAA";
  }};
  cursor: pointer;
  &:hover {
    font-weight: 700;
    color: #363636;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 33.3%;
  }
`;
/* 체력 테스트 */
const PhysicalLi = styled.li`
  height: 56px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 62px;
  font-weight: ${props => {
    return props.path == "/report/physical" ? "700" : "300";
  }};
  color: ${props => {
    return props.path == "/report/physical" ? "#363636" : "#AAAAAA";
  }};
  cursor: pointer;
  &:hover {
    font-weight: 700;
    color: #363636;
  }
  @media screen and (max-width: 890px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 33.3%;
  }
`;
/* 성적 현황 하위메뉴의 부모 */
const DropdownMenu = styled.ul`
  width: 210px;
  margin: 0 auto;
  height: ${props => {
    return props.state ||
      props.path == "/report/monthly" ||
      props.path == "/report/daily" ||
      props.path == "/report/physical"
      ? `168px`
      : "0";
  }};
  visibility: ${props => {
    return props.state ||
      props.path == "/report/monthly" ||
      props.path == "/report/daily" ||
      props.path == "/report/physical"
      ? `visible`
      : "hidden";
  }};
  background-color: #f5f5f5;
  transition: all 0.5s ease-out;
  overflow: hidden;
  @media screen and (max-width: 890px) {
    width: 100%;
    height: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? `23.23vh`
        : "0";
    }};
  }
`;
/* 마지막 접속일 */
const LastAcess = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  bottom: 169px;
  text-align: center;
  width: 200px;
  height: 29px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;

  color: #606060;

  @media screen and (max-width: 890px) {
    visibility: hidden;
  }
  @media screen and (max-height: 800px) {
    position: static;
    transform: translate(0%);
    margin: 8px auto 0 auto;
  }

  @media screen and (max-height: 980px) {
    position: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "static"
        : "";
    }};
    transform: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "translate(0%)"
        : "";
    }};
    margin: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "8px auto 0 auto"
        : "";
    }};
  }
`;
/* 디데이 박스 */
const DdayBox = styled.div`
  position: relative;
  width: 204px;
  height: 169px;
  margin: 0 auto;
  margin-top: 1.5625rem;
  border-radius: 16px;
  background-color: #0e0aff;
  text-align: center;
  color: #ffffff;
  font-style: normal;
  line-height: 62px;
  .exam {
    position: absolute;
    width: 7.5rem;
    transform: translate(-50%);
    left: 50%;
    right: 50%;
    margin-top: 1rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }
  .examDate {
    position: absolute;
    width: 84px;
    transform: translate(-50%);
    left: 50%;
    right: 50%;
    margin-top: 2.875rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  }
  .dDay {
    position: absolute;
    width: 162px;
    height: 77px;
    transform: translate(-50%);
    left: 50%;
    right: 50%;
    bottom: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 160%;
  }
  @media screen and (max-width: 890px) {
    width: 90%;
    height: 160px;
    margin-top: 77px;
  
  }*
`;

const UserBox = styled.div`
  position: absolute;
  bottom: 206px;
  height: 50px;
  display: flex;
  @media screen and (max-width: 890px) {
    display: none;
  }
  @media screen and (max-height: 800px) {
    position: static;
    margin-top: 12px;
  }
  @media screen and (max-height: 980px) {
    margin-top: 21px;
    position: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "static"
        : "";
    }};
    margin-top: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "12px"
        : "";
    }};
  }
`;
const MyImg = styled.img`
  margin: auto 0 auto 24px;

  width: 50px;
  height: 50px;
  border-radius: 150%;
  @media screen and (max-width: 890px) {
    display: none;
  }
  @media screen and (max-height: 800px) {
    position: static;
  }
`;
const Name = styled.div`
  margin-left: 8px;
  width: 47px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 50px;
  color: #606060;
  @media screen and (max-width: 890px) {
    display: none;
  }
  @media screen and (max-height: 800px) {
    position: static;
  }
`;
const LogOutIcon = styled.img`
  margin: auto;
  margin-left: 79px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  width: 210px;
  border: 0.5px solid #dadada;
  bottom: 143px;
  @media screen and (max-width: 890px) {
    display: none;
  }
  @media screen and (max-height: 800px) {
    transform: translate(0%);
    position: static;
    margin: 25px auto 0 auto;
  }
  @media screen and (max-height: 980px) {
    transform: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "translate(0%)"
        : "";
    }};
    position: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "static"
        : "";
    }};
    margin: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "25px auto 0 auto"
        : "";
    }};
  }
`;

const LogoImg = styled.img`
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  position: absolute;
  width: 136px;
  bottom: 36px;
  @media screen and (max-height: 800px) {
    display: block;
    transform: translate(0%);
    position: static;
    margin: 35px auto 65px auto;
  }
  @media screen and (max-height: 980px) {
    display: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "block"
        : "";
    }};
    transform: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "translate(0%)"
        : "";
    }};
    position: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "static"
        : "";
    }};
    margin: ${props => {
      return props.state ||
        props.path == "/report/monthly" ||
        props.path == "/report/daily" ||
        props.path == "/report/physical"
        ? "35px auto 65px auto"
        : "";
    }};
  }
  @media screen and (max-width: 890px) {
    margin: 0;
    position: absolute;
    transform: translate(0%);
    display: ${props => {
      return props.state ? "none" : "";
    }};

    width: 114px;
    height: 36px;
    position: absolute;
    top: 12px;
    left: 10px;

    @media screen and (max-height: 800px) {
      margin-top: 0;
      position: absolute;
      top: 12px;
      left: 10px;
    }
  }

  @media screen and (max-width: 375px) {
    display: block;
    margin-top: 0;
    position: absolute;
    top: 12px;
    left: 10px;
  }
`;
const Title = styled.div`
  width: 100px;
  margin: 0 auto;
`;

export default Nav;
