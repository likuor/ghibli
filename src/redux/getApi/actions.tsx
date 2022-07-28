export const GET_API_DATA = 'GET_API_DATA';

export const getApiData = (userState: any) => {
  return {
    type: 'GET_API_DATA',
    payload: { userState },
  };
};
