function getSession() {
  let sessionData = getSessionData();
  return sessionData.token;
}

export const getSessionToken = () => {
  let sessionData = getSessionData();
  return sessionData.token;
};

export const getSessionData = () => {
  let sessionData = sessionStorage.getItem("userData");
  let userData = sessionData !== null ? JSON.parse(sessionData) : "";
  return userData;
};
