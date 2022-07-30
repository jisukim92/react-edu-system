import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import NavToggleList from "./NavToggleList";

const MenuList = ({ children, list, job, icon }) => {
  const url = useLocation();
  const el = useRef();
  const [toggleOn, setToggleOn] = useState(false);
  const toggle = () => {
    setToggleOn(!toggleOn);
  };
  const handleCloseToggle = (e) => {
    if (toggleOn && (!el.current || !el.current.contains(e.target))) {
      setToggleOn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseToggle);
    return () => {
      window.removeEventListener("click", handleCloseToggle);
    };
  }, [toggleOn]);
  let cn = "list";
  if (String(url.pathname).split("/")[1] === list) {
    cn = "list selected";
  } else {
    cn = "list";
  }
  return (
    <List>
      <div depart={job} icon={icon} className={cn} onClick={toggle} ref={el}>
        <div className="icon">
          {list === "mypage" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2286 19.6541C22.4604 18.1732 23.3172 16.4177 23.7264 14.536C24.1356 12.6543 24.0852 10.7018 23.5794 8.84364C23.0737 6.98551 22.1275 5.27643 20.8209 3.86096C19.5142 2.4455 17.8857 1.36529 16.0729 0.711731C14.2601 0.0581692 12.3164 -0.149525 10.4063 0.10622C8.49614 0.361964 6.67576 1.07362 5.09911 2.18099C3.52247 3.28836 2.23595 4.75887 1.34839 6.46811C0.460819 8.17735 -0.00168342 10.075 4.60413e-06 12.0007C0.000652359 14.8 0.98792 17.5096 2.78857 19.6541L2.77141 19.6687C2.83146 19.7407 2.90008 19.8024 2.96183 19.8735C3.03903 19.9618 3.12223 20.0449 3.20201 20.1307C3.44218 20.3912 3.68921 20.6415 3.94825 20.8763C4.02717 20.9483 4.10865 21.0151 4.18842 21.0837C4.46291 21.3202 4.74511 21.5448 5.0376 21.7539C5.07534 21.7796 5.10965 21.813 5.1474 21.8396V21.8293C7.15635 23.2419 9.55292 24 12.0094 24C14.466 24 16.8625 23.2419 18.8715 21.8293V21.8396C18.9092 21.813 18.9427 21.7796 18.9813 21.7539C19.2729 21.5439 19.556 21.3202 19.8305 21.0837C19.9102 21.0151 19.9917 20.9474 20.0706 20.8763C20.3297 20.6406 20.5767 20.3912 20.8169 20.1307C20.8966 20.0449 20.979 19.9618 21.057 19.8735C21.1179 19.8024 21.1874 19.7407 21.2475 19.6678L21.2286 19.6541ZM12.0086 5.14424C12.772 5.14424 13.5183 5.37044 14.153 5.79422C14.7878 6.218 15.2825 6.82034 15.5747 7.52507C15.8668 8.2298 15.9433 9.00526 15.7943 9.75339C15.6454 10.5015 15.2778 11.1887 14.7379 11.7281C14.1981 12.2675 13.5104 12.6348 12.7616 12.7836C12.0129 12.9324 11.2368 12.856 10.5315 12.5641C9.82616 12.2722 9.22332 11.7779 8.79919 11.1437C8.37506 10.5094 8.14868 9.76377 8.14868 9.00098C8.14868 7.97811 8.55535 6.99713 9.27922 6.27386C10.0031 5.55058 10.9849 5.14424 12.0086 5.14424ZM5.15254 19.6541C5.16742 18.5288 5.62512 17.4546 6.42662 16.6638C7.22811 15.8731 8.30896 15.4294 9.43532 15.4289H14.5818C15.7082 15.4294 16.7891 15.8731 17.5905 16.6638C18.392 17.4546 18.8497 18.5288 18.8646 19.6541C16.9834 21.348 14.5409 22.2853 12.0086 22.2853C9.47627 22.2853 7.03374 21.348 5.15254 19.6541Z"
                fill="white"
              />
            </svg>
          ) : list === "notice" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.24983 6.75C2.24983 4.95979 2.96098 3.2429 4.22685 1.97703C5.49272 0.711159 7.20961 0 8.99983 0C10.79 0 12.5069 0.711159 13.7728 1.97703C15.0387 3.2429 15.7498 4.95979 15.7498 6.75V9.606L17.1958 13.221C17.2414 13.3348 17.2584 13.458 17.2454 13.5799C17.2323 13.7018 17.1896 13.8187 17.1209 13.9202C17.0522 14.0217 16.9597 14.1049 16.8514 14.1624C16.7431 14.2199 16.6224 14.25 16.4998 14.25H1.49983C1.37723 14.25 1.25652 14.2199 1.14825 14.1624C1.03997 14.1049 0.947446 14.0217 0.878763 13.9202C0.81008 13.8187 0.767335 13.7018 0.754271 13.5799C0.741207 13.458 0.758222 13.3348 0.803826 13.221L2.24983 9.606V6.75ZM6.09282 15.75C6.25802 16.395 6.6336 16.9665 7.16012 17.374C7.68664 17.7815 8.33402 18.0018 8.99983 18C10.4038 18 11.5753 17.0475 11.9068 15.75H6.09282Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4 1.2H18C17.6818 1.2 17.3765 1.32643 17.1515 1.55147C16.9265 1.77651 16.8 2.08174 16.8 2.4V22.7904H21.6V2.4C21.6 2.08174 21.4736 1.77651 21.2486 1.55147C21.0235 1.32643 20.7183 1.2 20.4 1.2ZM13.2 8.4H10.8C10.4818 8.4 10.1765 8.52643 9.9515 8.75147C9.72645 8.97651 9.60002 9.28174 9.60002 9.6V22.7904H14.4V9.6C14.4 9.28174 14.2736 8.97651 14.0486 8.75147C13.8235 8.52643 13.5183 8.4 13.2 8.4ZM6.00002 15.6H3.60002C3.28176 15.6 2.97654 15.7264 2.7515 15.9515C2.52645 16.1765 2.40002 16.4817 2.40002 16.8V22.7904H7.20002V16.8C7.20002 16.4817 7.0736 16.1765 6.84855 15.9515C6.62351 15.7264 6.31828 15.6 6.00002 15.6Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <span>{children}</span>
      </div>
      <NavToggleList state={toggleOn} list={list} job={job} />
    </List>
  );
};

const List = styled.div`
  position: relative;
  .list {
    transition: all 0.5s ease-out;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    height: 3.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.875rem;
    cursor: pointer;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      margin-right: 0.625rem;
      @media screen and (max-width: 991px) {
        display: none;
      }
    }
    &:hover {
      color: #032164;

      background-color: #f1f3ff;
      div {
        svg {
          path {
            fill: #032164;
          }
        }
      }
    }

    &.selected {
      color: #032164;
      box-sizing: border-box;
      border-top: 4px solid #f7c00f;
      background-color: #f5f5f5;
      div {
        svg {
          path {
            fill: #032164;
          }
        }
      }
    }
    @media screen and (max-width: 991px) {
      //width: 6.25rem;
    }
  }
`;

export default MenuList;