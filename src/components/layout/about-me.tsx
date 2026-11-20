const AboutMe = () => {
  return (
    <div className="w-full border-b border-dashed border-[#484848] font-sans">
      <div className="border-b border-dashed border-[#484848]">
        <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto px-2 flex items-center justify-between">
          <div className="text-2xl py-1 px-2 font-serif">About Me</div>
          
      </div>
      </div>
      <div className="border-x border-dashed border-[#484848] md:w-[80%] lg:w-[40%] mx-auto py-2 px-2 flex items-center justify-between">
        <div
          className={
            "flex flex-col gap-6 w-full text-white *:text-white! *:leading-6 "
          }
        >
          <ul className="gap-1 py-2 px-4 *:leading-relaxed flex list-disc flex-col">
            <li>
              I'm a Software Developer{" "}
              <span className="text-sm">(Backend Heavy)</span> from{" "}
              <strong>Nairobi, Kenya</strong> .
            </li>
            <li>
              Currently learning Rust for systems & embedded development.
            </li>
            <li>
              My main goal is to end up as an a Embedded systems engineer and a
              database developer with my own defense startup.{" "}
            </li>
            <li>
              {" "}
              I’m passionate about a wide spectrum of topics revolving around
              science and technology.
            </li>
          </ul>
          <div className="leading-relaxed">
            I love creating content and crafting interactive,beautiful websites
            and systems.
            <br /> During my leisure time, you’ll find me watching recreational
            programming videos by Mr.Tsoding, sharing memes on my insta page, or
            listening to Primetime .
            <br /> When not glued to my computer, I enjoy taking long strolls
            alone.
          </div>
          <div className={"[&>strong]:text-[#1FD8A4] py-2 px-2"}>
            I am a <strong>Next.js</strong>, <strong>Rust</strong>,{" "}
            <strong>Springboot</strong> lover,and a <strong>contributor</strong>{" "}
            to opensource .
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;


