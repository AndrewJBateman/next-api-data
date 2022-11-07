
async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/blog/records/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function PostPage({ params }: any) {
  const post = await getPost(params.id);

  return (
    <div>
      <h1>blog/{post.id}</h1>
      <div>
        <h3 className="text-blue-700">{post.title}</h3>
        <h5>{post.content}</h5>
        <p>Category: {post.category}</p>
        <p>Created: {post.created}</p>
      </div>
    </div>
  );
}