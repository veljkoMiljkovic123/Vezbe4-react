import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
function ToggleMode({darkMode,setDarkMode}) {

    function handleMode(){
        setDarkMode(!darkMode)
    }

  return (
    <div onClick={handleMode} className='flex justify-center my-3 cursor-pointer'>
        {darkMode?<CiLight size={42}/>:<MdDarkMode size={42}/>}
    </div>
  )
}

export default ToggleMode