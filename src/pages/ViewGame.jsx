import { Link } from "react-router-dom";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import useViewGame from "../hooks/useViewGame";
const ViewGame = () => {
  const { view } = useViewGame();

  return (
    <div className="min-h-screen flex items-center p-3">
      <Card className="w-full mx-auto max-w-[35rem]    shadow-lg shadow-red-900 rounded-none border-4 border-gray-900  filter-none">
        <CardHeader
          floated={false}
          style={{
            backgroundSize: "cover",
            height: "25rem",
            backgroundPosition: "center",
            backgroundImage: `url("${view.background_image}")`,
            backgroundRepeat: "no-repeat",
          }}
          color="blue-gray"
          className=" border-black rounded-none border-4"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography color="blue-gray" className="text-lg font-bold">
              {view.name}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center  font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {view.rating}
            </Typography>
          </div>
          <div className=" gap-1">
            <div
              className="text-left  overflow-scroll h-40 scroll-m-3 text-sm tracking-wide space-y-2 scrollbar-thin overflow-x-hidden"
              dangerouslySetInnerHTML={{ __html: view.description }}
            ></div>
            <div className="flex flex-col justify-between mt-3 ">
              <div className=" w-full flex  items-center my-auto gap-2 justify-start  flex-wrap">
                <h3 className="">Genres </h3>
                <div className="gap-2 w-4/5 flex">
                  {view.genres?.map((genre) => {
                    return (
                      <React.Fragment key={genre.id}>
                        <span className="p-2 text-sm text-red-900">
                          {genre.name}
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex items-center my-auto gap-2 justify-start  flex-wrap ">
                <h3 className="">Platforms</h3>
                <div className="gap-2 flex w-4/5 flex-wrap ">
                  {view.platforms?.map((platform) => {
                    return (
                      <React.Fragment key={platform.id}>
                        <span className="p-2 text-sm text-gray-800">
                          {platform?.platform?.name || platform?.name}
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-3 flex justify-center ">
          <Link
            className=" flex bg-red-600  text-white py-3 gap-2 w-full justify-center border-2 border-black hover:shadow-inner hover:shadow-[#5C0500]/90 shadow-red-900 rounded-none hover: shadow-inner"
            to={`${view.website}`}
          >
            Visit website <ArrowTopRightOnSquareIcon className="w-5" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewGame;
