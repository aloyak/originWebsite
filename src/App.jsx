import heroBackground from "../resources/sponzalighting.png";
import originLogo from "../resources/originlogo.png";
import jspBackground from "../resources/jsp2.jpg";
import sandbox from "../resources/sbox.png";
import jsp from "../resources/jsp.jpg";

import "nes.css/css/nes.min.css";

function App() {
  return (
    <main
      className="bg-black text-white min-h-screen selection:bg-orange-500 selection:text-black"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "pixelated",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent hidden sm:block" />
          <div className="absolute inset-0 bg-black/50 sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start p-4 sm:bottom-[20%] sm:left-[10%] sm:p-0">
          <div className="flex max-w-4xl flex-col items-center sm:items-start gap-6 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter pl-5">
                ORIGIN ENGINE
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="max-w-xl text-[10px] sm:text-[10px] md:text-xs leading-[2] text-gray-300 px-4 sm:px-0 sm:pl-5">
                A cross-platform true 3D-pixelart game engine built with OpenGL.
                Designed for simplicity and performance in modern C++.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 sm:pl-5 w-full">
              <a
                className="nes-btn is-warning transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)] text-[10px] sm:text-base w-full sm:w-auto"
                href="https://github.com/aloyak/origin/releases/latest"
                target="_blank"
                rel="noreferrer"
                style={{ paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#ffcc00" }}
              >
                Latest Releases
              </a>

              <a
                className="nes-btn is-success transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)] text-[10px] sm:text-base w-full sm:w-auto"
                href="./game/"
                style={{ paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#92cc41" }}
              >
                Demo (LEGACY)
              </a>

              <a
                className="nes-btn is-primary transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)] text-[10px] sm:text-base w-full sm:w-auto"
                href="https://github.com/aloyak/origin"
                target="_blank"
                rel="noreferrer"
                style={{ paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#209cee" }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 space-y-16 sm:space-y-32">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-900 border-4 border-gray-700 p-2 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <img 
                src={jsp}
                alt="sbox" 
                className="w-full h-full object-cover" 
                style={{ imageRendering: "pixelated" }} 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl text-orange-400">Cool Sandbox Editor</h2>
            <p className="text-[8px] sm:text-[10px] md:text-xs leading-loose text-gray-400">
              Create and edit your scenes in real-time with a lightweight, fast and intuitive editor. Full support for physics simulation, lighting and entity management, as well as a full gizmo layer 
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-900 border-4 border-gray-700 p-2 shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <img 
                src={jspBackground}
                alt="JSP" 
                className="w-full h-full object-cover" 
                style={{ imageRendering: "pixelated" }} 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl text-orange-400">Production Proven</h2>
            <p className="text-[8px] sm:text-[10px] md:text-xs leading-loose text-gray-400">
              Origin Engine has been used in a real game project that required modern and efficent rendering and physics systems. The "Janitor Space Program" was built entirely inside the engine and released natively for Windows and Linux without any issues!
            </p>
            <a
              className="nes-btn is-primary"
              href="https://aloyak.itch.io/JSP"
              target="_blank"
              rel="noreferrer"
            >
              Free Download!
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 sm:py-32 overflow-hidden border-gray-800 mt-8 sm:mt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${jspBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "pixelated",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 flex flex-col items-center text-center gap-6 sm:gap-8">
          <h2 className="text-lg sm:text-2xl md:text-3xl text-orange-400">
            Ready to start building?
          </h2>
          <p className="text-[8px] sm:text-[10px] md:text-xs leading-loose text-gray-300 max-w-xl">
            Join the development, contribute to the source code, or just grab the latest release and start creating your own 3D games!
          </p>
          <a
            className="nes-btn is-warning transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)] text-[10px] sm:text-base mt-2"
            href="https://github.com/aloyak/origin/releases/latest"
            target="_blank"
            rel="noreferrer"
            style={{ paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#ffcc00" }}
          >
            Get the Engine
          </a>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-32">
        <div className="grid gap-8 sm:gap-16 md:grid-cols-2">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl text-orange-400">Features</h2>
            <p className="text-[8px] sm:text-[10px] md:text-xs leading-loose text-gray-400">
              Custom OpenGL renderer, entity-component system, desktop editor, lighting, shadows, physics and WebAssembly support.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-base sm:text-xl text-orange-400">Status</h2>
            <ul className="nes-list is-disc text-[8px] sm:text-[10px] md:text-xs space-y-2 sm:space-y-4 text-gray-400">
              <li>LTS versions availiable</li>
              <li>Open Source (MIT)</li>
              <li>Cross-platform (Windows, Linux, Web)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-24 text-center border-t-4 border-dotted border-gray-800 pt-8 sm:pt-12">
          <p className="mt-6 sm:mt-8 text-gray-600 text-[8px] sm:text-[10px]">
            © 2026 Origin Engine by{" "}
            <a
              href="https://aloyak.dev"
              className="text-orange-400 hover:text-orange-300"
            >
              4loyak!
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;