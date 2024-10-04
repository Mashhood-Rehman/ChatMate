import Chat from "./components/chat/chat"
import Detail from "./components/detail/detail"
import List from "./components/list/list"

const App = () => {
  return (
    <div >

    <div className=' h-[90vh] flex w-[90vw] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg rounded-xl'>
      <List />
      <Chat />
      <Detail />
    </div>
    </div>
  )
}

export default App