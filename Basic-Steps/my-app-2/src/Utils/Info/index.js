import tour_1 from "../../Image/tour-1.jpeg";
import tour_2 from "../../Image/tour-2.jpeg";
import tour_3 from "../../Image/tour-3.jpeg";
import tour_4 from "../../Image/tour-4.jpeg";

const NavLinks = [
  {
    href: "#home",
    text: "home",
  },
  {
    href: "#about",
    text: "about",
  },
  {
    href: "#services",
    text: "services",
  },
  {
    href: "#tours",
    text: "tours",
  },
];

const NavIcons = [
  {
    href: "https://www.facebook.com",
    className: "fab fa-facebook",
  },
  {
    href: "https://www.twitter.com",
    className: "fab fa-twitter",
  },
  {
    href: "",
    className: "fab fa-squarespace",
  },
];

const Services = [
  {
    title: "saving money",
    text: "Lorem ipsum dolor sit amet adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

const TourData = [
  {
    picture: tour_1,
    date: "october 1th, 2020",
    title: "Tibet Adventure",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: "6 days",
    price: "from $2100",
  },
  {
    picture: tour_2,
    date: "august 26th, 2020",
    title: "best of java",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: "11 days",
    price: "from $1400",
  },
  {
    picture: tour_3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: "8 days",
    price: "from $5000",
  },
  {
    picture: tour_4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];

export { NavLinks, NavIcons, Services, TourData };
