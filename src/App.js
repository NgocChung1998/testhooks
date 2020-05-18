/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './Compunents/ColorBox';
import TodoList from './Compunents/TodoList';
import TodoForm from './Compunents/TodoForm';
import PostList from './Compunents/PostList';

function App() {
  const [todoList,setTodoList]=useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ])
    const [postList,setPostList]=useState([]);
    // chỉ chạy 1 lần
    useEffect(()=>{
      async function fetchPostLink(params) {
        try {
          const requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
          const response=await fetch(requestUrl)
          const responseJson=await response.json()
          console.log({responseJson});
          const {data}=responseJson;
          setPostList(data)
        } catch (error) {
          console.log('Err',error.message)
        }
     
        
      }
      console.log("Have arr")
      fetchPostLink();
    },[])
    //Chạy nhiều lần (sau khi render cũng chạy)
    useEffect(()=>{
      console.log('No Have arr')
    })
  function handleTodoClick(todo) {
    console.log(todo);
    // tìm phần tử có index là cái mình truyền vào sau đó xóa
    const index=todoList.findIndex(x=>x.id===todo.id);
    // nếu không tìm thấy thì trả về
    if(index <0) return
    //  nếu tìm thấy thì xóa nó đi(lưu ý cần clone ra 1 state mới)
    const newTodoList=[...todoList]
    newTodoList.splice(index,1)
    setTodoList(newTodoList)
  }
  function handleTodoSubmit(value) {
      console.log(value);
      const newTodo={
        id:todoList.length + 1,
        ...value
      }
      const newTodoList=[...todoList];
      newTodoList.push(newTodo);
      // set lại state
      setTodoList(newTodoList)
      
  }
  return (
    <div className="app">
    <h1> React-Hook</h1>
     {/* <ColorBox /> */}
     <PostList posts={postList}/>
     <TodoForm onSubmit={handleTodoSubmit} />
  
    {/* {/* truyền sang con và truyền sang cha dùng 1 func để nhận/} */}
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>

  );
}

export default App;
