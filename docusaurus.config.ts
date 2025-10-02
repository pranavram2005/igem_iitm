import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EPIC',
  tagline: 'International Genetically Engineered Machine Competition',
  favicon: 'https://static.igem.wiki/teams/5657/navbar/logo.webp',

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
          // editUrl: 'https://gitlab.igem.org/2025/iit-madras',
          // Show only main headings in table of contents
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: false,
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
    image: 'https://static.igem.wiki/teams/5657/navbar/logo.webp',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    navbar: {
      title: 'Epigenetic Programmable Intervention Control',
      logo: {
        alt: 'IIT Madras iGEM Logo',
        src: 'https://static.igem.wiki/teams/5657/navbar/logo.webp',
      },
      items: [
        {
          to: '/',
          label: 'HOME',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'PROJECTS',
          position: 'right',
          items: [
            {
              to: '/project-overview',
              label: 'OVERVIEW',
            },
            {
              to: '/project-description',
              label: 'DESCRIPTION',
            },
            {
              to: '/engineering',
              label: 'ENGINEERING SUCCESS',
            },
            {
              to: '/results',
              label: 'RESULTS',
            },
            {
              to: '/future-directions',
              label: 'FUTURE DIRECTIONS',
            },
            {
              to: '/contribution',
              label: 'CONTRIBUTIONS',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'WET LAB',
          position: 'right',
          items: [
            {
              to: '/experiments',
              label: 'EXPERIMENTS',
            },
            {
              to: '/notebook',
              label: 'NOTEBOOK',
            },
            {
              to: '/safety-and-security',
              label: 'SAFETY',
            },
            {
              to: '/plant',
              label: 'PART COLLECTION',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'DRY LAB',
          position: 'right',
          items: [
            {
              to: '/software',
              label: 'SOFTWARE',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'HUMAN PRACTICES',
          position: 'right',
          items: [
            {
              to: '/human-practices',
              label: 'iHP',
            },
            {
              to: '/education',
              label: 'Education',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'TEAM',
          position: 'right',
          items: [
            {
              to: '/attributions',
              label: 'ATTRIBUTIONS',
            },
            {
              to: '/members',
              label: 'MEMBERS',
            },
          ],
        },
        {
          href: 'https://gitlab.igem.org/2025/iit-madras',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'PROJECTS',
          items: [
            {
              label: 'OVERVIEW',
              to: '/project-overview',
            },
            {
              label: 'DESCRIPTION',
              to: '/project-description',
            },
            {
              label: 'ENGINEERING SUCCESS',
              to: '/engineering',
            },
            {
              label: 'RESULTS',
              to: '/results',
            },
          ],
        },
        {
          title: 'LAB WORK',
          items: [
            {
              label: 'EXPERIMENTS',
              to: '/experiments',
            },
            {
              label: 'NOTEBOOK',
              to: '/notebook',
            },
            {
              label: 'SAFETY',
              to: '/safety-and-security',
            },
          ],
        },
        {
          title: 'TEAM & PRACTICES',
          items: [
            {
              label: 'MEMBERS',
              to: '/members',
            },
            {
              label: 'ATTRIBUTIONS',
              to: '/attributions',
            },
            {
              label: 'iHP',
              to: '/human-practices',
            },
            {
              label: 'Education',
              to: '/education',
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