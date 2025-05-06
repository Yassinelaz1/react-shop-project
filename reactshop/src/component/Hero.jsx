import React from 'react';

const HomePage = () => {
  return (
    <div className="relative flex items-center justify-end h-[90vh] md:h-[100vh] text-black  overflow-hidden  mt-16 px-8">
      {/* Background image */}
      <img
        src="/back.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-end max-w-3xl space-y-4 text-right">
        <div className="uppercase tracking-widest text-2xl">
          <span className="block text-4xl font-semi-bold ">Welcome to</span>
          <span className="block text-8xl font-bold">Your Fitness Journey</span>
          <br />
          <span className="block text-2xl font-medium">Fuel your grind.</span>
          <span className="block text-2xl font-medium">Recover faster.</span>
          <span className="block text-2xl font-medium">Grow stronger.</span>
          <br />
          <span className="block text-2xl font-medium">
            Your journey deserves the best — not just supplements, but results.
          </span>
          <br />
          <span className="block text-base font-light">Get Stronger by yassine lazhari.</span>
          <br />
          <a
            href="/shop"
            className="inline-block mt-4 px-6 py-2 from-bg-gray-700 to-bg-[white] text-black font-semibold rounded-lg shadow hover:bg-black hover:text-amber-50 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
