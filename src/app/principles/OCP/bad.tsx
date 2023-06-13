import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function OCP() {
  return (
    <div className="flex space-x-10">
      <button className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black" role="forward">
            Go Home
        <div className="m-2">
            <HiOutlineArrowNarrowRight />
        </div>
      </button>

      <button className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black" role="back">
            Go Back
        <div className="m-2">
            <HiOutlineArrowNarrowLeft />
        </div>
      </button>
    </div>
  );
}
