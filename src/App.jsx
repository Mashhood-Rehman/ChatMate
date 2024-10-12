import Chat from "./components/chat/chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/list"
import AuthPage from "./components/Auth/AuthPage"
import Notifications from "./components/Notifications/Notifications"
const App = () => {

  const user = true
  return (
    <div className="" >
{
  user? (
    <>
    <div className=' h-[90vh] flex w-[90vw] bg-[rgba(17,25,40,0.75)] backdrop-blur-lg rounded-xl'>
      <List />
      <Chat />
      <Detail />

    </div>
    </>
  )
    :
    (
      <>
      <AuthPage/></>
    )
}
    </div>

  )
}

export default App