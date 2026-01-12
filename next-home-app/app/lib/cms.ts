// src/lib/cms.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}
export async function fetchMenu() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/menus/findAllWebsiteMenu`,
    { cache: "no-store" } // disables caching, suitable for dynamic CMS data
  );

  if (!res.ok) {
    throw new Error("Failed to load menus");
  }

  return res.json(); // returns { result: [...] } or whatever your API sends
}


export async function getServiceBySlug(slug: string) {
  console.log('Fetching service for slug:', slug,`${process.env.NEXT_PUBLIC_API_URL}/pages/slug/${slug}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/slug/${slug}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    console.error('Failed to fetch:', res.status, res.statusText);
    return null;
  }
  const data = await res.json();
  console.log('Service data:', data);
  return data;
}

export async function getPageData(slug: string) {
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/pages/slug/${slug}`)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pages/slug/${slug}`,
    { cache: "no-store" } // or { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page data");
  }

  return res.json();
}