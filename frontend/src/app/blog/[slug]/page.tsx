import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title={slug.replace(/-/g, " ")}
      description="Blog article detail — brief layout per wireframe Step 10."
      specRef={`Step 10 · /blog/${slug}`}
    />
  );
}
