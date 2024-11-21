
import ReactionBar from "./reaction-bar";

import { UserIcon } from "@heroicons/react/24/solid";

import { PostType } from "../../types";

const Post = ({username, handle, content, reactions}: PostType) => {
  return (
    <div className="w-full max-w-[500px] flex border m-2 p-2 rounded-xl">
      <div className="flex items-center justify-center size-[40px] rounded-full bg-gray-700 flex-shrink-0">
        <UserIcon className="size-6" />
      </div>

      <div className="flex flex-col flex-grow px-4">
        <h3 className="mb-2">{username} <span className="text-blue-400">{handle}</span></h3>
        <p className="w-full mb-2 break-words">{content}</p>
        <ReactionBar likes={reactions.likes} replies={reactions.replies} />
      </div>

    </div>
  )
}

export default Post;