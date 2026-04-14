import { notFound } from "next/navigation";
import Link from "next/link";
export const dynamic = "force-static";

// ✅ Static params
export async function generateStaticParams() {
  const res = await fetch("http://192.168.1.32:8000/api/services");

  if (!res.ok) return [];

  const data = await res.json();

  return data.map((item: any) => ({
    slug: String(item.slug),
  }));
}

// ✅ Page
export default async function Page({ params }: any) {
  const { slug } = await params;

  if (!slug) return notFound();

  const res = await fetch(
    `http://192.168.1.32:8000/api/services/${slug}`
  );

  if (!res.ok) return notFound();

  const service = await res.json();

  return (
  <div className="min-h-screen bg-white text-gray-800 px-6 py-16">

  {/* Container */}
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold 
      bg-gradient-to-r from-yellow-400 to-yellow-600 
      bg-clip-text text-transparent">
        {service.title}
      </h1>

      <p className="mt-4 text-black-500 text-lg max-w-2xl mx-auto">
        Premium 3D solutions designed with precision, creativity, and real-world impact.
      </p>
    </div>

    {/* Main Card */}
    <div className="grid md:grid-cols-2 gap-10 items-center 
    bg-white border border-yellow-200 
    rounded-3xl p-6 md:p-10 
    shadow-[0_10px_40px_rgba(250,204,21,0.2)] 
    relative overflow-hidden group">

      {/* Soft Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
      bg-gradient-to-r from-yellow-200/40 via-transparent to-yellow-300/40 blur-2xl"></div>

      {/* Image Section */}
      <div className="relative group">
        <div className="absolute -inset-1 
        bg-gradient-to-r from-yellow-300 to-yellow-500 
        rounded-2xl blur opacity-20 
        group-hover:opacity-40 transition duration-500"></div>

        <img
          src={service.image}
          alt={service.title}
          className="relative rounded-2xl w-full h-auto object-cover 
          transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          About This Service
        </h2>

        <div className="h-1 w-16 
        bg-gradient-to-r from-yellow-400 to-yellow-600 
        mb-6 rounded-full"></div>

        <p className="text-gray-600 leading-relaxed text-lg">
          {service.description}
        </p>

        {/* CTA */}
        <Link href="/contact">
          <button className="mt-8 px-6 py-3 rounded-xl 
          bg-yellow-400 text-black font-semibold
          hover:bg-yellow-500 
          hover:scale-105 transition duration-300 
          shadow-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-6 mt-14">

      {["High Quality", "Fast Delivery", "Professional Team"].map((item, i) => (
        <div 
          key={i} 
          className="p-6 rounded-2xl 
          bg-white border border-yellow-200 
          hover:border-yellow-400 
          hover:shadow-lg transition duration-300 text-center"
        >
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">
            {item}
          </h3>
          <p className="text-gray-500 text-sm">
            We ensure top-tier results with modern tools and expert workflow.
          </p>
        </div>
      ))}

    </div>

  </div>
</div>
  );
}