import type { Host } from "$lib/types/host";

export const Voices: Host[] = [
  {
    avatar: {
      src: "/images/avatars/kent-beck.jpg",
      alt: "Keith Adams Avatar",
    },
    jobTitle:
      "signatory of Agile Manifesto and re-creator of Test-Driven Development",
    name: "Kent Beck",
    text: "The first advantage of CDEs for developers is the time they save. I’ve seen different numbers for the current cost of keeping a development environment working, but it’s certainly tens of percent of working time. <br/> <br /> More important, will be all the programs that folks will try writing because they are no longer afraid of wasting another 4 hours before giving up. One of those programs that wouldn’t have been started will turn out to be exceedingly valuable.",
  },
  {
    avatar: {
      src: "/images/avatars/keith-adams.jpg",
      alt: "Keith Adams Avatar",
    },
    jobTitle: "Former Chief Architect of Slack",
    name: "Keith Adams",
    text: "Gitpod is the most exciting developer tool I have encountered since, I don’t know, telnet maybe? Unix? It’s been a while.",
  },
  {
    avatar: {
      src: "/images/avatars/tom-preston-werner.jpg",
      alt: "Keith Adams Avatar",
    },
    jobTitle: "Founder of GitHub",
    name: "Tom Preston-Werner",
    text: "CDEs are like perfectly configured, high powered developer laptops that you can use and discard as easily as sticky notes. One perfect laptop for every project you work on, so you can say goodbye to dependency collision issues between unrelated projects. <br/> <br /> CDEs are especially powerful in complex environments at large companies. At GitHub we built our own complex setup script to provision developer laptops, always aiming to get new employees committing to main on their first day. It still didn't work 100%. CDEs make it easy.",
  },
];
