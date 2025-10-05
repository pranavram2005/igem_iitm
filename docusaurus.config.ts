import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EPIC',
  tagline: 'International Genetically Engineered Machine Competition',
  favicon: 'https://static.igem.wiki/teams/5657/navbar/logo3.webp',

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
      title: 'EPIC',
      logo: {
        alt: 'IIT Madras iGEM Logo',
        src: 'https://static.igem.wiki/teams/5657/navbar/logo3.webp',
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
              to: '/team',
              label: 'TEAM',
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
          title: 'Title Sponsors',
          items: [
            {
              html: `
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Title Sponsor 1
                    </div>
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Title Sponsor 2
                    </div>
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Title Sponsor 3
                    </div>
                  </div>
                  <h4 style="color: white; margin: 1rem 0 0.5rem 0; font-size: 1rem; font-weight: 600;">Other Sponsors</h4>
                  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Other Sponsor 1
                    </div>
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Other Sponsor 2
                    </div>
                    <div style="width: 100px; height: 60px; background: rgba(255,255,255,0.1); border: 2px dashed rgba(255,255,255,0.3); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.7rem; text-align: center;">
                      Other Sponsor 3
                    </div>
                  </div>
                </div>
              `,
            },
          ],
        },
        {
          title: 'SOCIAL MEDIA',
          items: [
            {
              html: `
                <div style="display: flex; gap: 1.5rem; align-items: center; justify-content: center;">
                  <a href="https://instagram.com/yourteam" target="_blank" rel="noopener noreferrer" 
                     style="display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%; text-decoration: none; transition: all 0.3s ease;"
                     onmouseover="this.style.background='#E4405F'; this.style.transform='scale(1.1)'"
                     onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.transform='scale(1)'"
                     title="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/yourteam" target="_blank" rel="noopener noreferrer" 
                     style="display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%; text-decoration: none; transition: all 0.3s ease;"
                     onmouseover="this.style.background='#333'; this.style.transform='scale(1.1)'"
                     onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.transform='scale(1)'"
                     title="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="mailto:team@iitm.igem.org" 
                     style="display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 50%; text-decoration: none; transition: all 0.3s ease;"
                     onmouseover="this.style.background='#EA4335'; this.style.transform='scale(1.1)'"
                     onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.transform='scale(1)'"
                     title="Gmail">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.007L12 11.23 22.357 3.82h.007c.904.001 1.636.733 1.636 1.637z"/>
                    </svg>
                  </a>
                </div>
              `,
            },
          ],
        },
      ],
      copyright: `
        <div style="text-align: center; margin-top: 2rem;">
          <h3 style="color: white; margin-bottom: 1.5rem; font-weight: 700; font-size: 1.8rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">EPIC</h3>
          <p style="margin-bottom: 0.5rem; color: rgba(255,255,255,0.9);">
            © ${new Date().getFullYear()} - Content on this site is licensed under a 
            <a href="https://creativecommons.org/licenses/by/4.0/" rel="license" style="color: #3bdd46; text-decoration: none;">
              Creative Commons Attribution 4.0 International license
            </a>.
          </p>
          <p style="margin: 0; color: rgba(255,255,255,0.9);">
            The repository used to create this website is available at 
            <a href="https://gitlab.igem.org/2025/iit-madras" style="color: #3bdd46; text-decoration: none;">
              gitlab.igem.org/2025/iit-madras
            </a>.
          </p>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;