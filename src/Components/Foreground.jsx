import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  
  const ref= useRef(null);

  const data= [
    {
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus soluta natus, nulla dignissimos aperiam?",
    filesize : ".9mb",
    close : false,
    tag : {isOpen: true, tagTitle: "Upload", tagColor:"green"}
    },
    
    {
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus soluta natus, nulla dignissimos aperiam?",
        filesize : ".9mb",
        close : true,
        tag : {isOpen: true, tagTitle: "Download Now", tagColor:"blue"}
    },

    {
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus soluta natus, nulla dignissimos aperiam?",
        filesize : ".9mb",
        close : false,
        tag : {isOpen: true, tagTitle: "Download Now", tagColor:"green"}
    },

    {
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus soluta natus, nulla dignissimos aperiam?",
        filesize : ".6mb",
        close : false,
        tag : {isOpen: true, tagTitle: "Download Now", tagColor:"blue"}
    }
]

  return (
    <div ref={ ref } className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        { data.map((item,index)=>(
            <Card data= { item } reference={ ref } />
        )) }
    </div>
  )
}

export default Foreground