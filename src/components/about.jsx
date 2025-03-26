import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <div className="max-w-6xl mx-auto px-6 py-12 font-serif">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          About <span className="text-blue-500">ToDo App</span>
        </h2>

        <p className="mt-4 text-gray-600 text-center text-lg max-w-3xl mx-auto">
          Your ultimate Task Planner with Weather recomendation and priority
          task management
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/todoApp.jpeg"
              alt="ToDo App"
              className="rounded-xl shadow-lg hover:scale-110 transition-all cursor-pointer"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Simplify Task Planning & Maximize Activity
            </h3>

            <p className="mt-4 text-gray-600 text-lg text-justify leading-relaxed">
              ToDo App is your Task Planner with Weather recomendation and
              priority task management. Which is built for Simplify Task
              Planning & Maximize Activity . &nbsp;&nbsp;
              <a href="/profile">
                <span className="text-[#8046FD]">
                  Click to Meet The Creator
                </span>
              </a>
            </p>

            <div className="mt-6 space-y-4 text-justify leading-relaxed">
              <div className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">✔</span>
                <p className="text-gray-700 text-lg">
                  Priority task management
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">✔</span>
                <p className="text-gray-700 text-lg">Personalized Task</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">✔</span>
                <p className="text-gray-700 text-lg">
                  Safe & Secure with Google Authentication for secure login
                  experience
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">✔</span>
                <p className="text-gray-700 text-lg">
                  Hassle-free task manager
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Ready to boom your activity? 🚀
          </h3>
          <a href="/">
            <Button
              className={
                "w-full my-16 md:w-auto md:h-12 cursor-pointer bg-black hover:bg-gray-700 text-white font-bold transition"
              }>
              Get Started. It's free👆
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
