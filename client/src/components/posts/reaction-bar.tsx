
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const ReactionBar = ({likes = 0, replies = 0}: { likes?: number; replies?: number}) => {

  return (
    <div className="flex grow-0 gap-4">
      <button className="flex items-center hover:text-red-400">
        <HeartIcon className="size-4 mr-1" />
        {likes}
      </button>
      <button className="flex items-center hover:text-blue-400">
        <ChatBubbleLeftIcon className="size-4 mr-1" />
        {replies}
      </button>
    </div>
  )
}

export default ReactionBar;