/* eslint-disable @next/next/no-img-element */
import { LanguageIcon } from "@heroicons/react/24/outline";
import { SearchCheck, Ungroup, Wand } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "translate",
    name: "Translate with context and tone",
    caption: "Translate",
    description:
      "Say goodbye to awkward translations that don't fit the context and tone of your message. Vocabular translates words and phrases while considering the situation, tone, and audience, ensuring your message is delivered accurately. Each translation comes with an explanation, pronunciation, and example sentences, aiding you to understand and memorize it better.",
    icon: LanguageIcon,
    screenshot: "translate.png",
  },
  {
    id: "lookup",
    name: "Discover the contextual meaning",
    caption: "Lookup",
    description:
      "Understanding language is more than knowing a word's definition. We dive deeper to give you a comprehensive understanding of any word, phrase, or sentence, taking into account its context. Plus, to facilitate better comprehension and retention, we provide pronunciations and example sentences, along with visual explanations.",
    icon: SearchCheck,
    screenshot: "lookup.png",
  },
  {
    id: "write-better",
    name: "Refine your writing",
    caption: "Write Better",
    description:
      "Get feedback on your writing and learn how to sound more natural. Vocabular provides feedback on how to improve your language use, ensuring your message is tailored to your audience, while maintaining the appropriate context and tone.",
    icon: Wand,
    screenshot: "write-better.png",
  },
  {
    id: "compare",
    name: "Learn subtle differences",
    caption: "Compare",
    description:
      "Understand the subtle differences between similar words or phrases, empowering you to choose the right expression. Learn the nuances and make informed decisions in your language use.",
    icon: Ungroup,
    screenshot: "compare.png",
  },
];

export default function Feature() {
  return (
    <div id="features" className="bg-white py-20 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-6 sm:gap-y-56 xl:px-8">
        {features.map((feature, index) => (
          <div
            id={feature.id}
            key={feature.id}
            className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 xl:mx-0 xl:max-w-none xl:grid-cols-2"
          >
            <div className="xl:max-w-lg xl:pt-4">
              <h2 className="flex items-center gap-2 text-base font-semibold leading-7 text-indigo-600">
                <span className="inline-block rounded-md bg-indigo-600 p-2">
                  <feature.icon
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                  />
                </span>
                {feature.caption}
              </h2>
              <p className="mt-4 flex items-center gap-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {feature.name}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {feature.description}
              </p>
            </div>
            <div
              className={cn(
                "flex items-start",
                index % 2 !== 0 && "justify-end xl:order-first",
              )}
            >
              <img
                src={`assets/${feature.screenshot}`}
                alt={feature.name}
                className="rounded-xl xl:w-[44rem] xl:max-w-none 2xl:w-[54rem]"
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
