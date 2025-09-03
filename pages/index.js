import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="AI Resume Hub">
      <section className="text-center mt-20 max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-3">Trusted by thousands of learners</p>
        <h1 className="text-4xl font-bold leading-tight mb-4">
          10,000+ <span className="text-purple-600">AI Prompts</span> for Smarter Resumes & Jobs
        </h1>
        <p className="text-gray-600 mb-8">
          Outperform others with AI-powered resumes, curated prompts, and project showcases.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-full">Explore Prompts</button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-full">Play Game</button>
        </div>
      </section>
    </Layout>
  );
}