import LinkButton from "../../atoms/Button/LinkButton";

const Tab = () => {
  return (
    <>
      <div className="flex items-center justify-between w-1/2 mx-auto">
        <LinkButton >Shoes</LinkButton>
        <LinkButton>Apparel</LinkButton>
        <LinkButton>Basics</LinkButton>
      </div>
      <div className="border-b-2"></div>
    </>
  );
};

export default Tab;
