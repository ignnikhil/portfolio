import NextLink from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import useScrollPosition from "../../hooks/useScrollPosition"
import Router from "next/router"

const Header: React.FC = () => {
  const scrollY = useScrollPosition()
  return (
    <header
      className={`fixed z-50 w-full px-5 transition-all ${
        scrollY > 100 ? "py-8 backdrop-blur" : "py-16"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto font-medium">
        <Link href="/">
          <span
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Nikhil Singh.
            <span className="px-2 py-1 ml-3 text-xs font-medium tracking-wide text-white uppercase rounded-full bg-gradient-to-br from-amber-500 to-purple-500">
              wip
            </span>
          </span>
        </Link>
        <nav className="flex gap-8">
          <Link href="/">Work</Link>
          <Link href="/Nikhil's Resume.pdf">Resume</Link>
        </nav>
      </div>
    </header>
  )
}

const Link: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  const router = useRouter()

  const active = router.asPath === href

  return (
    <NextLink href={href} prefetch={false}>
      <a className={active ? "text-white" : "text-[#777777]"}>{children}</a>
    </NextLink>
  )
}

export default Header
