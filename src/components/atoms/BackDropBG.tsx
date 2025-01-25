import React from 'react'
import {motion} from "framer-motion"

interface propsType {
    children: React.ReactNode,
    onClick: () => void
}

const BackDropBG: React.FC<propsType> = ({children, onClick}) => {
  return (
    <motion.div
        className='backdrop'
        onClick={onClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        {children}
    </motion.div>
  )
}

export default BackDropBG
