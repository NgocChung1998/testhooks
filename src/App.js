/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './Compunents/ColorBox';
import TodoList from './Compunents/TodoList';
import TodoForm from './Compunents/TodoForm';
import PostList from './Compunents/PostList';
import Pagination from './Compunents/Pagination';
import queryString from 'query-string'
import PostFilterForm from './Compunents/PostFilterForm';
import Clock from './Compunents/Clock';

function App() {
  const [todoList,setTodoList]=useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ])
    const [postList,setPostList]=useState([]);
    const [pagination,setPagination]=useState({
      _page:1,
      _limit:10,
      _totalRows:1,
    })
    const [filters,setFilters]=useState({
      _limit:10,
      _page:1,
      // title_like:'quis'
    })
    // chỉ chạy 1 lần
    // useEffect(()=>{
    //   async function fetchPostLink(params) {
    //     try {
    //       const requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
    //       const response=await fetch(requestUrl)
    //       const responseJson=await response.json()
    //       console.log({responseJson});
    //       const {data}=responseJson;
    //       setPostList(data)
    //     } catch (error) {
    //       console.log('Err',error.message)
    //     }
     
        
    //   }
    //   console.log("Have arr")
    //   fetchPostLink();
    // },[])

    // chạy mỗi khì filter thay đổi
    useEffect(()=>{
      async function fetchPostLink(params) {
        try {
          // cài query string:npm i --save query-string
          //chuyển từ Obj filter sang chuỗi VD:từ Obj trên thành _limit=10&_page=1
          const paramsString= queryString.stringify(filters)
          const requestUrl=`http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response=await fetch(requestUrl)
          const responseJson=await response.json()
          console.log({responseJson});
          const {data,pagination}=responseJson;
          setPostList(data);
          setPagination(pagination)
        } catch (error) {
          console.log('Err',error.message)
        }
     
        
      }
      console.log("Have arr")
      fetchPostLink();
    },[filters])
    //Chạy nhiều lần (sau khi render cũng chạy)
    useEffect(()=>{
      console.log('No Have arr')
    })
    // Hàm phân trang(set lại state filter)
    function handlePageChange(newPage) {
     setFilters({
       ...filters,
       _page:newPage,
     })
      
    }
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
  function filterChange(newFilter) {
    setFilters({
      ...filters,
      _page:1,
      title_like:newFilter.searchTerm,
    })
    
  }
  const [showClock,setShowClock]=useState(true)
  return (
    <div className="app">
    <h1> React-Hook</h1>
  {showClock && <Clock/>}
    <button onClick={()=>setShowClock(false)}>Hide</button>
     <ColorBox />
     <PostFilterForm onSubmit={filterChange}/>
     <PostList posts={postList}/>
     <Pagination pagination={pagination} onPageChange={handlePageChange}/>
     <TodoForm onSubmit={handleTodoSubmit} />
  
    {/* {/* truyền sang con và truyền sang cha dùng 1 func để nhận/} */}
     <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>

  );
}

export default App;
