import React, { useEffect, useRef } from 'react';

const Boxes = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = window.innerHeight * 0.8;

      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    return () => window.removeEventListener('scroll', checkBoxes);
  }, []);

  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  return (
    <div className="m-4 md:m-9 px-4 py-8 rounded-lg ">
      <h1 className="text-2xl md:text-4xl text-black text-center mb-12 font-bold">Discover our products!</h1>

      <div className="flex flex-col gap-20 bg px-4 md:px-20 py-10">
        {/* Box 1 */}
        <div ref={addToRefs} className="box flex bg-flex-col md:flex-row items-center gap-12">
          <img src="/protein.webp" alt="Protein" className="w-full md:w-1/2 max-w-sm rounded-2xl" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-[50px] font-semibold mb-4">Protein</h2>
            <p className="text-base leading-relaxed">
              Protein powder is a popular dietary supplement used to support muscle growth, recovery, and overall nutrition.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Supports muscle growth and recovery</li>
              <li>Convenient source of protein</li>
              <li>Variety of flavors and types available</li>
              <li>Can aid in weight management</li>
            </ul>
          </div>
        </div>

        {/* Box 2 */}
        <div ref={addToRefs} className="box flex flex-col md:flex-row-reverse items-center gap-12">
          <img src="./test.png" alt="Creatine" className="w-full md:w-1/2 max-w-sm rounded-2xl " />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-[50px] font-semibold mb-4">Creatine</h2>
            <p className="text-base leading-relaxed">
              Creatine is a natural compound found in the muscles, used to produce quick bursts of energy during high-intensity activities.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Increases muscle strength and power</li>
              <li>Enhances exercise performance</li>
              <li>Supports muscle recovery</li>
              <li>May improve cognitive function</li>
            </ul>
          </div>
        </div>

        {/* Box 3 */}
        <div ref={addToRefs} className="box flex flex-col md:flex-row items-center gap-12">
          <img src="./test.png" alt="Vitamins" className="w-full md:w-1/2 max-w-sm rounded-2xl shadow-md" />
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-[50px] font-semibold mb-4">Vitamins</h2>
            <p className="text-base leading-relaxed">
              Vitamins are essential micronutrients your body needs to function properly, especially when training regularly.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Supports immune function</li>
              <li>Promotes energy metabolism</li>
              <li>Enhances recovery and reduces fatigue</li>
              <li>May improve mood and cognitive function</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
