/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <div className="fixed top-10 flex w-full justify-center bg-white-50">
      <nav className="flex flex-row p-3 items justify-between w-[55vw] h-[70px] bg-white/50 backdrop-blur-xl rounded-xl border-[1px] border-gray-200 lg:w-[90vw] ">
        {/* Left */}
        <div className="flex flex-row items-center w-[33%] justify-around space-x-3">
          <img
            height={50}
            width={50}
            src="https://avatars.githubusercontent.com/u/88425310?v=4"
            className="rounded-xl"
            alt="logo"
          />
          <p>Mert Sabinov</p>
          <span className="flex flex-row p-1 bg-gray-100 rounded-lg xl:hidden">
            version: 1.0.0
          </span>
        </div>
        {/* Center */}
        <div className="flex flex-row items-center text-center text-sm space-x-3 xl:hidden">
          <a href="#features" className="text-gray-500 hover:underline">
            Features
          </a>
          <a href="#pricing" className="text-gray-500 hover:underline">
            Pricing
          </a>
          <a href="#FAQ" className="text-gray-500 hover:underline">
            FAQ
          </a>
        </div>
        {/* Right */}
        <div className="flex flex-row space-x-3 items-center justify-end w-[33%] ">
          <button className="px-3 py-2 bg-gray-50 shadow-lg rounded-lg border-[1px] border-gray-200 hover:shadow-md">
            Login
          </button>
          <button className="px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
