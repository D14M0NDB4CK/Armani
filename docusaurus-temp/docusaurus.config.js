// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Armani Bot',
  favicon: 'img/favicon/favicon.ico',

  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'CountBBs Cavern',
  projectName: 'Armani Bot', 
  // Broken Links
  onBrokenLinks: 'throw',
  markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},
  // Language
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          
        },
        blog: {
          routeBasePath: 'Updates',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/brand/armanibot-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Armani Bot',
        logo: {
          alt: 'Armani Bot Logo',
          src: 'img/armanibot/armanibot_headshot.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About Us',
            position: 'left',
            label: 'About',
          },
          {to: '/Updates', label: 'Updates', position: 'left'},
          {
            href: 'https://discord.gg/5e2vk6wf3u',
            label: 'Support',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About Us',
                to: '/docs/About Us',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord Community & Support',
                href: 'https://discord.gg/5e2vk6wf3u',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Update Notes',
                to: '/Update Notes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/armanibot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Armani Bot.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
