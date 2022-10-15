import type { NextPage } from 'next'
import Image from 'next/image'
import React,{FC} from 'react'
export interface MiniCardInterface{
    title: string;
    imgs: string;
}

const MinCard: FC = (props: MiniCardInterface) => {
    const lazyRoot = React.useRef(null)
  return (
    <div className='h-screen flex'>
      <div className='max-w-sm m-auto'>
        <div className='relative w-32 h-32'>
           <Image
           lazyRoot={lazyRoot}
        src={props.imgs}
        // sizes="(max-width: 768px) 100vw,
        //       (max-width: 1200px) 50vw,
        //       33vw"
        placeholder="blur"
        alt="Picture of the author"
        layout='fill'
      />
        </div>
     
        <h1 className="text-2xl font-bold">
    Hello world! {props.title}
  </h1>
      </div>
      
    </div>
    
  )
}

export default MinCard
