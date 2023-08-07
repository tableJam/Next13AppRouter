import Link from "next/link"
import { createClient } from '@supabase/supabase-js';
import { Database } from "../../../database.types";

type Blog = Database['public']['Tables']['blog']['Row']

const bgStyle = {
  width:"20%",
  height: "80%",
  borderRadius: "20px",
  background: "rgba(207, 207, 207, 0.30)",
  backdropFilter: "blur(150px)",
  zIndex: 100
}

const getBlogList = async() => {
  const res = await fetch('https://mugexmcatzfgrmikagnx.supabase.co/rest/v1/blog?select=*',{
    headers: new Headers({
      apiKey: process.env.apiKey as string
    }),
    // cache:'no-store',
    next: {revalidate: 60}
  });
  const blogs:Blog[] =  await res.json();
  return blogs;
};


export const BlogList = async() => {
  const blogs = await getBlogList();
  return (
    <div style={{position:'absolute',top:"10%",left:"4%",...bgStyle}} className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className="py-2">
            <Link href={`/blog/${blog.id}`} className="font-mono text-blue-500 hover:underline">
              {blog.title || 'Untitled'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
