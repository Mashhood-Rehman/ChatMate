
const AddUser = () => {
  return (
    <div className=" p-4 bg-[rgba(17,25,40,0.5)] ">


        <form action="
        ">
<div className=" flex items-center space-x-2">

        <input type="text" placeholder="Search User.." className=" p-2 text-black focus:outline-none rounded-xl" />
        <button className="bg-blue-600 p-3  rounded-xl">Search</button>
</div>

<div className=" flex items-end mt-2 justify-between">

        <div className="flex items-center  space-x-2">

        <img src="/avatar.png" alt="" className=" h-8 w-8 rounded-full" />
        <p>John Doe</p>
</div>
        <button  className=" bg-blue-600 px-3 py-1 rounded-xl">Add User</button>
        </div>

        </form>
    </div>
  )
}

export default AddUser