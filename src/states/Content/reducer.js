import { TypeAction } from "./action";

function contentReducer(content = [], action = {}) {
  switch (action.type) {
    case TypeAction.SET_CONTENT:
      return action.payload.content;
    case TypeAction.SET_LATEST_CONTENT:
      return action.payload.content.reverse();
    case TypeAction.SET_LONGEST_CONTENT:
      return action.payload.content.reverse();
    default:
      return content;
  }
}

export { contentReducer };
