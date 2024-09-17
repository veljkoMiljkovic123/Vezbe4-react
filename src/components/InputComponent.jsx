import React, { useState } from 'react'

function InputComponent({darkMode,setDarkMode,allTodo,setAllTodo}) {
    const [inputValue,setInputValue] = useState('')
    function handleInputValue(e){
        setInputValue(e.target.value) 
    }
    function handleTodo(){
        if(inputValue!==''){
            setAllTodo([...allTodo,{id:new Date().getTime(),title:inputValue}])
        setInputValue('')
        }
    }
  return (
    <div className='flex justify-center items-center my-5'>
        <input className='border' onChange={handleInputValue} type="text" placeholder='Insert todo' value={inputValue} name="" id="" />
        <button onClick={handleTodo} className='border text-red-600 px-2 py-1'>Add Todo</button>
    </div>
  )
}

export default InputComponent