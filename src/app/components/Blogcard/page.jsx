"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
// import "/api/staticdata.json"
function Blogcard() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/staticdata.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      {
        data.slice(0,3).map(blog=><div key={blog.id} className='relative cursor-pointer'>
            <Image src={"/"+blog.image} alt='' width={300} height={500} className='rounded-xl w-full h-full'/>
            <div className='absolute bottom-0 left-0  w-full h-full bg-black/60 hover:bg-black/40 flex items-end justify-center rounded-xl'>
                <div>
                    <p className='px-3 mb-3 text-base'>{blog.date} {blog.month} {blog.year}</p>
                    <h4 className='mb-4 text-lg font-semibold mx-2 hover:underline'>{blog.title}</h4>
                </div>
                </div>
            </div>

            )
      }
    </div>
  )
}
export default Blogcard
