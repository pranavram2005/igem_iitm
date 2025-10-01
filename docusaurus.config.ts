import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IIT Madras iGEM 2025',
  tagline: 'International Genetically Engineered Machine Competition',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://2025.igem.wiki/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/iit-madras',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iit-madras', // Usually your GitHub org/user name.
  projectName: 'igem2025', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://gitlab.igem.org/2025/iit-madras',
          // Show only main headings in table of contents
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    navbar: {
      title: 'IIT Madras iGEM 2025',
      logo: {
        alt: 'IIT Madras Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Team',
          position: 'right',
          items: [
            
            {
              to: '/team/members',
              label: 'Members',
            },
            {
              to: '/team/attributions',
              label: 'Attributions',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Project',
          position: 'right',
          items: [
            {
              to: '/project/',
              label: 'Project Overview',
            },
            {
              to: '/project/description',
              label: 'Description',
            },
            {
              to: '/project/engineering',
              label: 'Engineering',
            },
            {
              to: '/project/results',
              label: 'Results',
            },
            {
              to: '/project/contribution',
              label: 'Contribution',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Wet Lab',
          position: 'right',
          items: [
            {
              to: '/wetlab/',
              label: 'Lab Overview',
            },
            {
              to: '/wetlab/experiments',
              label: 'Experiments',
            },
            {
              to: '/wetlab/notebook',
              label: 'Notebook',
            },
            {
              to: '/wetlab/safety-and-security',
              label: 'Safety & Security',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Dry Lab',
          position: 'right',
          items: [
            {
              to: '/drylab/',
              label: 'Dry Lab Overview',
            },
            {
              to: '/drylab/model',
              label: 'Modeling',
            },
            {
              to: '/drylab/software',
              label: 'Software',
            },
            {
              to: '/drylab/hardware',
              label: 'Hardware',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Engagement',
          position: 'right',
          items: [
            {
              to: '/engagement/',
              label: 'Engagement Overview',
            },
            {
              to: '/engagement/human-practices',
              label: 'Human Practices',
            },
            {
              to: '/engagement/education',
              label: 'Education',
            },
            {
              to: '/engagement/inclusivity',
              label: 'Inclusivity',
            },
          ],
        },
        {
          href: 'https://github.com/iit-madras/igem2025',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project',
          items: [
            {
              label: 'Description',
              to: '/project/description',
            },
            {
              label: 'Engineering',
              to: '/project/engineering',
            },
            {
              label: 'Results',
              to: '/project/results',
            },
          ],
        },
        {
          title: 'Lab Work',
          items: [
            {
              label: 'Experiments',
              to: '/wetlab/experiments',
            },
            {
              label: 'Notebook',
              to: '/wetlab/notebook',
            },
            {
              label: 'Safety',
              to: '/wetlab/safety-and-security',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/iit-madras/igem2025',
            },
            {
              label: 'iGEM',
              href: 'https://igem.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IIT Madras iGEM Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;