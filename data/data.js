import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import mealIcon from "@/assets/icons/meal.png";

export const foodLinks = [
  { urlName: "Browse meals", urlLink: "/meals" },
  { urlName: "Foodies community", urlLink: "/community" },
];

export const communityLinks = [
  {
    commnityText: "Share & discover recipes",
    commnityIcon: mealIcon,
    alt: "A delicious meal",
  },
  {
    commnityText: "Find new friends & like-minded people",
    commnityIcon: communityIcon,
    alt: "A crowd of people, cooking",
  },
  {
    commnityText: "Participate in exclusive events",
    commnityIcon: eventsIcon,
    alt: "A crowd of people at a cooking event",
  },
];
