const Description = () => {
  return (
    <div className="min-h-[300px] text-center  description-section-bg p-5 flex flex-col justify-center items-start overflow-hidden">
      <div className="container mx-auto px-4">
        <p
          className="text-white text-6xl font-light font-sans mb-4 tracking-wider italic"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
        >
          Crafting digital experiences
        </p>
        <p
          className="text-white text-6xl font-bold font-opensans mt-2 tracking-wide"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          that solve real-world problems
        </p>
      </div>
    </div>
  );
};

export default Description;
