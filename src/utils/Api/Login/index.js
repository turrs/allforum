const apiLogin = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function post(email, password) {
    const response = await fetch(`${BaseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }
    const {
      data: { token },
    } = responseJson;

    return token;
  }
  return {
    post,
  };
})();

export { apiLogin };
