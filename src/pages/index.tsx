import avatarImage from "../images/avatar.png"
import cresentMoonEmoji from "../images/crescent-moon_emoji.png"
import videoGameEmoji from "../images/video-game_emoji.png"
import habitAppImage from "../images/habit_app.png"
import nowandmeTherapyAppImage from "../images/nowandme_therapy_app.png"
import nowandmeStatusFeatImage from "../images/feat_nowandme_status.png"
import nowandmeFriendFeatImage from "../images/feat_nowandme_friend.png"
import nowandmeTherapyFeatImage from "../images/feat_nowandme_therapy.png"
import nowandmeOnlineFeatImage from "../images/feat_nowandme_online.png"
import nowandmeConnectionsFeatImage from "../images/feat_nowandme_connnections.png"
import nowandmeNotificationsFeatImage from "../images/feat_nowandme_notifications.png"

import Image from "next/image"
import Head from "next/head"
import NextLink from "next/link"
import { useEffect, useState } from "react"
import { ExtendedNextPage } from "../types/next"
import BaseLayout from "../components/layout/BaseLayout"
import GirdBackground from "../components/GridBackground"

const HomePage: ExtendedNextPage = () => {
  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])
  return (
    <>
      <Head>
        <title>Nikhil Singh — Product Designer</title>
      </Head>

      <main>
        <section className="relative min-h-screen px-5 pt-56 pb-20">
          <GirdBackground />
          <div className="relative max-w-6xl px-20 mx-auto">
            <h1 className="font-semibold text-[7.5rem] leading-[1.15] tracking-tighter">
              <div className="flex items-center gap-4">
                <div className="flex mt-4">
                  <Image
                    src={avatarImage}
                    width={90}
                    height={90}
                    quality={100}
                    alt="Nikhil's Avatar"
                  />
                </div>
                <span
                  className="ml-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)",
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  designer
                </span>
                <span className="bg-gradient-to-b from-[#057758BD] to-[#0596698F] text-3xl font-medium px-7 py-3 leading-normal tracking-normal rounded-full -rotate-12 text-[#29C182]">
                  Product
                </span>
              </div>
              <div className="flex items-end gap-4">
                <span className="bg-gradient-to-b from-black mb-4 to-[#0C0C0C] flex px-8 py-4 rounded-full">
                  <Image
                    src={cresentMoonEmoji}
                    width={40}
                    height={40}
                    quality={100}
                    alt="Moon cresent emoji"
                  />
                </span>
                <svg
                  className="mt-6"
                  width="595"
                  height="106"
                  viewBox="0 0 620 106"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text x="-10" y="95" fill="url(#paint0_radial_1_86)">
                    batman fan.
                  </text>
                  <defs>
                    <radialGradient
                      id="paint0_radial_1_86"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(296.5 47.9699) rotate(90) scale(69.3369 382.613)"
                    >
                      <stop
                        stopColor={`rgba(${
                          isSafari ? "100,100,100,1" : "0,0,0,1"
                        })`}
                        stopOpacity="1"
                      />
                      <stop
                        offset="1"
                        stopColor="rgba(255,255,255,0)"
                        stopOpacity="0"
                      />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <span className="ml-24"></span>
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)",
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  gamer
                </span>
                <span className="bg-gradient-to-b ml-6 from-[#FF7171A3] -mb-5 to-[#FF7373A3] flex px-10 py-5 rounded-full">
                  <Image
                    src={videoGameEmoji}
                    width={48}
                    height={48}
                    quality={100}
                    alt="Video game emoji"
                  />
                </span>
              </div>
            </h1>
          </div>
        </section>
        <section className="px-5 py-20">
          <div className="max-w-6xl mx-auto">
            <div>
              <p className="text-5xl font-medium leading-relaxed">
                I design products that are built to last
                <br /> in a fast-acting world —
              </p>
              <p className="mt-5 text-xl font-medium">
                Prev at{" "}
                <a
                  href="https://nowandme.com"
                  rel="noreferrer"
                  target="_blank"
                  className="border-b border-current"
                >
                  Now&amp;Me
                </a>
              </p>
            </div>
            <div className="mt-20">
              <h4 className="uppercase text-lg tracking-wide font-medium text-[#646463]">
                Explore Case Studies
              </h4>
              <div className="grid grid-cols-2 gap-20 mt-8">
                <div className="relative">
                  <Image
                    src={nowandmeTherapyAppImage}
                    alt="Now&Me x Therapy"
                    layout="responsive"
                  />
                  <div className="mt-8 font-display">
                    <h5 className="text-xl font-semibold">Now&Me x Therapy</h5>
                    <p className="mt-4 text-lg leading-8 text-[#818180]">
                      We helped Sparkasse to enter a new era of online and
                      mobile banking, expanded their app portfolio and improved
                      existing products.
                    </p>
                  </div>
                  <NextLink href="/case-studies/nowandme-x-therapy">
                    <a className="absolute inset-0">
                      <span className="sr-only">Now&Me x Therapy</span>
                    </a>
                  </NextLink>
                </div>
                <div className="relative">
                  <Image
                    src={habitAppImage}
                    alt="Habit Building App"
                    layout="responsive"
                  />
                  <div className="mt-8 font-display">
                    <h5 className="text-xl font-semibold">
                      Habit Building App
                    </h5>
                    <p className="mt-4 text-lg leading-8 text-[#818180]">
                      We helped Sparkasse to enter a new era of online and
                      mobile banking, expanded their app portfolio and improved
                      existing products.
                    </p>
                  </div>
                  <NextLink href="/case-studies/habit">
                    <a className="absolute inset-0">
                      <span className="sr-only">Habit Building App</span>
                    </a>
                  </NextLink>
                </div>
                <div className="col-span-2">
                  <div className="bg-[#1818189C] h-96">{/* placeholder */}</div>
                  <div className="grid grid-cols-2 gap-20 mt-4 font-display">
                    <h5 className="text-xl font-semibold">Now&amp;Me x Quiz</h5>
                    <p className="text-lg leading-8 text-[#818180]">
                      We helped Sparkasse to enter a new era of online and
                      mobile banking, expanded their app portfolio and improved
                      existing products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="px-5 py-20">
          <div className="max-w-6xl mx-auto">
            <h4 className="uppercase text-lg tracking-wide font-medium text-[#646463]">
              Fun Work
            </h4>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="col-span-2">
                <Image
                  src={nowandmeStatusFeatImage}
                  alt="Now&Me status feature"
                />
              </div>
              <div>
                <Image src={nowandmeFriendFeatImage} />
              </div>
              <div>
                <Image src={nowandmeTherapyFeatImage} />
              </div>
              <div className="col-span-2">
                <Image src={nowandmeOnlineFeatImage} />
              </div>
              <div>
                <Image src={nowandmeConnectionsFeatImage} />
              </div>
              <div>
                <Image src={nowandmeNotificationsFeatImage} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="px-5">
        <div className="max-w-6xl mx-auto">
          <p className="font-medium leading-tight text-7xl">
            Ok <span className="text-[#8567FC] font-semibold">you</span> are
            here
            <br />
            Then why not say
            <br />
            <span className="font-semibold text-[#14D87A]">hellooooo 👋</span>
          </p>
        </div>
      </section>
    </>
  )
}

HomePage.Layout = BaseLayout

export default HomePage
