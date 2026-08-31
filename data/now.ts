/**
 * Content for the /now page — a snapshot of what has your attention right now.
 *
 * This is seeded from the About page so the route ships with something real;
 * rewrite it in your own words and bump `updated` whenever things change.
 */
const now = {
  updated: '2026-08-31',
  intro:
    "A snapshot of what I'm focused on at the moment — work, learning, and everything around it. It goes stale the way any snapshot does, so the date is part of the content.",
  sections: [
    {
      title: 'Building',
      items: [
        { text: 'Full stack work across cloud architecture and web applications.' },
        {
          text: 'This site — Next.js, Tailwind and contentlayer, open source on GitHub.',
          href: 'https://github.com/jvikraman/jvikraman.com',
        },
      ],
    },
    {
      title: 'Learning',
      items: [
        {
          text: 'Cloud architecture patterns, picking up where the OCI and AWS certifications left off.',
        },
        {
          text: 'Applied AI — retrieval, agents, and where they actually earn their keep in production.',
        },
      ],
    },
    {
      title: 'Writing',
      items: [
        {
          text: 'Working notes on AI and cloud, published as they get useful enough to share.',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Away from the keyboard',
      items: [
        { text: 'Travel and hikes, and generally being outdoors.' },
        { text: 'Detailing cars, which is at least half the appeal of owning one.' },
      ],
    },
  ],
}

export default now
