const TypeAction = {
  SET_CONTENT: "SET_CONTENT",
  SET_LATEST_CONTENT: "SET_LATEST_CONTENT",
  SET_LONGEST_CONTENT: "SET_LONGEST_CONTENT",
};
function SwitchContentLatest(content) {
  return {
    type: TypeAction.SET_LATEST_CONTENT,
    payload: {
      content,
    },
  };
}
function SwitchContentLongest(content) {
  return {
    type: TypeAction.SET_LONGEST_CONTENT,
    payload: {
      content,
    },
  };
}
function setContent(content) {
  return {
    type: TypeAction.SET_CONTENT,
    payload: {
      content,
    },
  };
}

export { TypeAction, SwitchContentLatest, setContent, SwitchContentLongest };
