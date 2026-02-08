import { getAllPostSlugs, getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

interface PostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <article className="container max-w-screen-md mx-auto px-4 md:px-8 py-12 md:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {postData.title}
        </h1>
        <time className="text-muted-foreground font-mono bg-muted px-3 py-1.5 rounded">
          {postData.date}
        </time>
      </header>
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <ReactMarkdown>{postData.content || ""}</ReactMarkdown>
      </div>
    </article>
  );
}
