import gitpodSvelte from "$lib/components/svgs/brands/gitpod.svelte";
import adyenSvelte from "$lib/components/svgs/brands/adyen.svelte";
import nasaSvelte from "$lib/components/svgs/brands/nasa.svelte";
import microsoftSvelte from "$lib/components/svgs/brands/microsoft.svelte";
import type { Host } from "$lib/types/host";

export const hosts: Host[] = [
  {
    avatar: {
      src: "/images/webinars/christian-weichel.jpg",
    },
    name: "Chris ",
    jobTitle: "CTO",
    companyLogo: {
      component: gitpodSvelte,
      props: {
        class: "h-6",
      },
    },
    text: "Christian is Chief Technology Officer at Gitpod. He loves building things, systems and software. Ever keen to solve cross-cutting problems, he has experience in human-computer interaction, embedded software development, and the backend side of things (Kubernetes, Docker).",
  },
  {
    avatar: {
      src: "/images/webinars/bruno.jpg",
    },
    name: "Bruno Borges",
    jobTitle: "Principal PM Manager for Java",
    companyLogo: {
      component: microsoftSvelte,
      props: {
        class: "h-5",
      },
    },
    text: "Works in Microsoft's Developer Division Java Engineering Group to build, secure, and optimize Java runtimes and tools for Azure services and internal customers. He is also a Java Champion! ",
  },
  {
    avatar: {
      src: "/images/webinars/julien.jpeg",
    },
    name: "Julien Lengrand-Lambert",
    jobTitle: "Lead Developer Advocate | Gitpod Community Hero",
    companyLogo: {
      component: adyenSvelte,
      props: {
        class: "h-5",
      },
    },
    text: "Julien is a Lead Developer Advocate at Adyen. Kotlin GoogleDevExpert and Gitpod community hero! He is a developer with over ten years of experience in various roles and industries, from space to banking. He loves creating 'islands' where engineers are the heroes, so you can find him organizing various Meetups and events like JFall or the Dutch Java Magazine.",
  },
  {
    avatar: {
      src: "/images/webinars/tom.jpeg",
    },
    name: "Tom Barber",
    jobTitle: "Data Systems Engineer | Gitpod Community Hero",
    companyLogo: {
      component: nasaSvelte,
      props: {
        class: "w-12",
      },
    },
    text: "Tom is a data systems engineer for NASA JPL. Most recently, for the NASA Perserverance Rover and the Voyager missions. Tom uses Gitpod as his daily driver across a range of languages, from web technologies to Go and, of course, both Java and Scala.",
  },
];
