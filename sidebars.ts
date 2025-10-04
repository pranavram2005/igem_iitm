import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // All pages are now at the root level - no folders
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'HOME',
    },
    {
      type: 'category',
      label: 'PROJECTS',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'project-overview',
          label: 'OVERVIEW',
        },
        {
          type: 'doc',
          id: 'project-description',
          label: 'DESCRIPTION',
        },
        {
          type: 'doc',
          id: 'engineering',
          label: 'ENGINEERING SUCCESS',
        },
        {
          type: 'doc',
          id: 'results',
          label: 'RESULTS',
        },
        {
          type: 'doc',
          id: 'future-directions',
          label: 'FUTURE DIRECTIONS',
        },
        {
          type: 'doc',
          id: 'contribution',
          label: 'CONTRIBUTIONS',
        },
      ],
    },
    {
      type: 'category',
      label: 'WET LAB',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'experiments',
          label: 'EXPERIMENTS',
        },
        {
          type: 'doc',
          id: 'notebook',
          label: 'NOTEBOOK',
        },
        {
          type: 'doc',
          id: 'safety-and-security',
          label: 'SAFETY',
        },
        {
          type: 'doc',
          id: 'plant',
          label: 'PART COLLECTION',
        },
      ],
    },
    {
      type: 'category',
      label: 'DRY LAB',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'software',
          label: 'SOFTWARE',
        },
      ],
    },
    {
      type: 'category',
      label: 'HUMAN PRACTICES',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'human-practices',
          label: 'HP',
        },
        {
          type: 'doc',
          id: 'education',
          label: 'EDUCATION',
        },
      ],
    },
    {
      type: 'category',
      label: 'TEAM',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'attributions',
          label: 'ATTRIBUTIONS',
        },
      ],
    },
  ],
};

export default sidebars;