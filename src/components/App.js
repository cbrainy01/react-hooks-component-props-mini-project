import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import Article from "./ArticleList"

console.log(blogData);



function App() {

  //iterate through post array and create component for each
   
   const createPosts = blogData.posts.map( (post) => {
      return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    } )
  

  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About pic={blogData.image} altAtt="blog logo" about={blogData.about}/>
      <main>{createPosts}</main>
    </div>
  );
}

export default App;
