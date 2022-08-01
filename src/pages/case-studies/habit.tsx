import Head from "next/head"
import GirdBackground from "../../components/GridBackground"
import BaseLayout from "../../components/layout/BaseLayout"
import { ExtendedNextPage } from "../../types/next"
import Image from "next/image"

import habitCaseStudy from "../../images/habit/habit-case-study.png"
import homeScreenImage from "../../images/habit/home-screen.png"
import navigationImage from "../../images/habit/navigation.png"
import addingNewHabitImage from "../../images/habit/adding-new-habits.png"

import activeHabitImage from "../../images/habit/active-habit.png"
import insightImage from "../../images/habit/insight.png"

const HomePage: ExtendedNextPage = () => {
  return (
    <>
      <Head>
        <title>Nikhil Singh — Product Designer</title>
      </Head>

      <main>
        <section className="relative min-h-screen px-5 pb-20 pt-36">
          <GirdBackground />
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="bg-gradient-to-b from-[#057758BD] to-[#0596698F] font-medium px-5 py-3 text-[#29C182] inline-block rounded-full">
                  Case Study
                </span>
                <h1 className="mt-8 text-4xl font-semibold">
                  Habit – Track Daily Goals
                </h1>
                <p className="max-w-md mt-6 text-lg font-medium text-[#797978]">
                  We helped Sparkasse to enter a new era of online and mobile
                  banking, expanded their app portfolio and improved existing
                  products.
                </p>
              </div>
              <div className="flex-shrink-0 w-1/2">
                <Image
                  width={2260}
                  src={habitCaseStudy}
                  alt=""
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="max-w-6xl mx-auto font-display">
            <h3 className="font-semibold tracking-wide uppercase text-[#126AFE] text-lg">
              Overview
            </h3>
            <p className="mt-5 font-medium text-[#C2C2C2] text-xl leading-loose">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </p>
          </div>
        </section>

        <section className="px-5 py-8">
          <div className="flex max-w-6xl gap-10 mx-auto font-display">
            <div>
              <Image src={homeScreenImage} alt="Design of App Home Screen" />
              <div className="mt-5">
                <h5 className="text-xl font-bold">Home Screen</h5>
              </div>
            </div>
            <div>
              <Image src={navigationImage} alt="Navigation Design of App" />
              <div className="mt-5">
                <h5 className="text-xl font-bold">Navigation</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="max-w-6xl mx-auto font-display">
            <Image src={addingNewHabitImage} alt="" />
            <div className="mt-5">
              <h5 className="text-xl font-bold">Adding New Habit</h5>
            </div>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="flex max-w-6xl gap-10 mx-auto font-display">
            <div className="bg-[#141413] text-center px-20">
              <Image src={activeHabitImage} alt="Design of App Home Screen" />
              <div className="py-20">
                <h5 className="text-xl font-bold">Data Of Active Habit</h5>
              </div>
            </div>
            <div className="bg-[#141413] flex flex-col-reverse text-center px-20">
              <Image src={insightImage} alt="Navigation Design of App" />
              <div className="py-20">
                <h5 className="text-xl font-bold">Complete Insights</h5>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="px-5 pt-20">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <span className="inline-block bg-[#FFEACB] text-[#FF9700] font-medium text-lg px-6 py-2.5 rounded-full">
            Work in Progress
          </span>
          <h4 className="mt-5 text-5xl font-bold">
            And… That’s a <span className="text-[#14D87A]">wraaaap!</span>
          </h4>
          <p className="text-[#C2C2C2] mt-3 leading-loose font-display max-w-2xl mx-auto text-center">
            hope you found it useful and informative. Feel free to hit me up on
            any social media platform if you have any questions. I would be more
            than happy to have a chat with you.
          </p>
        </div>
      </section>
    </>
  )
}

HomePage.Layout = BaseLayout

export default HomePage
