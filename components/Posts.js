import Post from "../components/Post";
function Posts() {
    return (
        <div>
            <Post
               /*  key ={} */
                name ={"Santos Dave"}
                message ={"Feeling happy"}
                email={"santos@gmail.com"}
                timestamp={"Tue 11:33 pm"}
                image={"https://links.papareact.com/f0p"}
                postImage={"https://links.papareact.com/k2j"}
            />
        </div>
    )
}

export default Posts
