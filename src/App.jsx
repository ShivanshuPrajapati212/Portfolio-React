import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" bg-[#0a0a0f] min-h-screen">
      <div className="mx-auto container text-zinc-300 lg:max-w-[50vw] max-lg:p-3">
        <Introduction />
        <Projects/>
        <Skills />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
