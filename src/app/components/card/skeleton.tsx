import { Skeleton } from "@mui/material";

const SkeletonArticle = () => {
  return (
    <article className="rounded-xl flex flex-col border-2 justify-between border-color-button w-[317px] h-[410px]">
      <div className="pl-5 pr-5 pt-5 rounded-2xl">
        <Skeleton
          variant="rectangular"
          width={273}
          height={182}
          animation="wave"
          className="w-[273px] h-[182px] rounded-xl border-2 border-black "
        />
      </div>
      <div className="flex flex-col justify-start px-5 py-5">
        <Skeleton variant="text" width={100} animation="wave" />
        <Skeleton variant="text" width={150} animation="wave" />
        <Skeleton variant="text" width={50} animation="wave" />
        <Skeleton variant="text" width={50} animation="wave" />
        <Skeleton variant="rectangular" width={100} height={20} animation="wave" />
      </div>
      <div className="w-full rounded-br-lg rounded-bl-lg bg-[#576702] flex justify-center items-center">
        <Skeleton
          variant="text"
          width={120}
          height={30}
          animation="wave"
        />
      </div>
    </article>
  );
};

export default SkeletonArticle;