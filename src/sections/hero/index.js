const HeroSection = () => {
  return (
    <section className=" bg-light flex relative min-h-screen overflow-hidden">
      <Colors />
      <div className="container mx-auto flex flex-1">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default HeroSection;

const Colors = () => (
  <div className="absolute inset-0 flex">
    <div className="flex-[0.35]" />
    <div className="relative flex-[0.65] bg-black hero-section-clip-path" />
  </div>
);

const Left = () => (
  <div className="flex items-center">
    <div>
      <span className="font-semibold font-sans text-3xl">I am</span>
      <h1 className="text-5xl font-bold mt-7 shadow-[0px_4px_4px_0px_#00000040]">Usman Malik</h1>
      <p className="text-[#909090] mt-2 font-semibold">Full Stack Engineer</p>
    </div>
  </div>
);

const Right = () => <div></div>;
