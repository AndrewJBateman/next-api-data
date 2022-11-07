import PocketBase from "pocketbase";
import Link from "next/link";
import CreatePost from "./CreatePost";

async function getBlog() {
  const client = new PocketBase("http://127.0.0.1:8090");

  try {
    const result = await client.records.getList("blog");
    return result?.items as any[];
  } catch (error) {
    console.log("Error:", error);
  }
}

export default async function BlogPage() {
  const blog = await getBlog();

  return (
    <div>
      <h1 className="text-blue-700">Blog</h1>
      <div className="text-blue-900">
        {blog?.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>

      <CreatePost />
    </div>
  );
}

function Post({ post }: any) {
  const { id, title, category } = post || {};

  return (
    <Link href={`/blog/${id}`}>
      <div className="">
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
    </Link>
  );
}
