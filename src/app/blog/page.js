import Typography from "@/components/typography";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == "post"] {
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset -> url,
    "author": author->{
      name,
      "authorImage": image.asset -> url
    }
  }`;
  const data = await client.fetch(query);
  return Array.isArray(data) ? data : [];
}

export default async function Blog() {
  const data = await getData();

  return (
    <main role="presentation" className="w-full flex flex-col gap-y-4">
      <Typography.h2>Blog Posts</Typography.h2>
      <section className="px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group-hover">
        {data.map((item, idx) => (
          <Link
            key={idx}
            className="flex flex-col items-start bg-white shadow-md p-4 rounded-md cursor-pointer transition-all duration-150 ease-in hover:scale-105"
            href={`/blog/${item.slug}`}
            // target="_blank"
            prefetch
          >
            <span className="w-full h-[15em]">
              <Image
                src={item.mainImageUrl || "/vercel.svg"}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-full object-fill rounded-md"
              />
            </span>
            <Typography.h4 className="mt-4 text-xl font-semibold">{item.title}</Typography.h4>
            <Typography.p className="mt-2 text-gray-600">{item.author.name}</Typography.p>
          </Link>
        ))}
      </section>
    </main>
  );
}
