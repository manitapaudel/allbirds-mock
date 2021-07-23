import Button from "../../atoms/Button";

const CallToAction = () => {
  return (
    <>
      <div className="bg-hero-guy bg-no-repeat bg-cover h-auto w-auto">
        <div className="flex-col items-center justify-center pt-36 pb-36">
          <h2 className="text-3xl lg:text-5xl text-center text-white font-bold mt-20">
            Stay Light On Your Feet
          </h2>
          <p className="text-white font-bold ">Your favorite summer shoes in new colors</p>
          <div className="mt-28">
            <Button className="mr-3">Shop Men</Button>
            <Button className="ml-3">Shop Women</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
