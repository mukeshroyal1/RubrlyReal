import ycLogo from "@/assets/yc-logo.png";

const BackedBySection = () => {
  return (
    <div className="flex justify-center items-center mt-6 sm:mt-6 mb-0">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-lg sm:text-xl text-gray-600">Backed by</span>
        <img src={ycLogo} alt="Y Combinator" className="w-auto h-7 sm:h-9 md:h-10" />
      </div>
    </div>
  );
};

export default BackedBySection;