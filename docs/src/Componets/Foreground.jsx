import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);

    const data = [{
        desc:"This is a React Project of sliding Cards",
        filesize:".9mb",
        close:true,
        tagdetails:
        {   
            isOpen:true,
            tagTitle:"Download Now",
            tagcolor:"green"
        }
    },
        {
            desc: "This is a old card you can read your marks detial here",
            filesize: ".9mb",
            close: false,
            tagdetails:
            {
                isOpen: true,
                tagTitle: "Download Now",
                tagcolor: "blue"
            }
        },
        {
            desc: "Welcome to our website.Greeting from Neeraj Purohit",
            filesize: ".9mb",
            close: false,
            tagdetails:
            {
                isOpen: true,
                tagTitle: "Upload",
                tagcolor: "red"
            }
        }
]
    
  return (
      <div ref ={ref} className='fixed top-0 left-0 z-[3]  w-full h-full bg-sky-800/50 flex gap-10 flexwrap-wrap p-5'>
        {data.map((item,index)=>{
            return <Card data={item} refrence={ref}/>
        })}
      </div>
  )
}

export default Foreground
