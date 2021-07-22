import Button from "../../atoms/Button";

const CallToAction = () => {
  return (
    <>
      <div className="flex bg-hero-himNher bg-no-repeat bg-cover h-screen">
        <div className="flex items-center justify-end w-1/2 h-full">
          <Button className="mt-80 mr-3">Shop Men</Button>
        </div>
        <div className="flex items-center justify-start w-1/2 h-full">
          <Button className="mt-80 ml-3">Shop Women</Button>
        </div>
        <div className="text-3xl lg:text-5xl font-bold text-white w-1/2 absolute top-80 left-80">
          Shoes That Feel like Summer
        </div>
      </div>
    </>
  );
};

export default CallToAction;
