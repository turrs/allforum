const apiLeaderboards = (() => {
  const BaseUrl = "https://forum-api.dicoding.dev/v1";
  async function getLeaderboardsData() {
    const response = await fetch(`${BaseUrl}/leaderboards`);
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== "success") {
      throw new Error(message);
    }
    const {
      data: { leaderboards },
    } = responseJson;

    return leaderboards;
  }
  return {
    getLeaderboardsData,
  };
})();

export { apiLeaderboards };
