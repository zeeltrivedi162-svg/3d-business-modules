import { notFound } from "next/navigation";

type Service = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
};

// ✅ REQUIRED for static export
export async function generateStaticParams() {
  const res = await fetch("http://127.0.0.1:8000/api/services");
  const data: Service[] = await res.json();

  return data.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ Page component (server component)
export default async function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `http://127.0.0.1:8000/api/services/${params.slug}`
  );

  if (!res.ok) return notFound();

  const service: Service = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

      <img
        src={service.image}
        alt={service.title}
        className="w-full max-w-xl rounded-lg mb-4"
      />

      <p>{service.description}</p>
    </div>
  );
}