'use client'
import { motion } from 'framer-motion'
import { XIcon, ChevronDown } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { Footer } from './footer'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.5,
}

const VIEWPORT = { once: true, amount: 0.2 } as const

const HERO_LINKS = [
  { label: 'email', link: 'mailto:digraham@umich.edu' },
  ...SOCIAL_LINKS,
]

type ProjectMediaProps = {
  src: string
}

function ProjectMedia({ src }: ProjectMediaProps) {
  const isVideo = /\.(mp4|webm|mov)(\?.*)?$/i.test(src)

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        ) : (
          <img
            src={src}
            alt="project preview"
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        )}
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          ) : (
            <img
              src={src}
              alt="project preview enlarged"
              className="aspect-video h-[50vh] w-full rounded-xl object-contain md:h-[70vh]"
            />
          )}
        </MorphingDialogContent>

        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Personal() {
  return (
    <main className="relative">
      {/* ---------- Landing / hero (pinned, gets covered on scroll) ---------- */}
      <section className="sticky top-0 flex h-screen flex-col justify-center px-4">
        <motion.div
          className="mx-auto w-full max-w-screen-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="font-[family-name:var(--font-newsreader)] text-5xl font-medium tracking-tight text-black sm:text-6xl dark:text-white">
            Drake Graham
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
            engineer
          </p>
          <p className="mt-6 max-w-md text-zinc-600 dark:text-zinc-400">
            Hello! I’m interested in machine learning and C++. I also love
            Michigan sports and Manchester City.
          </p>

          <nav className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm lowercase">
            {HERO_LINKS.map((item, i) => (
              <span key={item.label} className="flex items-center gap-x-3">
                {i > 0 && <span className="text-zinc-300 dark:text-zinc-700">·</span>}
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-zinc-600 underline-offset-4 transition-colors hover:text-black hover:underline dark:text-zinc-400 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </span>
            ))}
          </nav>
        </motion.div>

        <a
          href="#content"
          aria-label="Scroll to content"
          className="absolute inset-x-0 bottom-10 mx-auto flex w-fit flex-col items-center text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* ---------- Content curtain (rises over the hero) ---------- */}
      <div
        id="content"
        className="relative z-10 rounded-t-[2.5rem] border-t border-zinc-100 bg-white shadow-[0_-24px_48px_-24px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="mx-auto w-full max-w-screen-sm space-y-16 px-4 py-20 sm:py-28">
          <motion.section
            variants={VARIANTS_SECTION}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 font-[family-name:var(--font-newsreader)] text-xl font-medium">
              Education
            </h3>
            <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.school}
                  className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
                >
                  <div className="min-w-0">
                    <h4 className="font-medium dark:text-zinc-100">{edu.degree}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {edu.school} — {edu.field}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-400 dark:text-zinc-500">
                    {edu.start} – {edu.end}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={VARIANTS_SECTION}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 font-[family-name:var(--font-newsreader)] text-xl font-medium">
              Selected Personal Projects
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <div key={project.name} className="space-y-2">
                  <div className="relative overflow-hidden rounded-xl ring-1 ring-zinc-100 dark:ring-zinc-800">
                    <ProjectMedia src={project.video} />
                  </div>
                  <div className="px-1">
                    <a
                      className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                      href={project.link}
                      target="_blank"
                    >
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                    </a>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={VARIANTS_SECTION}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 font-[family-name:var(--font-newsreader)] text-xl font-medium">
              Work Experience
            </h3>
            <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
              {WORK_EXPERIENCE.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-row justify-between gap-4 py-3 first:pt-0"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h4 className="font-medium dark:text-zinc-100">
                        {job.company}
                      </h4>
                      {job.status && (
                        <span className="inline-flex items-center rounded-full border border-zinc-200 px-2 py-0.5 text-xs font-normal text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                          {job.status}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400">{job.title}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      {job.start} – {job.end}
                    </p>
                    {job.location && (
                      <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        {job.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <Footer />
        </div>
      </div>
    </main>
  )
}
