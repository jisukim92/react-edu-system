const policeSubject = [
  { title: "경찰학", teacher: "김만일", tag: "objec1" },
  { title: "형사법", teacher: "김만이", tag: "object2" },
  { title: "헌법", teacher: "김만삼", tag: "object3" }
];

const fireSubject = [
  { title: "소방학개론", teacher: "김만일", tag: "objec1" },
  { title: "소방관계법규", teacher: "김만이", tag: "object2" },
  { title: "소방행정법", teacher: "김만삼", tag: "object3" },
];

const adminSubject = [
  { title: "행정법", teacher: "김만일", tag: "objec1" },
  { title: "행정학", teacher: "김만이", tag: "object2" },
  { title: "국어", teacher: "김만삼", tag: "object3" },
  { title: "영어", teacher: "김만사", tag: "object4" },
  { title: "한국사", teacher: "김만오", tag: "object5" }
];

export const getSubject = studentClass => {
  if (studentClass === "police") return policeSubject;
  if (studentClass === "fire") return fireSubject;
  if (studentClass === "admin") return adminSubject;
};

export default getSubject;
