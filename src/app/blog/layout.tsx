import React from 'react'
import { Suspense } from 'react';
import NoteList from '../components/notes-list';
import { BlogList } from '../components/blog-list';
import Spinner from '../components/Spinner';
const bgStyle = {
  width: "70%",
  height: "80%",
  borderRadius: "20px",
  background: "rgb(156 156 156 / 30%)",
  backdropFilter: "blur(5px)",
  zIndex: "100",
}

export default function BlogLayout({children}:{children: React.ReactNode}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <BlogList/>
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
       ♥️ hello Next App&nbsp;
        <code className="font-mono font-bold">src/app/blog/page.tsx</code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          
        </a>
      </div>
    </div>

    <div>
    <h1 className="text-9xl font-mono">mille ghost</h1>
    </div>

    <div style={{position: 'absolute',top: "10%",left:"26%",...bgStyle}}>
      <Suspense fallback={<Spinner/>}>
        {children}
      </Suspense>
    </div>
  </main>
  )
}
