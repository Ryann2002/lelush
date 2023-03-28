import Title from "./Title";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function HowWorks() {
  const segments = [
    {
      img: img1,
      title: "Preencha o formulário.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: img2,
      title: "Receba na sua casa.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      img: img3,
      title: "Ande bem vestida.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <Title>Como funciona</Title>
      <div className="mt-[20px] lg:mt-[50px]">
        {segments.map((el, index) => {
          const orientation = index + 1 === 2 ? "lg:flex-row-reverse" : "";
          return (
            <div className={"flex flex-col lg:flex-row " + orientation}>
              <div className="flex-1">
                <img src={el.img} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="mt-[30px] lg:mt-[60px] mx-[30px] flex flex-col gap-[10px] lg:gap-[15px] ">
                  <div className="bg-black w-[30px] h-[30px] flex justify-center items-center">
                    <p className="text-1xl lg:text-2xl text-white font-roboto">
                      {index + 1}
                    </p>
                  </div>
                  <p className="text-howWorksTitle font-playfair font-bold">
                    {el.title}
                  </p>
                  <p className="text-howWorkSub font-playfair mb-[35px]">
                    {el.desc}
                  </p>
                  <span className="rounded-full bg-black w-1/2 h-[1px]  hidden lg:bloc" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowWorks;
