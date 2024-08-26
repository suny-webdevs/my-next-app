import { SyncLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2">
      <SyncLoader color="#22C55E" />
      <h1 className="text-xl text-green-500 font-bold mt-2">Loading...</h1>
    </div>
  )
}

export default Loading
