import AddPost from "../posts/add-post";
import Post from "../posts/post";


const fakePosts = [
  {username:"Alfred", handle:"@alfa23", content:"The weather is nice outside today~~", reactions: {likes: 12, replies: 2}},
  {username:"Tim", handle:"@timelapse", content:"Can't wait till the concert tonight.", reactions: {likes: 121, replies: 1}},
  {username:"Zed", handle:"@zzz09", content:"Last night, the aliens invaded my area. I'm scared. o_o", reactions: {likes: 1123, replies: 122}},
  {username:"Doc", handle:"@documents", content:"I hate the place I work at. Can't wait to just leave already. a aakljas ajskldja asjklasjkas sj sjksd ksdjka asjd", reactions: {likes: 56, replies: 5}},
  {username:"Cube", handle:"@cubby", content:"This rubiks cube is so fun. Checkout the lbuy all kinds of gadgets.", reactions: {likes: 112, replies: 65}},
  {username:"KingKrab", handle:"@kking", content:"i finally hit rank 1 in LoL.", reactions: {likes: 1, replies: 2}},
  {username:"KingKrab", handle:"@kking", content:"i finally hit rank 1 in LoL. Pneumonoultramicroscopicsilicovolcanoconiosis", reactions: {likes: 5434, replies: 223}},

]

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:items-start">
      <title>Home / Webus</title>
      <h1 className="m-2 text-2xl font-bold">HOME PAGE</h1>

      <AddPost />

      {fakePosts.map((post) => {
        return <Post username={post.username} handle={post.handle} content={post.content} reactions={post.reactions} />
      })}
    </div>
  )
}

export default Home;