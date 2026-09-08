import { SpotifyTopArtists } from "@/components/spotify-top-artists";

// Keep projects off the public site until their write-ups are ready.
const showProjects = false;

const projects = [
  {
    name: "Goalstreak",
    description: "A social goal tracker for building and maintaining daily streaks with friends.",
    stack: "Next.js · Spring Boot · MongoDB",
    links: [{ label: "source", href: "https://github.com/dxyu05/goalstreak-app" }],
  },
  {
    name: "Baseball",
    description: "A full-stack project for exploring baseball data and statistics.",
    stack: "TypeScript · Python",
    links: [
      { label: "live site", href: "https://baseball-alpha.vercel.app" },
      { label: "source", href: "https://github.com/dxyu05/baseball" },
    ],
  },
];

const experience = [
  {
    company: "Roblox",
    role: "Software Engineer Intern",
    dates: "May – Aug 2026",
    location: "San Mateo, CA",
    summary:
      "I worked on Service Management, the team behind an internal service for deployment orchestration. I owned two projects across the team’s deployment and AI tooling.",
    projects: [
      {
        name: "Deployment agent",
        description:
          "Built and launched an AI agent inside the service management product to help developers work with deployment workflows. I added tool-calling into Go APIs for deployment observability and supported 70+ developers across 300+ sessions with 99% satisfaction.",
      },
      {
        name: "Session sharing",
        description:
          "Shipped sharing for an AI agent orchestration tool, letting users share, view, and fork Claude Code, Codex, and Cursor sessions. I designed the RBAC model around team, organization, and company UIDs and instrumented both projects with Prometheus and Grafana.",
      },
    ],
  },
  {
    company: "Workday",
    role: "Software Engineer Intern (Security)",
    dates: "May – Aug 2025",
    location: "McLean, VA",
    summary:
      "I worked on identity and access management, improving how employees requested access, how applications were onboarded, and how managers completed quarterly reviews.",
    projects: [
      {
        name: "Access requests",
        description:
          "Built a proof of concept for migrating employee access requests from a ServiceNow-based process to an Okta-based workflow.",
      },
      {
        name: "SSO onboarding",
        description:
          "Created an automated workflow for onboarding SSO applications, reducing manual work by 70% and saving more than six hours of operational effort.",
      },
      {
        name: "Access reviews",
        description:
          "Built a Slack assistant to support managers conducting quarterly user access reviews. Using AWS Bedrock, S3, and Lambda, it saved teams 38 hours across 150+ requests and shortened support resolution by more than 30 minutes.",
      },
    ],
  },
  {
    company: "Hack4Impact-UMD",
    role: "Software Engineer",
    dates: "Aug 2024 – Jan 2026",
    location: "College Park, MD",
    summary:
      "I collaborated with teams of 10+ students to build full-stack products for local nonprofit organizations.",
    projects: [
      {
        name: "Rise DC",
        description:
          "Created a customization feature with 40 accessible icon mappings during the Microsoft Global Hackathon.",
      },
      {
        name: "FFA-DC",
        description:
          "Built a customer profile system with Google Place Autocomplete that reduced client onboarding time by 30%.",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[680px] px-4 py-5 sm:px-6 sm:py-10">
      <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-ink pb-2">
        <a href="#top" className="name-mark font-medium no-underline">
          Daniel Yu
        </a>
        <nav aria-label="Contact links" className="flex gap-5 text-sm">
          <a href="mailto:dxyy05@gmail.com">Email</a>
          <a href="https://github.com/dxyu05" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-yu05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <section id="top" className="pt-12">
        <h1 className="text-[2.5rem] font-medium leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
          Hi, I&apos;m Daniel!
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-muted">
          I&apos;m a senior at the University of Maryland studying Computer Science and Applied
          Mathematics. I&apos;m a software engineer who&apos;s interested in distributed systems,
          infrastructure, and security. I&apos;ve also had the chance to intern at Roblox and Workday.
        </p>
        <p className="mt-4 max-w-xl leading-7 text-muted">
          When I&apos;m not in front of my computer, I&apos;m usually spending time with family, playing
          or following baseball, or rock climbing!
        </p>
      </section>

      <SpotifyTopArtists />

      <section aria-labelledby="experience-heading" className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 id="experience-heading" className="font-medium">
            Experience
          </h2>
          <span className="text-xs text-soft">2024–26</span>
        </div>

        <div className="grid gap-4">
          {experience.map((item, index) => (
            <article key={item.company} className="project-sheet">
              <div className="flex gap-4">
                <span className="project-number shrink-0" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-medium text-ink">{item.company}</h3>
                      <p className="mt-0.5 text-sm text-muted">{item.role}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-soft">{item.dates}</p>
                  </div>
                  <p className="mt-2 text-xs text-soft">{item.location}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
                  <ul className="mt-4 grid list-disc gap-3 pl-5 marker:text-primary">
                    {item.projects.map((project) => (
                      <li key={project.name} className="pl-1 text-sm leading-6 text-muted">
                        <span className="font-medium text-ink">{project.name}.</span>{" "}
                        {project.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {showProjects && (
        <section aria-labelledby="work-heading" className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 id="work-heading" className="font-medium">
              Projects
            </h2>
            <span className="text-xs text-soft">01–02</span>
          </div>

          <div className="grid gap-4">
            {projects.map((project, index) => (
              <article key={project.name} className="project-sheet">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-ink/20 pt-3">
                  <p className="font-mono text-[11px] text-soft">{project.stack}</p>
                  <div className="flex gap-4 text-sm">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-14 flex items-center justify-between border-t border-ink py-3 text-xs text-soft">
        <span>Daniel Yu</span>
        <a href="#top">back to top ↑</a>
      </footer>
    </main>
  );
}
