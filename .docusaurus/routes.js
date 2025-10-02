import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iit-madras/__docusaurus/debug',
    component: ComponentCreator('/iit-madras/__docusaurus/debug', 'cc8'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/config',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/config', 'cbb'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/content',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/content', 'ea9'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/globalData',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/globalData', '8a8'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/metadata',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/metadata', 'a57'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/registry',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/registry', 'af9'),
    exact: true
  },
  {
    path: '/iit-madras/__docusaurus/debug/routes',
    component: ComponentCreator('/iit-madras/__docusaurus/debug/routes', '37b'),
    exact: true
  },
  {
    path: '/iit-madras/team',
    component: ComponentCreator('/iit-madras/team', '031'),
    exact: true
  },
  {
    path: '/iit-madras/',
    component: ComponentCreator('/iit-madras/', 'e92'),
    routes: [
      {
        path: '/iit-madras/',
        component: ComponentCreator('/iit-madras/', 'a3e'),
        routes: [
          {
            path: '/iit-madras/',
            component: ComponentCreator('/iit-madras/', '69c'),
            routes: [
              {
                path: '/iit-madras/attributions',
                component: ComponentCreator('/iit-madras/attributions', '176'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/contribution',
                component: ComponentCreator('/iit-madras/contribution', '742'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/education',
                component: ComponentCreator('/iit-madras/education', '04c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/engineering',
                component: ComponentCreator('/iit-madras/engineering', 'f72'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/experiments',
                component: ComponentCreator('/iit-madras/experiments', '9a5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/future-directions',
                component: ComponentCreator('/iit-madras/future-directions', '20c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/human-practices',
                component: ComponentCreator('/iit-madras/human-practices', '42b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/members',
                component: ComponentCreator('/iit-madras/members', '6a8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/notebook',
                component: ComponentCreator('/iit-madras/notebook', '4a4'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/plant',
                component: ComponentCreator('/iit-madras/plant', '15f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/project-description',
                component: ComponentCreator('/iit-madras/project-description', 'a92'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/project-overview',
                component: ComponentCreator('/iit-madras/project-overview', '84b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/results',
                component: ComponentCreator('/iit-madras/results', '33b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/safety-and-security',
                component: ComponentCreator('/iit-madras/safety-and-security', '380'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/software',
                component: ComponentCreator('/iit-madras/software', '461'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/iit-madras/',
                component: ComponentCreator('/iit-madras/', '8e9'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
