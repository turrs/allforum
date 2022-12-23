import { _fetchWithAuth } from "../../../states/Login/action";

const apiThreads = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function getAllThreads() {
    const response = await fetch(`${BaseUrl}/threads`);
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== "success") {
      throw new Error(message);
    }
    const {
      data: { threads },
    } = responseJson;

    return threads;
  }
  async function createThread(threadData) {
    const { title, body, category } = threadData;
    const response = await _fetchWithAuth(`${BaseUrl}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    const responseJson = await response.json();
    const { status } = responseJson;
    if (status !== "success") {
      throw alert("please login first before take action");
    }
    const {
      data: { thread },
    } = responseJson;

    return thread;
  }
  return {
    getAllThreads,
    createThread,
  };
})();

const apiThreadDetail = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function getThreadDetail(id) {
    const response = await fetch(`${BaseUrl}/threads/${id}`);
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== "success") {
      throw new Error(message);
    }
    const {
      data: { detailThread },
    } = responseJson;

    return detailThread;
  }
  async function createComment(content, idThread) {
    const response = await _fetchWithAuth(
      `${BaseUrl}/threads/${idThread}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      }
    );

    const responseJson = await response.json();
    const { status } = responseJson;
    if (status !== "success") {
      throw alert("please login first before take action");
    }
    const {
      data: { comment },
    } = responseJson;

    return comment;
  }
  async function setUpComment(idThreads, idComments) {
    const response = await _fetchWithAuth(
      `${BaseUrl}/threads/${idThreads}/comments/${idComments}/up-vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseJson = await response.json();
    const { status } = responseJson;
    if (status !== "success") {
      throw new Error("please login first before take action");
    }

    const {
      data: { vote },
    } = responseJson;

    return vote;
  }

  async function setDownComment(idThreads, idComments) {
    const response = await _fetchWithAuth(
      `${BaseUrl}/threads/${idThreads}/comments/${idComments}/down-vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseJson = await response.json();
    const { status } = responseJson;
    if (status !== "success") {
      throw new Error("please login first before take action");
    }

    const {
      data: { vote },
    } = responseJson;

    return vote;
  }
  return {
    getThreadDetail,
    setDownComment,
    setUpComment,
    createComment,
  };
})();

const apiSetThread = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function setUpThread(id) {
    const response = await _fetchWithAuth(`${BaseUrl}/threads/${id}/up-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();

    const { status } = responseJson;
    if (status !== "success") {
      throw new Error("please login first before take action");
    }
    const {
      data: { vote },
    } = responseJson;

    return vote;
  }

  async function setDownThread(id) {
    const response = await _fetchWithAuth(
      `${BaseUrl}/threads/${id}/down-vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseJson = await response.json();
    const { status } = responseJson;
    if (status !== "success") {
      throw new Error("please login first before take action");
    }

    const {
      data: { vote },
    } = responseJson;

    return vote;
  }

  return {
    setUpThread,
    setDownThread,
  };
})();

export { apiThreads, apiThreadDetail, apiSetThread };
