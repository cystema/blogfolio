import React from "react"
import Image from "next/image"
import heroimage from '/public/hero-image.svg'
const skills = [  
  { skill: "Python" },
  { skill: "React" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "DevOps" },
  { skill: "C#" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "Linux" },
  { skill: "SQL" },
  { skill: ".NET Framework" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Django" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Swagger" },
  { skill: "Postman" },
  { skill: "WebAPI" },
  { skill: "SOAP" },
  { skill: "Bash" },
  { skill: "Fuzzing" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Azure" },
  { skill: "AWS" },
  { skill: "IBM Cloud" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 ">
        {/* <h1 className="text-center font-bold text-4xl text-white">
          ./aboutme 
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1> */}

        <div className="flex flex-col space-y-10 
        items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 
        md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-xl font-bold mb-6 md:text-left text-zinc-800 dark:text-zinc-200">
              Get to know me!
            </h1>
            <div className="text-md bg-gradient-to-r from-red-800 via-blue-700 to-teal-900 bg-clip-text text-transparent dark:bg-gradient-to-r from-red-200 via-blue-100 to-teal-100 bg-clip-text text-transparent">
              <p>
                Hi, my name is Shubham and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer
                based in Salt Lake City, UT.
              </p>
              <br />
              <p>
              I graduated from the University of Utah in 2024 with an MS in Computer Science, 
              where I had the privilege of working as a Research Assistant under 
              Prof. Mu Zhang, focusing on Computer Security. 
              Before that, I spent around 4 years honing my skills as a Full Stack Software Developer.

              </p>
              <br />
              <p>
              I thrive on learning new things and constantly expanding my knowledge. 
              I have a keen eye for design and detail, which drives me to create 
              visually appealing and user-friendly applications.
              I am always looking for ways to improve, both personally and professionally, 
              embracing every challenge as an opportunity to grow.
              </p>
              <br />
              <p>
                My personal motto is to always {" "}
                <span className="text-zinc-700 dark:text-white">
                  strive for continous improvement
                </span>{" "}
                and that&#39;s what I aim for. With a deep passion for
                technology and an eagerness to expand the boundaries of possibility,
                I&apos;m excited about the future of my career 
                and am always on the lookout for new and exciting opportunities. 🙂
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-sm bg-zinc-900 text-zinc-100 dark:bg-gray-200 px-4 py-2 mr-2 mt-2 dark:text-gray-700 rounded font-bold prose-invert bg-white transition ease-in-out delay-0 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src={heroimage}
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type ExternalLinkProps = Readonly<{
  href: string
  children: ReactNode
}>

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex flex-row items-center justify-center w-full py-2 gap-1',
        'font-medium text-sm rounded-md hover:bg-accent/50',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
      )}
    >
      {children}
      <ArrowTopRightIcon className="size-3" />
    </a>
  )
}

export default AboutSection
