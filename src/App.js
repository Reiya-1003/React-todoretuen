import React, { useState } from 'react'







const App=() =>{　//画面でる

  const todoItems=[
    ]
   

    const [todos, setTodo] = useState(todoItems);
  

  
  const naiyou = todos.map((todo,i)=> {return <tr key={i}><th>{i +1}</th><th>{todo.title}</th>
    <th>{todo.detail}</th><th><input type="checkbox"></input></th>
    <th><button onClick={ () => handleDelete(i) }>Done!!!</button></th></tr>});

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('') 

  const handleNewTitle = (e) => {
    setTitle( e.target.value )
    
}

 const handelrNewDetail = (e) =>{
  setDetail( e.target.value)
 }

const handleSubmit = (event) => {
  event.preventDefault()
  if(title === '' ) return
  setTodo(todos => [...todos,{ title, detail}])
  setTitle('') 
  setDetail('')  
  
}
const handleDelete = index => {
  const newTodos = [...todos]
  newTodos.splice(index,1)
  setTodo(newTodos)

};
console.log(todos)


 if(todos.length >= 1){
  return (
    <div >
      <h1>Todoリスト in React.js</h1>
       <table>
         <thead>
           <tr>
           <th>No.</th>
           <th>titel</th>
           <th>detail</th>
           <th>check</th>
           <th>btn</th>
           </tr>
         </thead>
         <tbody>
           
           
          {naiyou}
           
         </tbody>
       </table>
       

       <div> 
         <h2>todo form</h2>
         <form onSubmit={ handleSubmit }>
         title:<input type="text"　name="title" value={title} onChange={handleNewTitle}></input>
         <br></br>
         detail:
         <br></br>
         <textarea rows="4" cols="40" value={detail} onChange={handelrNewDetail}></textarea>
         <br></br>
         <input type="submit" ></input>
         </form>
         </div>
       
    </div>
  );}else {
    return (
      <div >
        <h1>Todoリスト in React.js</h1>
         <div>Currently no plans</div>
         
  
         <div> 
           <h2>todo form</h2>
           <form onSubmit={ handleSubmit }>
           title:<input type="text"　name="title" value={title} onChange={handleNewTitle}></input>
           <br></br>
           detail:
           <br></br>
           <textarea rows="4" cols="40" value={detail} onChange={handelrNewDetail}></textarea>
           <br></br>
           <input type="submit" value="送信" ></input>
           </form>
           </div>
         
      </div>
    );
 }
}





// onChange={(e)=>{settodos({...todos, title: e.target.value})}}


export default App;
