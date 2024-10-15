
const UserInfo = () => {
  return (
    <div>


        <div className=" flex justify-between items-center ">
            <div className=" flex items-center p-3 space-x-3">

            <img src="avatar.png" className="rounded-full h-10 w-10" alt="" height={10} width={10} />
            <h1>Ali</h1>
            </div>
            <div className=" flex space-x-3 p-2">
            <img src="edit.png"  className=" h-6 w-6 " height={20} width={20}  alt="" />
            <img src="more.png"  className=" h-6 w-6 " height={0} width={20} alt="" />
            <img  src="video.png" className=" h-6 w-6 " height={30} width={30}  alt="" />
            </div>
        </div>
    </div>
  )
}

export default UserInfo