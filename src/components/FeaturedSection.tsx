'use client'
import Link from "next/link"
import courseData from "@/data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}

function FeaturedSection() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 bg-black">
        <div>
            <div className="text-center">
                <h2 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Make Choice</h2>
                <p className="mt-3 text-7xl leading-8 font-extrabold tracking-tight text-purple-400 sm:text-4xl">Learn With the Best Only</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[15px] bg-white dark:bg-black overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-2xl sm:text-xl text-black mt-4 mb-2 dark:text-white">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className="text-lg text-purple-400 ">
                                deep dive
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded-xl text-semibold border border-neutral-600 text-blue-300 bg-black hover:bg-gray-900 transition duration-200"
            >
            Would you like to see more
            </Link>
        </div>
    </div>
  )
}

export default FeaturedSection