import { UserType } from "../../types"


interface UserComponentProps {
  user: UserType;
}

export const UserProfileIcon:React.FC<UserComponentProps> = ({user}) => {
  

  return (
    <div className="size-[24px] text-left font-bold border bg-gray-900 rounded-full cursor-pointer transform"/>
  )
}

export const UserProfile:React.FC<UserComponentProps> = ({user}) => {
  

  return (
    <div className="flex items-center rounded-full hover:bg-[#ffe4c418] hover:cursor-pointer">
      <div className="size-[48px] text-left m-2.5 font-bold border bg-gray-900 rounded-full cursor-pointer transform hover:scale-105"/>
      <div>
        <p className="font-bold">{user.name}</p>
        <p className="text-gray-400">{user.handle}</p>
      </div>
    </div>
  )
}