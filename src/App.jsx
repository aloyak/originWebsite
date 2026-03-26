import heroBackground from "../resources/sponzalighting.png";
import originLogo from "../resources/originlogo.png";

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
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        </div>

        <div className="absolute bottom-48 left-48">
          <div className="flex max-w-4xl flex-col items-start gap-6">
            <div className="flex items-center gap-4">
              <img
                className="h-auto w-48"
                src={originLogo}
                alt="Origin Logo"
                style={{ imageRendering: "pixelated" }}
              />
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                ENGINE
              </span>
            </div>

            <div className="space-y-6">
              <p className="max-w-xl text-[10px] md:text-xs leading-[2] text-gray-300 pl-5">
                A cross-platform true 3D-pixelart game engine built with OpenGL.
                Designed for simplicity and performance in modern C++.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pl-5">
              <a
                className="nes-btn is-primary transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)]"
                href="https://github.com/aloyak/origin"
                target="_blank"
                rel="noreferrer"
                style={{ paddingTop: "10px", backgroundColor: "#209cee" }}
              >
                GitHub Repo
              </a>

              <a
                className="nes-btn is-success transition-all duration-75 hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none shadow-[0_4px_0_rgba(0,0,0,1)]"
                href="./game/"
                style={{ paddingTop: "10px", backgroundColor: "#92cc41" }}
              >
                Launch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-xl text-orange-400">Features</h2>
            <p className="text-[10px] md:text-xs leading-loose text-gray-400">
              The Origin Engine features a custom-built OpenGL renderer optimized and specially setup for pixel art, a flexible entity-component system,
              a desktop sandbox editor, and all the tools you need to create your own pixel art games. Includes lighting, shadows, simple physics and 
              web assembly support out of the box!
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl text-orange-400">Status</h2>
            <ul className="nes-list is-disc text-[10px] md:text-xs space-y-4 text-gray-400">
              <li> Active Development!<br/>(Currently limited ALPHA release)</li>
              <li> Open Source (MIT)</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 text-center border-t-4 border-dotted border-gray-800 pt-12">
          <p className="mt-8 text-gray-600 text-[10px]">
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