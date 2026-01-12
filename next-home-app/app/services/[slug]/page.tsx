import { getPageData } from "@/app/lib/cms";
import { notFound } from "next/navigation";
import PageRenderer from "@/app/components/PageRenderer";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // Fetch page data dynamically from CMS
  const pageData = await getPageData(slug);

  // If no page found, render 404
  if (!pageData?.data?.result) notFound();

  const page = pageData.data.result;

  return <PageRenderer page={page} />;
}
