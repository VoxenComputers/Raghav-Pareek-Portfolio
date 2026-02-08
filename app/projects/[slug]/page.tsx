import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projects";

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#121212] text-white pt-24 pb-12 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    ← Back to Work
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <span className="text-blue-400 font-medium tracking-wide uppercase text-sm">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </div>

                {/* Visual Placeholder */}
                <div className={`w-full aspect-video rounded-2xl mb-12 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                    <span className="text-white/20 text-6xl font-bold uppercase tracking-widest mix-blend-overlay">
                        Project Preview
                    </span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 prose prose-invert prose-lg max-w-none">
                        <div className="whitespace-pre-line text-gray-300 leading-7">
                            {project.content}
                        </div>
                    </div>

                    {/* Sidebar / details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Technologies</h3>
                            <ul className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.liveLink && (
                            <div>
                                <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Links</h3>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                                >
                                    Visit Live Site ↗
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
