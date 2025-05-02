import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6 text-[#02475b]">Apollo247 Clone</h1>
      <p className="mb-6 text-lg">
        Welcome to the Apollo247 Clone demo. This project includes only the doctors listing functionality.
      </p>
      <Link
        href="/doctors"
        className="bg-[#02475b] text-white py-3 px-6 rounded-full hover:bg-blue-700 transition"
      >
        View Doctors Listing
      </Link>
    </div>
  );
}