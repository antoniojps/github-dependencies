export const SITE_METADATA = {
  url:
    process.env.DEPLOY_ENV === 'production'
      ? 'https://github.antoniosantos.me'
      : 'https://github-graphs.vercel.app',
  title: 'Github Personal Statistics Graphs',
  description:
    'Generate your github usage graphs for your top dependencies and programming languages.',
  keywords: [
    'github year wrapped',
    'github  dependency usage graph ',
    'github programming languages usage graph',
  ],
  image: { src: '/share.jpg', width: 1686, height: 882 },
};
