import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className=" bg-[#0a0a0f] min-h-screen">
      <div className="mx-auto container text-zinc-300 max-w-[45vw]">
        <Introduction />
        <Projects/>
        <Skills />
      </div>
    </div>
  );
}

export default App;
