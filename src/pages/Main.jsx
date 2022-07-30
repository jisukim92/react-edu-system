import { useContext, useMemo } from "react";
import styled from "styled-components";
import { ReportMain, Nav } from "../constructors";
import { Context } from "../context/Context";

const Main = () => {
  const { userInfo } = useContext(Context);

  if (!userInfo) return;

  const category = userInfo.CLASS_TITLE;

  const sub = category.substring(0, 2);
  const depart = useMemo(() => {
    if (sub === "경찰") {
      return "police";
    } else if (sub === "소방") {
      return "fire";
    } else if (sub === "행정") {
      return "admin";
    }
  }, []);

  return (
    <Page>
      <Nav depart={depart} />
      <ReportMain />
    </Page>
  );
};

const Page = styled.div`
  width: ${window.innerWidth};
  max-width: 1220px;
  margin: 0 auto;
  
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Main;
