import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const BaseLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0D0D0B] font-sans text-[#F3F3F3] antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
