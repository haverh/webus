

import { UserIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import ToolTip from "../../utils/tooltip";

const AddPost = () => {

  return (
    <div className="w-full max-w-[500px] flex border m-2 p-2 rounded-xl">
      <div className="flex items-center justify-center size-[40px] rounded-full bg-gray-700 flex-shrink-0">
        <UserIcon className="size-6" />
      </div>

      <div className="flex flex-col flex-grow px-4">
        <textarea className="min-h-[100px] bg-[#242424] border resize-none px-2 mb-4 rounded-xl" placeholder="What is happening?!"></textarea>
        <div className="flex justify-between">
          <div>
            <ToolTip text="Emoji">
              <button className="relative">
                <FaceSmileIcon className="size-6 cursor-pointer hover:text-yellow-400" />
              </button>
            </ToolTip>
          </div>
          <button className="w-fit py-2 px-6 rounded-full bg-gray-700 hover:bg-gray-500">Post</button>
        </div>
      </div>

    </div>
  )
}

export default AddPost;