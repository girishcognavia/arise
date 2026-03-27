import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-8xl font-bold text-teal-700 sm:text-9xl">
        404
      </h1>

      <p className="mt-4 text-xl text-gray-600 sm:text-2xl">Page Not Found</p>

      <p className="mt-2 max-w-md text-gray-500">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}
