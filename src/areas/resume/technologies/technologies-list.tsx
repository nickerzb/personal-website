import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import cSharpIcon from "@iconify/icons-logos/c-sharp";
import javaIcon from "@iconify/icons-logos/java";
import reactIcon from "@iconify/icons-logos/react";
import awsIcon from "@iconify/icons-logos/aws";
import azureIcon from "@iconify/icons-logos/azure";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";
import angularIcon from "@iconify/icons-logos/angular-icon";
import auth0Icon from "@iconify/icons-logos/auth0";
import gitIcon from "@iconify/icons-logos/git-icon";
import kongIcon from "@iconify/icons-logos/kong";
import pythonIcon from "@iconify/icons-logos/python";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import dotNetIcon from "@iconify/icons-logos/dotnet";
import sparkIcon from "@iconify/icons-logos/spark";
import slackIcon from "@iconify/icons-logos/slack-icon";
import jestIcon from "@iconify/icons-logos/jest";
import { IconifyIcon } from "@iconify/react";

export interface NamedIcon {
  name: string;
  icon: IconifyIcon;
}

export const namesWithIcons: NamedIcon[] = [
  {
    name: "React",
    icon: {
      icon: reactIcon
    }
  },
  {
    name: "Jest",
    icon: {
      icon: jestIcon
    }
  },
  {
    name: "Slack",
    icon: {
      icon: slackIcon
    }
  },
  {
    name: "Spark",
    icon: {
      icon: sparkIcon
    }
  },
  {
    name: ".NET",
    icon: {
      icon: dotNetIcon
    }
  },
  {
    name: "Docker",
    icon: {
      icon: dockerIcon
    }
  },
  {
    name: "Git",
    icon: {
      icon: gitIcon
    }
  },
  {
    name: "Python",
    icon: {
      icon: pythonIcon
    }
  },
  {
    name: "Kong",
    icon: {
      icon: kongIcon
    }
  },
  {
    name: "Auth0",
    icon: {
      icon: auth0Icon
    }
  },
  {
    name: "Angular",
    icon: {
      icon: angularIcon
    }
  },
  {
    name: "Typescript",
    icon: {
      icon: typescriptIcon
    }
  },
  {
    name: "Javascript",
    icon: {
      icon: javascriptIcon
    }
  },
  {
    name: "C#",
    icon: {
      icon: cSharpIcon
    }
  },
  {
    name: "Java",
    icon: {
      icon: javaIcon
    }
  },
  {
    name: "AWS",
    icon: {
      icon: awsIcon
    }
  },
  {
    name: "Azure",
    icon: {
      icon: azureIcon
    }
  },
  {
    name: "Node",
    icon: {
      icon: nodeIcon
    }
  }
];
