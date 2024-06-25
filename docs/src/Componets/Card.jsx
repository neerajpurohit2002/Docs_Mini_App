import React from 'react'
import { MdFindInPage } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({ data, refrence }) => {
  return (
      <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden ml-3'>
          <MdFindInPage></MdFindInPage>
          <p className='text-xm mt-5 leading-tight font-semibold '>{data.desc}</p>
          <div className='footer absolute bottom-0 w-full left-0'>
              <div className='flex items-center justify-between py-3  px-8 mb-3'>
                <h5>{data.filesize}</h5>
                  <span className='w-7 h-7 bg-zinc-600 rounded-full  flex items-center justify-center'>
                      {data.close ? <IoMdCloseCircle /> : < MdOutlineFileDownload size=".7em" color='#fff' />}
                </span>
            </div>
              {data.tagdetails.isOpen && (
                  <div className={`tag w-full py-4 ${data.tagdetails.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"}  flex items-center justify-center`}>
                      <h3 className='text-sm font-semibold'>{data.tagdetails.tagTitle}</h3>
                  </div>)
              }
          </div>
    </motion.div>
  )
}

export default Card