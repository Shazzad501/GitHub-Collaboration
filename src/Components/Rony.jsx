import images from "../assets/programming.png";
const Rony = () => {
  return (
    <div className="p-6 text-center space-y-4">
      <img className="aspect-square rounded-full" src={images} alt="" />
      <h1 className="text-2xl lg:text-4xl">Hey welcome from Rony</h1>
    </div>
  );
};

export default Rony;
