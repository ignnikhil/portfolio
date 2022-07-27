import Head from "next/head"
import GirdBackground from "../../components/GridBackground"
import BaseLayout from "../../components/layout/BaseLayout"
import { ExtendedNextPage } from "../../types/next"
import Image from "next/image"

import nowandmeTherapyCaseStudyImage from "../../images/nowandme-x-therapy/nowandme-therapy-case-study.png"
import homeScreenImage from "../../images/nowandme-x-therapy/home-screen.png"
import navigationImage from "../../images/nowandme-x-therapy/navigation.png"
import therapistDetailsImage from "../../images/nowandme-x-therapy/therapist-details.png"

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
                  Now&amp;Me x Therapy
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
                  src={nowandmeTherapyCaseStudyImage}
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
              As a mental health brand and product, we are offering singular
              form of counselling and expressing themselves. Users should be
              able to talk to therapists on an urgent basis if the person wants
              to get an expert’s opinion on their health and find solutions to
              it. There needs to be a monetised aspect to the product which
              nudges the user to a paid product line that converts them into a
              paying customer.
            </p>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="max-w-6xl mx-auto font-display">
            <h3 className="font-semibold tracking-wide uppercase text-[#3EA465] text-lg">
              Goal
            </h3>
            <ul className="mt-5 font-medium text-[#C2C2C2] text-xl leading-loose list-inside list-disc pl-4">
              <li>
                Provide access to professional help to the users Introduce
              </li>
              <li>Monetisation on the platform.</li>
              <li>
                Understand user engagement and adoption with therapy as a
                feature.
              </li>
            </ul>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="flex max-w-6xl gap-10 mx-auto font-display">
            <div>
              <Image src={homeScreenImage} alt="Design of App Home Screen" />
              <div className="mt-5">
                <h5 className="text-xl font-bold">Home Screen</h5>
                <p className="text-[#C2C2C2] mt-3 leading-loose">
                  The platform should have a single marketplace to book sessions
                  wherein all therapists are listed. These therapists would be
                  onboarded by the Therapy Operations team basis out reach and
                  communication.
                </p>
              </div>
            </div>
            <div>
              <Image src={navigationImage} alt="Navigation Design of App" />
              <div className="mt-5">
                <h5 className="text-xl font-bold">Navigation</h5>
                <p className="text-[#C2C2C2] mt-3 leading-loose">
                  We added all important option in tab br which helps user to
                  easily navigate across different section. Like we made a
                  different section for bookings so that user don’t have to make
                  extra efforts to view all their bookings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-8">
          <div className="max-w-6xl mx-auto font-display">
            <Image src={therapistDetailsImage} alt="" />
            <div className="mt-5">
              <h5 className="text-xl font-bold">Therapist Details</h5>
              <p className="text-[#C2C2C2] mt-3 leading-loose">
                In this section we show all the important information about the
                particular therapist. E.g His/Her Education, Therapy Style,
                Personal Information and Pricing. We use these icons to show the
                different information and the reason behind using these icons is
                improve the visibilty and its also helps in understanding the
                what is information about easily.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

HomePage.Layout = BaseLayout

export default HomePage
