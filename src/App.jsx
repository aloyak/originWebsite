import heroBackground from "../resources/sponzalighting.png";
import originLogo from "../resources/originlogo.png";

function App() {
  return (
    <main className="bg-[#0a0a0a] text-white font-mono selection:bg-orange-500 selection:text-black">
      <section className="relative min-h-screen overflow-hidden border-b-8 border-orange-600">
        <div 
          className="absolute inset-0 z-0 scale-105 blur-[2px] brightness-50"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
          <div className="mb-8 inline-block self-start bg-black p-4 [clip-path:polygon(4px_0,calc(100%-4px)_0,100%_4px,100%_calc(100%-4px),calc(100%-4px)_100%,4px_100%,0_calc(100%-4px),0_4px)]">
            <img
              className="h-auto w-44 object-contain sm:w-56"
              src={originLogo}
              alt="Origin Engine logo"
            />
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl">
              Next-Gen <br />
              <span className="bg-orange-500 px-4 text-black [box-shadow:8px_8px_0_0_#9a3412]">
                Pixel Logic.
              </span>
            </h1>

            <p className="max-w-xl border-l-4 border-orange-500 bg-black/60 p-6 text-lg leading-relaxed text-gray-200 backdrop-blur-md">
              A high-fidelity rendering stack designed for creators who demand 
              pixel-perfect iteration and raw performance.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              className="relative bg-orange-500 px-8 py-4 text-xl font-bold text-black transition-transform hover:-translate-y-1 active:translate-y-0 [box-shadow:0_6px_0_0_#9a3412] hover:[box-shadow:0_4px_0_0_#9a3412]"
              href="https://github.com/aloyak/origin"
              target="_blank"
              rel="noreferrer"
            >
              SOURCE_CODE
            </a>
            <a
              className="relative border-4 border-white bg-transparent px-8 py-4 text-xl font-bold text-white transition-transform hover:-translate-y-1 active:translate-y-0 [box-shadow:0_6px_0_0_#444] hover:[box-shadow:0_4px_0_0_#444]"
              href="./game/"
            >
              RUN_DEMO.EXE
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="col-span-2 space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-orange-500 underline decoration-4 underline-offset-8">
              System Overview
            </h2>
            <p className="text-xl leading-relaxed text-gray-400">
              Origin Engine bridges the gap between retro aesthetics and modern 
              computational power. It is not just about the pixels—it's about the 
              math behind them.
            </p>
          </div>

          <div className="border-4 border-gray-800 bg-[#111] p-6 [box-shadow:8px_8px_0_0_#1a1a1a]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-tighter text-gray-500">Terminal Output</h3>
            <div className="space-y-2 font-mono text-xs text-orange-400/80">
              <p>&gt; Initializing v2.0.26...</p>
              <p>&gt; Shaders compiled.</p>
              <p>&gt; Ready for input_</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;