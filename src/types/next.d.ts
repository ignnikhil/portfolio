import { NextPage } from "next"
import React, { ReactNode } from "react"

export type ExtendedNextPage = NextPage<T> & {
  Layout?: React.FC<{ children?: ReactNode }>
}
