import React from 'react'

const Aboutus = () => {
  return (
    <section id="aboutus" className="flex flex-col md:flex-row items-center justify-center p-6 mv-4 text-white mb-52  ">
      {/* Image section */}
      <div className="flex-shrink-0">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/handsome-muscular-male-in-gym-drinking-protein-royalty-free-image-1692269063.jpg?crop=0.668xw:1.00xh;0.262xw,0&resize=640:*"
          alt="About Us"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Text content */}
      <div className="max-w-lg mt-6 md:mt-0 md:ml-8 text-center md:text-left text-black ">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-2xl leading-relaxed font-poppins font-roboto " >
          Welcome to our platform! We are passionate about delivering the best
          experience for our users. Our team works tirelessly to ensure that our
          products and services meet your expectations and needs. Join us in our
          journey to make something extraordinary together!
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
