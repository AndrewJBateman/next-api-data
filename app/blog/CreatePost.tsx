"use client"; // only render in browser, not server

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const create = async () => {
    const client = new PocketBase("http://127.0.0.1:8090");

    try {
      await client.records.create("blog", {
        title,
        content,
        category,
      });
    } catch (error) {
      console.log("Error:", error);
    }

    setTitle("");
    setContent("");
    setCategory("");

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
