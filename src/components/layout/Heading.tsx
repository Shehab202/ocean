import React from 'react'
interface HeadingProps {
    title: string;
    description: boolean;
}

const Heading = ({title, description}:HeadingProps) => {
  return (
    <>
    <div className={`text-amber-50 ${description ? "text-center" : ""}  font-bold text-xl md:text-5xl py-3 bg-linear-to-tr from-sky-100 to-sky-600 bg-clip-text text-transparent md:my-4 w-full mx-auto`}>

{title}
    </div>

    </>
  )
}

export default Heading