export async function getStaticPaths() {
 // https://jsonplaceholder.typicode.com/posts/${id}
 const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
 const data = await res.json();

 const posts = data;

 console.log(posts);

 const paths = posts.map((post) => ({
  params: { id: post.id},
 }));

  return {
    paths, fallback: false
    /* paths: [
      {
        params: {
          id: 
        }
      }
    ] */
  };
}

export async function getStaticProps( {params} ) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const data = await res.json();

  const posts = data;

  const post = posts.find((post) => post.id == params.id);

  return {
    props: {
      post,
    }
  }

}

export default function Post({post}) {
  return (
    <div>
      {post && (
        <>
        <h2>title: {post.title}</h2>
        <p>body: {post.body} </p>
        </>
      )}
    </div>
  )
}