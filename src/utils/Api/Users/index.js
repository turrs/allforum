const apiUsers = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function getOwnUsers(token) {
    const response = await fetch(`${BaseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    getOwnUsers,
  };
})();

const apiAllUser = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function getAllUsers() {
    const response = await fetch(`${BaseUrl}/users`);

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { users },
    } = responseJson;

    return users;
  }
  return {
    getAllUsers,
  };
})();

export { apiUsers, apiAllUser };
