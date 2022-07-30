const reducer = (state, action) => {
  switch (action.type) {

    case "LOAD_DATA":
      return { ...state, data: action.payload };
    case "LOAD_DTEST_DATA":
      return { ...state, dtestList: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_LOGIN":
      return { ...state, isLogin: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_USERINFO":
      return { ...state, userInfo: action.payload };
    case "LOGOUT":
      return { ...state, isLogin: false, userInfo: null };

    // 인바디 관련
    case "SET_DATETIMES":
      return { ...state, dateTimes: action.payload };
    case "SET_PREVIOUSDATE":
      return { ...state, previousDate: action.payload };
    case "SET_OBESITYDATA":
      return { ...state, obesityData: action.payload };
    case "SET_OBESITYDATA1":
      return { ...state, obesityData1: action.payload };
    case "SET_OBESITYDATA2":
      return { ...state, obesityData2: action.payload };
    case "SET_OBESITYDATA3":
      return { ...state, obesityData3: action.payload };
    case "SET_OBESITYDATA4":
      return { ...state, obesityData4: action.payload };
    case "SET_BODYCONDITIONDATA":
      return { ...state, bodyConditionData: action.payload };
    case "SET_BODYCONDITIONDATA1":
      return { ...state, bodyConditionData1: action.payload };
    case "SET_BODYCONDITIONDATA2":
      return { ...state, bodyConditionData2: action.payload };
    case "SET_BODYCONDITIONDATA3":
      return { ...state, bodyConditionData3: action.payload };
    case "SET_BODYCONDITIONDATA4":
      return { ...state, bodyConditionData4: action.payload };
    case "SET_BODYCOMPOSITIONDATA":
      return { ...state, bodyCompositionData: action.payload };
    case "SET_BODYCOMPOSITIONDATA1":
      return { ...state, bodyCompositionData1: action.payload };
    case "SET_BODYCOMPOSITIONDATA2":
      return { ...state, bodyCompositionData2: action.payload };
    case "SET_BODYCOMPOSITIONDATA3":
      return { ...state, bodyCompositionData3: action.payload };
    case "SET_BODYCOMPOSITIONDATA4":
      return { ...state, bodyCompositionData4: action.payload };
    // 투두리스트 그래프 관련
    case "SET_TODOLIST_GRAPH":
        return { ...state, completionPercent: action.payload };
    default:
      return state;
  }
};

export default reducer;
