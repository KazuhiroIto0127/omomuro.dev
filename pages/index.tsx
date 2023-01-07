import Link from 'next/link'
import DateFormat from '@/components/date'
import Layout from '@/components/layout'
import { getSortedPostsData } from '@/lib/posts';
import HelloWorld from '@/components/HelloWorld'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }: { allPostsData: {date: string, title: string, id: string }[] }) {
  return (
    <Layout>
      <HelloWorld />

      <section className="m-3">
        <h2 className="text-2xl">Blog</h2>
        <ul className="">
          {allPostsData.map(({id, date, title}) => (
            <li className="border border-solid" key={id}>
              <Link href={`/posts/${id}`} className="text-xl text-blue-500">{title}</Link>
              <br />
              <small className="text-gray-500">
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}
