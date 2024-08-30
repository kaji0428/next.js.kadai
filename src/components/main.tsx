import Image from "next/image";
import grassimg from "../../public/ガラスページ.png";
import html1img from "../../public/html1.png";
import html2img from "../../public/html2.png";

const Main = () => {
  return (
    <div className="w-4/5 mx-auto">
      <main className="p-8">
        <h2 className="text-2xl font-semibold text-left mb-8">Project</h2>
        <div className="flex flex-col items-center gap-8">
          <Image
            src={grassimg}
            alt="ガラスの写真"
            className="w-full h-auto object-cover"
          />
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image
                src={html1img}
                alt="HTML1の写真"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={html2img}
                alt="HTML2の写真"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
