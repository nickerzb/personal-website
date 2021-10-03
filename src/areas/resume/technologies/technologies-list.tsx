import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import cSharpIcon from '@iconify/icons-logos/c-sharp';
import javaIcon from '@iconify/icons-logos/java';
import reactIcon from '@iconify/icons-logos/react';
import awsIcon from '@iconify/icons-logos/aws';
import azureIcon from '@iconify/icons-logos/azure';
import nodeIcon from '@iconify/icons-logos/nodejs-icon';
import angularIcon from '@iconify/icons-logos/angular-icon';
import auth0Icon from '@iconify/icons-logos/auth0';
import gitIcon from '@iconify/icons-logos/git-icon';
import kongIcon from '@iconify/icons-logos/kong';
import pythonIcon from '@iconify/icons-logos/python';
import dockerIcon from '@iconify/icons-logos/docker-icon';
import dotNetIcon from '@iconify/icons-logos/dotnet';
import sparkIcon from '@iconify/icons-logos/spark';
import slackIcon from '@iconify/icons-logos/slack-icon';
import jestIcon from '@iconify/icons-logos/jest';
import { IconifyIcon } from '@iconify/react';

export interface NamedIcon {
  name: string;
  icon: IconifyIcon;
}

export const namesWithIcons: NamedIcon[] = [
  {
    name: 'React',
    icon: reactIcon,
  },
  {
    name: 'Jest',
    icon: jestIcon,
  },
  {
    name: 'Slack',
    icon: slackIcon,
  },
  {
    name: 'Spark',
    icon: sparkIcon,
  },
  {
    name: '.NET',
    icon: dotNetIcon,
  },
  {
    name: 'Docker',
    icon: dockerIcon,
  },
  {
    name: 'Git',
    icon: gitIcon,
  },
  {
    name: 'Python',
    icon: pythonIcon,
  },
  {
    name: 'Kong',
    icon: kongIcon,
  },
  {
    name: 'Auth0',
    icon: auth0Icon,
  },
  {
    name: 'Angular',
    icon: angularIcon,
  },
  {
    name: 'Typescript',
    icon: typescriptIcon,
  },
  {
    name: 'Javascript',
    icon: javascriptIcon,
  },
  {
    name: 'C#',
    icon: cSharpIcon,
  },
  {
    name: 'Java',
    icon: javaIcon,
  },
  {
    name: 'AWS',
    icon: awsIcon,
  },
  {
    name: 'Azure',
    icon: azureIcon,
  },
  {
    name: 'Node',
    icon: nodeIcon,
  },
];
