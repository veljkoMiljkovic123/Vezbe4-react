import React from 'react'

function OutputComponent({allTodo,setAllTodo}) {
    function removeTodo(id){
        let newArray = allTodo.filter((item)=>{
        return    item.id!==id
        })
        setAllTodo(newArray)
    }
  return (
    <div className='flex flex-col gap-2'>
        {allTodo.map((item)=>{
            return <div key={item.id} className='flex justify-between  items-center bg-blue-300 dark:bg-orange-400 p-5'>
                <h2 className='dark:text-white '>{item.title}</h2>
                <button className='dark:text-white border border-red-500 dark:text-white px-2 py-1' onClick={()=>removeTodo(item.id)}>Remove</button>
            </div>
        })}
    </div>
  )
}

export default OutputComponent