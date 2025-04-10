import React, { useCallback, useState } from "react";
import './HomePage.css'
import PostCard from "@entities/post/PostCard";
import Button from "@shared/ui/Button"
import RealTimeChart from "../../components/RealTimeChart";

const HomePage=()=>{
  const [count,setCount]=useState(0);
  const [posts, setPosts]=useState([])  // 빈 배열로 변경
  
  const handleLike=useCallback((postId)=>{
    console.log(postId);
    setPosts(prevPosts=>
      prevPosts.map(post=>{
        if(postId == post.id){
          const toggleLiked=!post.liked;
          return {
            ...post,
            liked: toggleLiked,
            likes: toggleLiked? post.likes+1 : post.likes-1,
          }
        }
        return post;
      })    
      )
    },[])
    
  const handleIncrement=()=>{
    setCount(count+1);
  }
  
  return (
    <div className="home-page-container">
      <div className="home-page">
        <div className="feed-container">
          {posts.map(post=>
            <PostCard key={post.id}  post={post} onLike={handleLike}/>
          )}
        </div>
        <div className="sidebar-container">
          {/*<SuggestionPanel />*/}
        </div>
      </div>
      <RealTimeChart />
    </div>
  )
}
export default HomePage;