import Image from "next/image";
import { Bad } from "./principles/SRP/bad";
import { Good } from "./principles/SRP/Good/good";
import { OCP } from "./principles/OCP/bad";

export default function Home() {
  return (
    <>
      {/* // <Bad></Bad> */}
      <Good></Good>
      <div className="container flex justify-center ">
        <OCP></OCP>
      </div>
    </>
  );
}
