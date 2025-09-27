import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e54'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '860'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '6e3'),
            routes: [
              {
                path: '/drylab/',
                component: ComponentCreator('/drylab/', '88c'),
                exact: true,
                sidebar: "drylabSidebar"
              },
              {
                path: '/drylab/hardware',
                component: ComponentCreator('/drylab/hardware', 'dac'),
                exact: true,
                sidebar: "drylabSidebar"
              },
              {
                path: '/drylab/model',
                component: ComponentCreator('/drylab/model', '2ab'),
                exact: true,
                sidebar: "drylabSidebar"
              },
              {
                path: '/drylab/software',
                component: ComponentCreator('/drylab/software', 'b60'),
                exact: true,
                sidebar: "drylabSidebar"
              },
              {
                path: '/engagement/',
                component: ComponentCreator('/engagement/', '27d'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/engagement/education',
                component: ComponentCreator('/engagement/education', '472'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/engagement/entrepreneurship',
                component: ComponentCreator('/engagement/entrepreneurship', '997'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/engagement/human-practices',
                component: ComponentCreator('/engagement/human-practices', '3e1'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/engagement/inclusivity',
                component: ComponentCreator('/engagement/inclusivity', '341'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/engagement/sustainability',
                component: ComponentCreator('/engagement/sustainability', '87d'),
                exact: true,
                sidebar: "engagementSidebar"
              },
              {
                path: '/project/',
                component: ComponentCreator('/project/', 'cbc'),
                exact: true,
                sidebar: "projectSidebar"
              },
              {
                path: '/project/contribution',
                component: ComponentCreator('/project/contribution', 'b88'),
                exact: true,
                sidebar: "projectSidebar"
              },
              {
                path: '/project/description',
                component: ComponentCreator('/project/description', '30a'),
                exact: true,
                sidebar: "projectSidebar"
              },
              {
                path: '/project/engineering',
                component: ComponentCreator('/project/engineering', 'd1e'),
                exact: true,
                sidebar: "projectSidebar"
              },
              {
                path: '/project/results',
                component: ComponentCreator('/project/results', '558'),
                exact: true,
                sidebar: "projectSidebar"
              },
              {
                path: '/team/',
                component: ComponentCreator('/team/', '281'),
                exact: true,
                sidebar: "teamSidebar"
              },
              {
                path: '/team/attributions',
                component: ComponentCreator('/team/attributions', '60d'),
                exact: true,
                sidebar: "teamSidebar"
              },
              {
                path: '/team/members',
                component: ComponentCreator('/team/members', '31a'),
                exact: true,
                sidebar: "teamSidebar"
              },
              {
                path: '/wetlab/',
                component: ComponentCreator('/wetlab/', 'c31'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/wetlab/experiments',
                component: ComponentCreator('/wetlab/experiments', 'fe4'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/wetlab/measurement',
                component: ComponentCreator('/wetlab/measurement', 'be0'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/wetlab/notebook',
                component: ComponentCreator('/wetlab/notebook', '2d8'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/wetlab/plant',
                component: ComponentCreator('/wetlab/plant', 'ad2'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/wetlab/safety-and-security',
                component: ComponentCreator('/wetlab/safety-and-security', '673'),
                exact: true,
                sidebar: "wetlabSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '8bb'),
                exact: true
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
