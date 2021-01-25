import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/Head";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
// import useHooks from 'next/router'

// (공통) Post React Component
export default function Post({postData}) {
  if (!postData) return null
  const {id, title, date, contentHtml} = postData
  return (
    <Layout home={false}>
      <Head><title>{title}</title></Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date}/>
        </div>
        <div dangerouslySetInnerHTML={{__html: contentHtml}}/>
      </article>
    </Layout>
  );
}
// 1.getStaticPaths
// 동적으로 요청할 수 있는 path 목록을 리턴한다.
// DB source, 외부 api network 요청 처리 모두 가능
export async function getStaticPaths() {
  // list up paths
  const paths = getAllPostIds()
  // console.log(paths)

  // Return a list of possible value for id
  return {
    paths,
    fallback: false,
  }
}

// 2. getStaticProps
// 컴포넌트에 필요한 Data를 페치이하여 (공통)Post 컴포넌트로 props 넘긴다.
export async function getStaticProps({params}) {
  // console.log({ params }) // { params: { id: 'ssg-ssr' } }

  // fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    }
  }
}
