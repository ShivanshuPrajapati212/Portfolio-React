import Introduction from './components/Introduction'
import BackgroundAnimation from './components/ui/background_animation'
import Skills from './components/Skills'
function App() {
  return (
    <div className='mx-auto container text-zinc-300 max-w-[45vw]'>
      <BackgroundAnimation />
      <Introduction/>
      <Skills/>

    </div>
  )
}

export default App
