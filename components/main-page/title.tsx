import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div className="w-1/2 mx-24 text-dark-secondary dark:text-light-secondary ">
      <h1 className="text-2xl font-bold ">
        <span className="text-4xl">Hello</span>, my name is
      </h1>
      <h2 className="font-black text-7xl text-dark-primary dark:text-light-primary">
        <Typewriter
          options={{
            strings: ["Minsung"],
            autoStart: true,
            loop: true,
            delay: 300,
            cursor: "_",
          }}
        />
      </h2>
      <h3 className="text-lg font-semibold"> An Incoming Software Engineer</h3>
    </div>
  );
}
