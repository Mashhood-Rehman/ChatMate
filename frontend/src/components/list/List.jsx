import ChatList from "./chatlist/ChatList"
import UserInfo from "./userinfo/UserInfo"

const List = () => {
  return (
    <div className="flex-1 flex flex-col  overflow-scroll">
        
        <UserInfo />
        <ChatList />
    </div>
  )
}

export default List