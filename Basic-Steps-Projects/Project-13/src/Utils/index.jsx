import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";

import { nanoid } from "nanoid";

const subLinks = [
  {
    pageId: nanoid(),
    page: "Product",
    links: [
      {
        id: nanoid(),
        label: "Community",
        icon: <Fa500Px />,
        url: "product/community",
      },
      {
        id: nanoid(),
        label: "Content",
        icon: <FaAccusoft />,
        url: "product/content",
      },
      {
        id: nanoid(),
        label: "Roles",
        icon: <FaAdversal />,
        url: "product/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Solutions",
    links: [
      {
        id: nanoid(),
        label: "Developers",
        icon: <FaAvianex />,
        url: "solutions/developers",
      },
      {
        id: nanoid(),
        label: "Business Teams",
        icon: <FaBitcoin />,
        url: "solutions/business teams",
      },
      {
        id: nanoid(),
        label: "Content Managers",
        icon: <FaBtc />,
        url: "solutions/content managers",
      },
      {
        id: nanoid(),
        label: "Ecommerce",
        icon: <FaCodiepie />,
        url: "solutions/ecommerce",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Resources",
    links: [
      {
        id: nanoid(),
        label: "Starters",
        icon: <FaDocker />,
        url: "resources/starters",
      },
      {
        id: nanoid(),
        label: "Showcase",
        icon: <FaGithubSquare />,
        url: "resources/showcase",
      },
    ],
  },
];

export default subLinks;
