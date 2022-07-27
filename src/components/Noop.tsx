import React from "react"

const Noop: React.FC<{ children?: React.FC }> = ({ children }) => (
  <>{children}</>
)

export default Noop
