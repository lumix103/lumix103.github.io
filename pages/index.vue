<template>
  <section
    class="border-border flex h-full w-full flex-col items-center justify-center gap-2 border-b"
  >
    <h1 class="text-4xl font-bold">Fabian Torres</h1>
    <p>Full Stack Developer</p>
    <ul class="flex gap-2">
      <li>
        <a href="https://www.linkedin.com/in/fabian-r-torres/"
          ><Icon class="size-8" mode="svg" name="uil:linkedin"
        /></a>
      </li>
      <li>
        <a href="https://github.com/lumix103"
          ><Icon class="size-8" mode="svg" name="uil:github"
        /></a>
      </li>
      <!-- <li>
        <a href="#"
          ><Icon class="size-8" mode="svg" name="uil:file-download-alt"
        /></a>
      </li> -->
      <li>
        <a href="mailto:fabiant@protonmail.com"
          ><Icon class="size-8" mode="svg" name="uil:envelope"
        /></a>
      </li>
    </ul>
  </section>
  <section id="experience" class="relative flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Experience</h1>

    <div v-for="(experience, index) in experiences" :key="index">
      <Card>
        <h2 class="px-2 pt-2 font-bold">
          <a v-if="experience.link" :href="experience.link" class="underline">
            {{ experience.title }}
          </a>
          <span v-else>
            {{ experience.title }}
          </span>
          •
          <span class="text-sm font-thin">{{ experience.time }}</span>
        </h2>
        <img
          v-if="experience.imgURL"
          :src="experience.imgURL"
          alt="Experience Image"
          class="h-32 w-full object-cover object-top"
        />
        <h3 class="px-2 font-thin">{{ experience.role }}</h3>
        <ul class="space-y-2 px-2 pb-2">
          <li v-for="(desc, idx) in experience.desc" :key="idx">
            {{ desc }}
          </li>
        </ul>
      </Card>
    </div>

    <div
      class="from-primary to-secondary motion-safe:animate-spin-slow absolute inset-0 -z-10 m-auto size-64 rounded-full bg-gradient-to-r blur-3xl"
    />
  </section>
  <section id="projects" class="relative flex flex-col gap-4">
    <h1 class="text-3xl font-bold">Projects</h1>
    <div v-for="(project, index) in projects" :key="index">
      <Card>
        <h2 class="px-2 pt-2 font-bold">
          <a v-if="project.link" :href="project.link" class="underline">
            {{ project.title }}
          </a>
          <span v-else>
            {{ project.title }}
          </span>
          <span class="text-sm font-thin"> | {{ project.type }}</span>
        </h2>

        <ul
          class="*:bg-primary flex flex-wrap gap-2 px-2 text-sm font-thin *:h-5 *:w-14 *:truncate *:rounded-md *:text-center"
        >
          <li v-for="(keyword, idx) in project.keywords" :key="idx">
            {{ keyword }}
          </li>
        </ul>
        <ul class="space-y-2 px-2 pb-2">
          <li v-for="(desc, idx) in project.desc" :key="idx">
            {{ desc }}
          </li>
        </ul>
      </Card>
    </div>
    <div
      class="from-primary to-secondary motion-safe:animate-spin-slow absolute inset-0 -z-10 m-auto size-64 rounded-full bg-gradient-to-r blur-3xl"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          title: "All Tech Solutions",
          time: "November 2024 - Present",
          imgURL: "/img/alltechsolutions.webp",
          link: "https://alltechsolutions.org/",
          role: "Software Engineer",
          desc: [
            "• Implemented and developed responsive, user-friendly web pages in WordPress to meet accessibility standards and align with client branding guidelines.",
            "• Collaborated with team members to implement enhancements, integrate CMS functionalities, and troubleshoot web issues, ensuring timely delivery of projects",
          ],
        },
        {
          title: "Endeavor Assets",
          time: "May 2024 - Present",
          imgURL: "/img/bullrunmarkets.webp",
          link: "https://bullrunmarkets.com/",
          role: "Full Stack Developer",
          desc: [
            "• Integrated Square and NowPayments APIs to develop an automated system leveraging Web Hooks, improving user access to paid features by 50%.",
            "• Designed interactive prototypes in Figma for new components, reducing iteration times by 25% through enhanced cross-team collaboration.",
            "• Developed and maintained features using Remix, React, and TailwindCSS, achieving a 100% increase in development speed by adhering to clean, scalable code practices.",
          ],
        },
        {
          title: "The National Data Mine Network",
          time: "August 2022 - December 2023",
          imgURL: null,
          link: null,
          role: "Researcher",
          desc: [
            "• Processed and cleaned large datasets (1M+ rows) using Python and R, gaining proficiency in data wrangling and preparation for analysis.",
            "• Created visualizations and graphs with libraries such as Matplotlib, delivering insights that clarified complex patterns and trends in the data.",
          ],
        },
      ],
      projects: [
        {
          title: "MedConnect",
          type: "Mock Medical Dashboard",
          link: "https://github.com/lumix103/cse-4050-project",
          keywords: ["Go", "HTML", "CSS"],
          desc: [
            "• Designed a mock medical dashboard for scheduling and post-appointment reviews, handling up to 500 simultaneous requests with optimized server responses.",
            "• Secured sensitive patient-doctor data with JWT authorization, achieving a 100% compliance rate with best practices for security.",
          ],
        },
        {
          title: "Elemental Quest",
          type: "Video Game",
          link: "https://github.com/lumix103/Elemental-Quest",
          keywords: ["C#", "Unity"],
          desc: [
            "• Led a team of 6 to design and develop a co-op 2D platformer game, delivering the project on time by effectively applying Agile methodologies.",
            "• Created 5+ levels using Unity's physics engine, optimizing for gameplay and user experience.",
          ],
        },
      ],
    };
  },
};
</script>
