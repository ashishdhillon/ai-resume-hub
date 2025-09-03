import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "AI Resume Hub" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col items-center px-6">
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI Prompt & Resume Hub" />
      </Head>

      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <div className="text-xl font-bold">AI Prompt & Resume Hub</div>
        <nav className="flex-1 flex justify-center space-x-8 text-gray-700">
          <Link href="/resume">Resume AI</Link>
          <Link href="/prompts">AI Prompts</Link>
          <Link href="/jobs">Jobs & Blog</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Log In</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">Sign Up</button>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center">{children}</main>

      <footer className="w-full max-w-6xl text-center py-6 text-gray-500 border-t mt-10">
        © {new Date().getFullYear()} AI Resume Hub. All rights reserved.
      </footer>
    </div>
  );
}