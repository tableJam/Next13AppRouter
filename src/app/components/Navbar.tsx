import Link from 'next/link';

import React from 'react'

const style = {
  "top": 0,
  "light": 0,
  "backgroundColor": '#393939',
  "width": "500px",
  "height": "40px",
  "display": "flex",
  borderRadius:"0.75rem",
  "justifyContent": "spaceAround",
  color: "#ffffff9c"
}

const Navbar = () => {
  return (
    <div className="" style={{...style,position:"fixed",borderRadius:"0 0 0.75rem 0","alignItems":"center"}}>
      <Link href="/" className="font-xs ml-10 font-mono hover:text-white">🚀_hello</Link>
      <Link href="/blogs" className="font-xs ml-10 font-mono hover:text-white">📡_blog</Link>
      <Link href="/streaming-sr" className="font-xs ml-10 font-mono hover:text-white">streaming</Link>
      <Link href="/auth" className="font-xs ml-10 font-mono hover:text-white">auth</Link>
    </div>
  )
}

export default Navbar;