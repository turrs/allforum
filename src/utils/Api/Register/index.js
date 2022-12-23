const apiRegister = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function post(email, name, password) {
    const response = await fetch(`${BaseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
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
      data: { user },
    } = responseJson;
    return user;
  }
  return {
    post,
  };
})();

export { apiRegister };
