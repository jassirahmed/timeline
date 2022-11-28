import ky from "ky";
const getTimelineData = async (httpClient: typeof ky) => {
  let response = await httpClient.get("data.json").json();
  return response;
};
export default getTimelineData;
