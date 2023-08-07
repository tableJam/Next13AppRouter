import { useRouter } from "next/router";

import React from 'react'

const refresh = () => {
  const router = useRouter();
  return (
    <div onClick={()=>{
      router.reload();
    }}>refresh</div>
  )
}

export default refresh