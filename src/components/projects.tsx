// Projects.tsx
"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import AnimatedButton from "./AnimatedButton";
import Project from "./project-card";
import SectionHeading from "./section-heading";

function getYouTubeVideoId(url: string) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsedUrl.pathname.split("/")[1] ?? null;
    } else if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsedUrl.pathname === "/watch") {
        return parsedUrl.searchParams.get("v");
      }
      return parsedUrl.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}

function getYouTubeEmbedUrl(url: string) {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

function getYouTubeThumbnailUrl(url: string) {
  const videoId = getYouTubeVideoId(url);
  // Changed `undefined` to `""` so it always returns a string
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  // Filter projects by category
  const reels = projectsData.filter((project) => project.category === "Reel");
  const longVideos = projectsData.filter(
    (project) => project.category === "Long Video"
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Podcast Reels</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-28">
        {reels.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={getYouTubeEmbedUrl(project.videoUrl)}
            thumbnailUrl={project.thumbnailUrl || getYouTubeThumbnailUrl(project.videoUrl)}
            category={project.category}
          />
        ))}
      </div>
      <SectionHeading>Talking Head Reels</SectionHeading>
      <div className="flex flex-row flex-wrap justify-center gap-8 mb-16">
        {longVideos.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            videoUrl={getYouTubeEmbedUrl(project.videoUrl)}
            thumbnailUrl={project.thumbnailUrl || getYouTubeThumbnailUrl(project.videoUrl)}
            category={project.category}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <AnimatedButton link="#" />
      </div>
    </section>
  );
}