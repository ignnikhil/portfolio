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
import { useEffect, useState } from "react"
import { ExtendedNextPage } from "../types/next"
import BaseLayout from "../components/layout/BaseLayout"

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
          <div className="absolute inset-0">
            <div className="absolute inset-0 flex justify-between w-full h-full">
              <div className="w-[4px] bg-transparent"></div>
              {new Array(12).fill(null).map((_, i) => (
                <div key={i} className="w-[4px] bg-[#333]/10"></div>
              ))}
              <div className="w-[4px] bg-transparent"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-between w-full h-full">
              <div className="h-[4px] bg-transparent"></div>
              {new Array(7).fill(null).map((_, i) => (
                <div key={i} className="h-[4px] bg-[#333]/10"></div>
              ))}
              <div className="h-[4px] bg-transparent"></div>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(164.1deg, #0D0D0B 22.98%, rgba(22, 22, 19, 0.45) 37.59%, rgba(22, 22, 19, 0.44) 50.99%, #0D0D0B 66.82%)",
              }}
            />
            <svg
              className="absolute -mt-20 -ml-20 opacity-40"
              width="792"
              height="527"
              viewBox="0 0 792 527"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_94_121)">
                <path
                  d="M165.117 90.2277L151.428 96.5119C148.214 97.9877 145.363 100.152 143.077 102.851C133.086 114.652 136.612 132.672 150.313 139.838L170.722 150.511C173.678 152.057 176.805 153.25 180.04 154.066L371.442 202.34C381.324 204.832 391.476 206.093 401.667 206.093H524.388C581.208 206.093 630.707 167.353 644.361 112.198L651.904 81.7237C655.412 67.5523 656.382 52.8714 654.768 38.3617L646.56 -35.4223L634.116 -87.6394C632.133 -95.9602 626.059 -102.704 617.99 -105.542L610.811 -108.068C603.557 -110.62 595.513 -107.646 591.664 -100.988L568.848 -64.1939L551.564 -35.4223L543.315 -19.2841C536.598 -6.14182 524.595 3.51215 510.318 7.25531C502.524 9.29901 494.359 9.49646 486.475 7.83194L475.153 5.4417C462.422 2.75405 449.291 2.55806 436.485 4.86455L414.958 8.74193C408.965 9.82127 403.061 11.342 397.293 13.2916L375.911 20.5184C362.216 25.1472 349.439 32.1427 338.161 41.1868L336.84 42.2468C327.291 49.9045 316.658 56.1013 305.288 60.6343L287.232 67.8329C272.67 73.6384 257.137 76.6207 241.461 76.6207H233.585C225.727 76.6207 217.886 77.3702 210.17 78.8589L186.034 83.5159C178.818 84.9082 171.796 87.1615 165.117 90.2277Z"
                  fill="#A53AD7"
                  fillOpacity="0.1"
                />
              </g>
              <g filter="url(#filter1_f_94_121)">
                <path
                  d="M-19.0485 258.622L-33.045 265.043C-36.3273 266.549 -39.2385 268.758 -41.5729 271.513C-51.7827 283.564 -48.1815 301.974 -34.1833 309.29L-13.318 320.194C-10.2999 321.772 -7.10705 322.989 -3.80497 323.821L192.15 373.212C202.026 375.701 212.172 376.96 222.357 376.96H350.27C407.082 376.96 456.577 338.229 470.237 283.083L478.558 249.493C482.07 235.313 483.041 220.623 481.425 206.104L472.986 130.291L460.271 76.9721C458.243 68.4664 452.032 61.5738 443.783 58.6734L436.445 56.0937C429.033 53.4877 420.816 56.5257 416.882 63.3264L393.564 100.906L375.899 130.291L367.476 146.76C360.607 160.192 348.336 170.057 333.742 173.881C325.779 175.967 317.438 176.169 309.383 174.47L297.807 172.027C284.796 169.282 271.376 169.082 258.289 171.438L236.085 175.435C230.096 176.513 224.194 178.032 218.429 179.979L195.92 187.582C182.229 192.206 169.455 199.196 158.178 208.233L156.133 209.873C146.585 217.525 135.953 223.717 124.586 228.246L105.255 235.948C90.7007 241.747 75.1765 244.725 59.5095 244.725H50.6566C42.8032 244.725 34.9678 245.474 27.2565 246.961L2.3232 251.768C-5.04913 253.19 -12.2243 255.491 -19.0485 258.622Z"
                  fill="#3AD7D7"
                  fillOpacity="0.1"
                />
              </g>
              <g filter="url(#filter2_f_94_121)">
                <path
                  d="M119.313 273.353L104.016 280.374C100.426 282.021 97.2423 284.437 94.6897 287.451C83.5277 300.631 87.4654 320.76 102.771 328.761L125.577 340.684C128.878 342.41 132.37 343.742 135.982 344.652L351.579 399.01C361.458 401.501 371.607 402.761 381.795 402.761H532.06C588.876 402.761 638.373 364.025 652.03 308.875L663.796 261.359C667.307 247.183 668.277 232.497 666.662 217.983L657.208 133.018L643.306 74.705C641.089 65.4075 634.301 57.8728 625.285 54.7017L617.264 51.8808C609.16 49.0307 600.175 52.3527 595.874 59.7891L570.383 100.884L551.072 133.018L541.86 151.035C534.353 165.718 520.941 176.503 504.988 180.684C496.281 182.967 487.161 183.187 478.354 181.328L465.701 178.658C451.477 175.657 436.807 175.438 422.5 178.014L397.39 182.535C391.4 183.613 385.497 185.133 379.73 187.082L352.392 196.318C338.699 200.945 325.924 207.937 314.647 216.978L309.481 221.119C299.933 228.774 289.3 234.969 277.932 239.499L253.156 249.374C238.598 255.176 223.069 258.157 207.398 258.157H194.419C186.564 258.157 178.726 258.905 171.012 260.393L142.68 265.858C134.619 267.413 126.774 269.929 119.313 273.353Z"
                  fill="#3A4AD7"
                  fillOpacity="0.1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_94_121"
                  x="13.7637"
                  y="-232.57"
                  width="765.355"
                  height="562.256"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="61.7967"
                    result="effect1_foregroundBlur_94_121"
                  />
                </filter>
                <filter
                  id="filter1_f_94_121"
                  x="-171.012"
                  y="-68.4268"
                  width="776.789"
                  height="568.98"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="61.7967"
                    result="effect1_foregroundBlur_94_121"
                  />
                </filter>
                <filter
                  id="filter2_f_94_121"
                  x="-35.2947"
                  y="-72.7266"
                  width="826.308"
                  height="599.081"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="61.7967"
                    result="effect1_foregroundBlur_94_121"
                  />
                </filter>
              </defs>
            </svg>
          </div>
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
                <div>
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
                </div>
                <div>
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
    </>
  )
}

HomePage.Layout = BaseLayout

export default HomePage
