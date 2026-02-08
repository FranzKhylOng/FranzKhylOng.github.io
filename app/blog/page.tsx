import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container max-w-screen-md mx-auto px-4 md:px-8 py-12 md:py-20">
      <h1 className="text-4xl font-bold mb-12 tracking-tight">Blog</h1>
      <div className="space-y-12">
        {allPostsData.map(({ slug, date, title, excerpt }) => (
          <article key={slug} className="group">
            <Link href={`/blog/${slug}`} className="block">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                  </h2>
                  <time className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded shrink-0 ml-4">
                    {date}
                  </time>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {excerpt}
                </p>
                <div className="text-sm font-medium text-primary flex items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-200">
                  Read more &rarr;
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
