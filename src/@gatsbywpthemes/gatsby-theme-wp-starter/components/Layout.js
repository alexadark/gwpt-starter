import React from "react"
import { Layout as StyledLayout } from "starterComponents/Layout"
import { HeadlessProvider } from '@wpengine/headless/react';
import "../../../styles/style.scss"

export const Layout = (props) => <HeadlessProvider pageProps={props} {...props} >
<StyledLayout />
</HeadlessProvider>
