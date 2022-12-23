import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  apiSetThread,
  apiThreadDetail,
  apiThreads,
} from "../../utils/Api/Threads";

const TypeAction = {
  SET_ALL_THREADS_DATA: "SET_ALL_THREADS_DATA",
  SET_THREAD_DETAIL: "SET_THREAD_DETAIL",
  SET_UP_THREAD: "SET_UP_THREAD",
  SET_DOWN_THREAD: "SET_DOWN_THREAD",
  SET_REMOVE_UP_THREAD: "SET_REMOVE_UP_THREAD",
  SET_REMOVE_DOWN_THREAD: "SET_REMOVE_DOWN_THREAD",
  SET_UP_COMMENTS: "SET_UP_COMMENTS",
  SET_DOWN_COMMENTS: "SET_DOWN_COMMENTS",
  SET_CREATE_THREAD: "SET_CREATE_THREAD",
  SET_CREATE_COMMENT: "SET_CREATE_COMMENT",
  SET_CONTENT: "SET_CONTENT",
  SET_LATEST_CONTENT: "SET_LATEST_CONTENT",
  SET_LONGEST_CONTENT: "SET_LONGEST_CONTENT",
};
function SwitchContentLatest(threadsData) {
  return {
    type: TypeAction.SET_LATEST_CONTENT,
    payload: {
      threadsData,
    },
  };
}
function SwitchContentLongest(threadsData) {
  return {
    type: TypeAction.SET_LONGEST_CONTENT,
    payload: {
      threadsData,
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
function setCreateComment(idThread, content) {
  return {
    type: TypeAction.SET_CREATE_COMMENT,
    payload: {
      idThread,
      content,
    },
  };
}

function asyncCreateComment(idThread, content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const response = await apiThreadDetail.createComment(idThread, content);
      dispatch(setCreateComment(idThread, response));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function setCreateThread(threadData, token) {
  return {
    type: TypeAction.SET_CREATE_THREAD,
    payload: {
      threadData,
      token,
    },
  };
}

function asyncCreateData(threadData, token) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await apiThreads.createThread(threadData, token);
      dispatch(setCreateThread(thread, token));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function setUpThread(id, userId) {
  return {
    type: TypeAction.SET_UP_THREAD,
    payload: { id, userId },
  };
}

function setUpComments(id, token) {
  return {
    type: TypeAction.SET_UP_COMMENTS,
    payload: {
      id,
      token,
    },
  };
}

function asyncUpComments(idThread, idComments, userId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await apiThreadDetail.setUpComment(idThread, idComments, userId);
      dispatch(setUpComments(idComments, userId));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function setDownComments(id, userId) {
  return {
    type: TypeAction.SET_DOWN_COMMENTS,
    payload: {
      id,
      userId,
    },
  };
}
function asyncDownComments(idThread, idComments, userId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await apiThreadDetail.setDownComment(idThread, idComments, userId);
      dispatch(setDownComments(idComments, userId));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}
function setRemoveDownThread(id, userId) {
  return {
    type: TypeAction.SET_REMOVE_DOWN_THREAD,
    payload: { id, userId },
  };
}
function setRemoveUpThread(id, userId) {
  return {
    type: TypeAction.SET_REMOVE_UP_THREAD,
    payload: { id, userId },
  };
}

function setDownThread(id, userId) {
  return {
    type: TypeAction.SET_DOWN_THREAD,
    payload: { id, userId },
  };
}

function setThreadsData(threadsData) {
  return {
    type: TypeAction.SET_ALL_THREADS_DATA,
    payload: {
      threadsData,
    },
  };
}

function asyncSetUpThread(id, token) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await apiSetThread.setUpThread(id, token);
      dispatch(setUpThread(id, token));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncSetDownThread(id, token) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await apiSetThread.setDownThread(id, token);
      dispatch(setDownThread(id, token));
    } catch (error) {
      alert(error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

async function getAllThreadsData() {
  try {
    const AllThread = await apiThreads.getAllThreads();
    return AllThread;
  } catch (err) {
    alert(err);
    return err;
  }
}
function setThreadDetail(threadDetail, userId) {
  return {
    type: TypeAction.SET_THREAD_DETAIL,
    payload: {
      threadDetail,
      userId,
    },
  };
}
async function getThreadsDetail(id) {
  try {
    const threadDetail = await apiThreadDetail.getThreadDetail(id);
    return threadDetail;
  } catch (err) {
    alert(err);
    return err;
  }
}

export {
  TypeAction,
  setThreadsData,
  getAllThreadsData,
  getThreadsDetail,
  setThreadDetail,
  setUpThread,
  asyncSetUpThread,
  setDownThread,
  asyncSetDownThread,
  setRemoveUpThread,
  setRemoveDownThread,
  setDownComments,
  setUpComments,
  asyncUpComments,
  asyncDownComments,
  setCreateThread,
  asyncCreateData,
  setCreateComment,
  asyncCreateComment,
  SwitchContentLatest,
  setContent,
  SwitchContentLongest,
};
