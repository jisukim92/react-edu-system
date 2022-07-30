import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Report from "../pages/Report";
import Mypage from "../pages/Mypage";
import { Notice } from "../pages/notice/Notice";
import Rating from "../pages/Rating";
import Error from "../pages/Error";
import Noresult from "../pages/NoResult";
import Footer from "./Footer";
import Dtest from "../pages/Dtest";
import Health from "../pages/Health";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="health" element={<Health />} />
        <Route path="noresult" element={<Noresult />} />
        <Route path="rating" element={<Rating />} />
        <Route path="report/*" element={<Report />} />
        <Route path="report/daily" element={<Dtest />} />
        <Route path="notice/*" element={<Notice />} />
        <Route path="mypage/*" element={<Mypage />} />
      </Routes>
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  width: auto;
  padding-left: 15.8rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  background-clip: content-box;
  overflow: scroll;
  position: relative;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 890px) {
    position: relative;
    padding-left: 0;
    padding-top: 60px;
  }
`;

export default ReportMain;
