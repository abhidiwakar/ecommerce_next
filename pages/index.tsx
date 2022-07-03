import type { GetServerSideProps, NextPage } from 'next'
import Layout from '../components/layout'
import prisma from '../lib/prisma'

const Home: NextPage = () => {
  return <Layout />
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const initCategory = await prisma.category.findFirst()
  if (!initCategory) {
    return {
      notFound: true
    }
  }

  return {
    redirect: {
      destination: `/${initCategory.slug}`,
      permanent: false
    }
  }
}