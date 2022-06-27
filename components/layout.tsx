import Head from 'next/head'
import React from 'react'
import Header from './header'

interface LayoutProps {
    title?: String
    children?: JSX.Element
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>{props?.title ?? "AB Commerce"}</title>
            </Head>
            <Header />
            {
                props?.children
            }

        </>
    )
}
