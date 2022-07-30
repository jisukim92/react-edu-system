import { createContext, useEffect } from "react";
import reducer from "./reducer/reducer";
import { loadData } from "./reducer/action";
import { useMwReducer } from "../hooks";
import INITIAL_STATE from "./store";

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useMwReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    sessionStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    if (state.isLogin || state.userInfo) {
      dispatch(loadData());
    }
  }, [state.isLogin, state.userInfo]);

  return (
    <Context.Provider
      value={{
        data: state.data,
        userId: state.userId,
        isLoading: state.isLoading,
        isLogin: state.isLogin,
        error: state.error,
        userInfo: state.userInfo,
        dispatch: dispatch,
        dateTimes: state.dateTimes,
        previousDate: state.previousDate,
        obesityData: state.obesityData,
        obesityData1: state.obesityData1,
        obesityData2: state.obesityData2,
        obesityData3: state.obesityData3,
        obesityData4: state.obesityData4,
        bodyConditionData: state.bodyConditionData,
        bodyConditionData1: state.bodyConditionData1,
        bodyConditionData2: state.bodyConditionData2,
        bodyConditionData3: state.bodyConditionData3,
        bodyConditionData4: state.bodyConditionData4,
        bodyCompositionData: state.bodyCompositionData,
        bodyCompositionData1: state.bodyCompositionData1,
        bodyCompositionData2: state.bodyCompositionData2,
        bodyCompositionData3: state.bodyCompositionData3,
        bodyCompositionData4: state.bodyCompositionData4,
        dtestList: state.dtestList,
        completionPercent: state.completionPercent,
      }}
    >
      {children}
    </Context.Provider>
  );
};
