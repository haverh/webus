import { FaceSmileIcon } from "@heroicons/react/24/outline";
import ToolTip from "../../utils/tooltip";

const Messages = () => {
  return (
    <div className="flex flex-col items-center pb-16 p-4 min-h-screen sm:items-start">
      <h1 className="m-2 text-2xl font-bold">MESSAGES PAGE</h1>

      <div className="m-2 grow size-full flex border overflow-y-auto">
        <div className="grow border-r">
          <h2>Contacts</h2>
        </div>

        <div className="flex flex-col grow bg-gray-900">
          <div className="grow-0 py-4">
            <h2>Message</h2>
          </div>
          <div className="grow">
            <p>message exchanges</p>
          </div>
          <div className="grow-0 py-4 px-2 flex items-center justify-center">
              <ToolTip text="Emoji">
                <button className="relative">
                  <FaceSmileIcon className="size-6 cursor-pointer hover:text-yellow-400" />
                </button>
              </ToolTip>
            <input type="text" className="grow text-lg rounded-xl mr-2 p-1"></input>
            <button className="bg-gray-700 text-lg py-1 px-2 rounded-xl">Send</button>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Messages;