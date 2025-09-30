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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  teamSidebar: [
    'team/index',
    'team/members',
    'team/attributions',
  ],
  projectSidebar: [
    'project/index',
    'project/description',
    'project/engineering',
    'project/results',
    'project/contribution',
  ],
  wetlabSidebar: [
    'wetlab/index',
    'wetlab/experiments',
    'wetlab/notebook',
    'wetlab/measurement',
    'wetlab/plant',
    'wetlab/safety-and-security',
  ],
  drylabSidebar: [
    'drylab/index',
    'drylab/model',
    'drylab/software',
    'drylab/hardware',
  ],
  engagementSidebar: [
    'engagement/index',
    'engagement/entrepreneurship',
    'engagement/human-practices',
    'engagement/education',
    'engagement/inclusivity',
    'engagement/sustainability',
  ],
};

export default sidebars;