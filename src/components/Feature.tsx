/* eslint-disable @next/next/no-img-element */
import { LanguageIcon } from "@heroicons/react/24/outline";
import { SearchCheck, Ungroup, Wand } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "translate",
    name: "How do you say this?",
    caption: "Translate",
    description:
      "Say goodbye to awkward translations that don't fit the context and tone of your message. Vocabular translates words and phrases while considering the situation, tone, and audience, ensuring your message is delivered accurately. Each translation comes with an explanation, pronunciation, and example sentences.",
    icon: LanguageIcon,
    screenshot:
      "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  },
  {
    id: "lookup",
    name: "What does this mean?",
    caption: "Lookup",
    description:
      "Discover the meaning of words and phrases, taking into account the context they are used in. Get accurate meanings, pronunciations, tone, and visual explanations, along with multiple example phrases for reinforcement.",
    icon: SearchCheck,
    screenshot:
      "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  },
  {
    id: "compare",
    name: "What's the difference?",
    caption: "Compare",
    description:
      "Understand the subtle differences between similar words or phrases, empowering you to choose the right expression. Learn the nuances and make informed decisions in your language use.",
    icon: Ungroup,
    screenshot:
      "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  },
  {
    id: "feedback",
    name: "Does this sound natural?",
    caption: "Get feedback",
    description:
      "Get feedback on your writing and learn how to sound more natural. Vocabular provides feedback on how to improve your language use, ensuring your message is tailored to your audience, while maintaining the appropriate context and tone.",
    icon: Wand,
    screenshot:
      "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-y-32 px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            id={feature.id}
            key={feature.id}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div
              className={cn("lg:pt-4", index % 2 === 0 ? "lg:pr-8" : "lg:pl-8")}
            >
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  {feature.caption}
                </h2>
                <p className="mt-2 flex items-center gap-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="inline-block rounded-md bg-indigo-600 p-2">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span>{feature.name}</span>
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "flex items-start",
                index % 2 !== 0 && "justify-end lg:order-first",
              )}
            >
              <img
                src={feature.screenshot}
                alt={feature.name}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
