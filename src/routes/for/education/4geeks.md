---
title: Building a learning platform on Gitpod
# We can't do $ signs here because whatever parses this reads $1 as a keyword and injects <script type="module" in its place
excerpt: "Building a learning platform on Gitpod that allows instructors to teach, evaluate, and grade code lessons. They have taught over 4000 students in 6 countries and have received over 15 million USD in educational grants."
slug: 4geeks
image: teaser.png
date: Friday, 30 June 2022 06:00:00 UTC
pageTitle: "4Geeks Academy case study: Building a learning platform on Gitpod"
pageDescription: Building a learning platform on Gitpod that allows instructors to teach, evaluate, and grade code lessons. They have taught over 4000 students in 6 countries and have received over 15 million USD in educational grants.
keywords: education, funding, workshops, 4Geeks
---

<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
	import CustomerHero from "$lib/components/customers/customer-hero.svelte";
	import CompanyBenefits from "$lib/components/customers/company-benefits.svelte";
	import Section from "$lib/components/section.svelte";
	import Story from "$lib/components/customers/story.svelte";
	import Quote from "$lib/components/quote.svelte";
  	import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description: "Building a learning platform on Gitpod that allows instructors to teach, evaluate, and grade code lessons. They have taught over 4000 students in 6 countries and have received over $15 million USD in educational grants.",
    title: "4Geeks Academy case study: Building a learning platform on Gitpod",
    keywords: "education, funding, workshops, 4Geeks",
  }}
/>

<CustomerHero
title="Building a learning platform on Gitpod"
text="4Geeks built LearnPack – an educational platform that runs in Gitpod on VS Code and allows instructors to teach, evaluate, and grade code lessons. Using LearnPack and Gitpod, they have taught over 4000 students in 6 countries and have received over $15 million USD in educational grants."
card={{
		image: "/images/education/4geeks/teaser.png",
		details:{
			industry: "Education",
			plan: "Team Unlimited, SaaS",
			people: {
				title: "Students",
				text: "over 4000"
			},
			website: {
				href: "https://4geeksacademy.com/",
				text: "4Geeks Academy",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "$15M USD",
text: "in educational grants",
},
{
title: "6 countries",
text: "teaching students",
},
{
title: "4000+",
text: "students taught w/ Gitpod",
}]}
/>

<Section>
	<Quote
		quote="I would rather shut down the academy than stop using Gitpod."
		author={{
			name: "Alejandro",
			jobTitle: "Founder of 4Geeks Academy",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/4geeks/banner.png" text="Building a learning platform on Gitpod">

4Geeks Academy is an international code school operating bootcamps in the United States, Latin America, and Europe. Teaching full stack development, computer science, and machine learning, the academy has taught over 4000 students with a high job placement rate.

As possibly the largest institution using Gitpod as a tool to teach, we reached out to the academy's cofounder [Alejandro](https://twitter.com/alesanchezr) to better understand how Gitpod fits into their business.

Alejandro explains that 4Geeks Academy used to run on Replit Classrooms: an educational platform that allowed students to submit code exercises for grading, amongst other things. In January of 2021, the service was shut down and replaced with an expensive, paid alternative. All their courses and exercises, which they had set up in Classrooms, no longer worked.

Rather than rely on another hosted education offering, for which there was no guarantee they wouldn't end up in the same situation, they chose to build their own, and that's where LearnPack started.

## Building an educational platform on Gitpod

LearnPack is an interactive course framework that runs inside VS Code using Gitpod.

When a student opens a repository in Gitpod, LearnPack uses [Start Tasks](https://www.gitpod.io/docs/configure/workspaces/tasks) to initialize the lesson and display both the course instruction and the lesson material at once. Youtube videos from the instructors are embedded directly into the application for a fully integrated learning experience.

Alejandro expands on some of the advantages of using Gitpod in this way.

> "Competitors require high-end MacBooks to do their courses, but with Gitpod, you can do it in a Chromebook. A single mom with a kid can be online doing exercises."

Building the experience into Gitpod allows students to learn on any device with a browser. While universities often don't have large budgets for high-end development machines, affordable Android tablets are easier to procure.

Universities, Alejandro says, aren't interested in spending time developing their own educational tools. "They just want a vendor who handles everything. In continuing education, it's all about vendors and teaching through content partners." With LearnPack, 4Geeks aims to be the ideal vendor.

## Going above and beyond the status quo

Educators looking to take advantage of Gitpod often use it to run code repositories that accompany [workshops and courses](https://www.gitpod.io/blog/workshops-as-code). Sometimes these are as simple as empty workspaces, providing a clean terminal and IDE with developer tools pre-installed.

More complex learning material usually involves application code and may require provisioning databases or infrastructure.

LearnPack runs alongside such applications as a framework that allows instructors to evaluate and grade structured lessons.

> "Gitpod's killer feature is that workspaces can be created while passing environment variables through the URL."

LearnPack reads a user ID from the URL to report telemetry to the instructor. Keeping the instructors updated with how many hours their students spend training, when they open exercises, and even transmitting application logs allows them to curate their instruction to exactly where the learner is.

## Taking the learning experience to the next level

Every new thing is a new layer of complexity, and students (and many teachers) have difficulty rationalizing their way around that. They often blame the wrong layer if they hit a bug in their code. It takes time and experience to build mental models of the boundaries between different pieces of tech.

The more LearnPack can appear to be a single cohesive layer, the better the learning experience is.

"One feature we're really looking forward to is the ability to list workspaces for a user," he adds. At the moment, students have to go to their Gitpod dashboard to see their workspaces, but when Gitpod's public API is released, viewing, starting, and stopping workspaces could become an integrated part of LearnPack.

4Geeks has received over $15M in educational funding, including $10M from Lyft, $1.5M from United Way, and several large government grants. They have also partnered with Miami Dade College—the largest university in the US—and other prominent schools in Mexico, Venezuela, Uruguay, and Spain, to run their coding courses.

Beyond their work with the academy, 4Geeks is launching [a free platform](https://4geeks.com/) to the general public where anyone will be able to learn with Gitpod.

Gitpod appreciates the work Alejandro and the 4Geeks team have put into building an excellent platform, and we thank them for the interview that led to this case study.

</Story>
