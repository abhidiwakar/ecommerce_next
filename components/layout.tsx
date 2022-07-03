import Head from 'next/head'
import React from 'react'
import Header from './header'

interface LayoutProps {
    title?: String
    children?: JSX.Element | JSX.Element[],
    productSchema?: object
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/assets/favicon.png" type="image/png" />
                <title>{props?.title ?? "AB Commerce"}</title>
                {
                    props.productSchema && <script type='application/ld+json' dangerouslySetInnerHTML={{
                        __html: JSON.stringify(props.productSchema)
                    }} />
                }
            </Head>
            <Header />
            {
                props?.children
            }

        </>
    )
}
