import React from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import { format } from "date-fns";

export async function getData(slug) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    _createdAt,
    _updatedAt,
    publishedAt,
    categories,
    body,
    "mainImageUrl": mainImage.asset -> url,
    "author": author->{
      name,
      "authorImage": image.asset -> url
    } 
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogContent({ params }) {
  const data = await getData(params.slug);

  const publishedDate = new Date(data.publishedAt);
  const formattedDate = format(publishedDate, "do MMMM, yyyy");

  return (
    <main role="presentation" className="w-full h-[15em] px-[2%] md:px-0 flex flex-col gap-y-6">
      <Typography.p isGray>
        Blog {" > "} {params.slug}
      </Typography.p>
      <section className="mx-auto flex flex-col pb-24 prose prose-base prose-h1:font-semibold">
        <Image
          src={data.mainImageUrl}
          width={400}
          height={0}
          className="w-auto h-auto object-center rounded-lg"
          alt={data.title}
          title={data.title}
          aria-label={data.title}
          aria-labelledby={data.title}
        />
        <Typography.s>{formattedDate}</Typography.s>

        <PortableText value={data.body} />

        <span className="flex flex-col gap-y-2 ml-auto my-0 p-0">
          <Typography.p>Written by</Typography.p>
          <span className="flex items-center gap-x-2">
            <Image
              src={data.author.authorImage}
              width={48}
              height={48}
              alt={data.author.name}
              title={data.author.name}
              aria-label={data.author.name}
              aria-labelledby={data.author.name}
              className="w-fit h-fit rounded-full"
            />
            <Typography.p>{data.author.name}</Typography.p>
          </span>
        </span>
      </section>
    </main>
  );
}
