// import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import Layout from "../components/layout"
// import blogStyles from './blog.module.scss'
// import Head from "../components/head"

// const BlogPage = () => {

//   const data = useStaticQuery(graphql`
//     query {
//      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC } ) {
//       edges {
//         node {
//           title
//           slug
//           publishedDate(formatString:"MMMM Do, YYYY")
//         }
//       }
//      }
//     }
//   `)

//   //console.log(data)

//   return (
//     <Layout>
//       <Head title="Blog" />
//       <h1 className={blogStyles.heading}>Facio Ergo Sum</h1>
//       <h2 className={blogStyles.subtitle}>I Create Therefore I Am</h2>
//       <ol className={blogStyles.posts}>
//         {
//           data.allContentfulBlogPost.edges.map((edge) => {
//             return (
//               <li className={blogStyles.post}>
//                 <Link to={`/blog/${edge.node.slug}`}>
//                   <h2>{edge.node.title}</h2>
//                   <p>{edge.node.publishedDate}</p>
//                 </Link>
//               </li>
//             )
//           })
//         }
//       </ol>
//     </Layout>
//   )

// }
// export default BlogPage
