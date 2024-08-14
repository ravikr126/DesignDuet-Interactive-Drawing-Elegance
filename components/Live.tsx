import React from 'react'
import LiveCursors from './cursor/LiveCursors'
import { useOthers } from '@liveblocks/react'

const Live = () => {
    const others =  useOthers(); //it will give the list of other users
  return (
    <div>
       <LiveCursors others={others} />
    </div>
  )
}

export default Live