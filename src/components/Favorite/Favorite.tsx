import { useSelector, useDispatch } from 'react-redux';

const Favorite = () => {
  const favoriteData = useSelector((state: any) => state.favoriteReducer);
  // const dispatch = useDispatch();
  // console.log(favoriteData);

  return (
    <>
      <div>sss</div>

      {/* {favoriteData}
      {favoriteData.map((film: any) => {
        return <div>{film}</div>;
      })} */}
      {/* <div>{favoriteData[0]}</div> */}
    </>
  );
};

export default Favorite;
