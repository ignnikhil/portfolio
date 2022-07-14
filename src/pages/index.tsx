import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#161613] font-sans text-white antialiased">
      <header className="py-8 px-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <span>Nikhil Singh.</span>
          <nav className="flex gap-8">
            <a>Work</a>
            <a className="text-[#777777]">Resume</a>
            <a className="text-[#777777]">About</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
