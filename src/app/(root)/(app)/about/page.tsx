import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import amir from '@/assets/amir.jpg'
import { RESUME_URL } from '@/constans/common'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'About - Muhd Amir',
  openGraph: {
    title: 'About - Muhd Amir',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={amir} alt="Foto dede ariansya" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Muhammed Amir</h2>
          <div className="mb-6">
            <p className="mb-1">
              MERN Stack Developer based in Kerala, India. <br />
              Currently working as the Software Division Head. I strive to write clean, readable, and maintainable code.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">MERN</h2>
          <div className="mb-6">
            <p className="mb-1">
              MERN Stack Developer based in Kerala, India, with 2 years of experience. <br />
              Currently working as the Software Division Head. I specialize in developing scalable, high-performance full-stack applications
              using the MERN stack: MongoDB, Express.js, React, and Node.js. My focus is on delivering robust backend solutions, seamless
              front-end experiences, and efficient API integration.
              <br />
              <br />
              Over the past 2 years, I have built multiple web applications, developed RESTful and GraphQL APIs, and optimized deployment
              pipelines using cloud services. I strive to write clean, readable, and maintainable code, ensuring best practices in security,
              testing, and performance optimization.
            </p>
          </div>

          <h2 className="mb-2 text-xl font-bold">Tech I Love</h2>
          <div className="mb-6">
            <p className="mb-1">TypeScript, Express.js, MongoDB, React, Node.js, Tailwind, and Bootstrap.</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
