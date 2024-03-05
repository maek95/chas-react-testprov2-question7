import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();

  return {
    props: {
      posts: data, // hämtar allt? bara lång array utan namn, inte t.ex. articles
    },

  }
}

export default function Home( {posts} ) {

  //console.log(posts);

  const firstTenPosts = posts.filter( (post) => post.id < 10
  )
  console.log(firstTenPosts);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>10 posts: </p>

      <ul>
       {/*  
       Object.values, annars funkar det inte? kanske hämta posts i en variabel ovanför innan så slipper vi använda object values?
       {posts.map( (post) => (
          <li key={post.id}>
            {Object.values(post.title)} 
          </li>
        ))
        } */}
        {firstTenPosts.map( (post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}><h2>{post.title}</h2></Link>
          </li>
        ))
        }
      </ul>
    </main>
  );
}
