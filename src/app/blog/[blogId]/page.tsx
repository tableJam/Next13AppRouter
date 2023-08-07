import React from 'react'

type PageProps = {
  params: {
    blogId: string
  }
}

const getBlog = async(id:string) => {
  console.log('🚀 Fetch?')
  const res = await fetch(`https://mugexmcatzfgrmikagnx.supabase.co/rest/v1/blog?select=*`,{
    headers: new Headers({
      apiKey: process.env.apiKey as string,
    }),
    cache: "no-store"
  });
  const blogs = await res.json();
  const blog = blogs.filter((el:any)=>el.id==id)[0];
  return blog;
}

const page = async({params}: PageProps) => {
  const id = params.blogId;
  const blog = await getBlog(id);
  return (
    <>
      <div className="bg-white p-6 rounded-md shadow-lg max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{new Date(blog.created_at).toLocaleString()}</p>
      <div className="prose">{blog.content}</div>
    </div>
    </>
  )
}

export default page