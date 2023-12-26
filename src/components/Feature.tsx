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
    screenshot: "translate.mp4",
  },
  {
    id: "lookup",
    name: "Discover the contextual meaning",
    caption: "Lookup",
    description:
      "Understanding language is more than knowing a word's definition. We dive deeper to give you a comprehensive understanding of any word, phrase, or sentence, taking into account its context. Plus, to facilitate better comprehension and retention, we provide pronunciations and example sentences, along with visual explanations.",
    icon: SearchCheck,
    screenshot: "translate.mp4",
  },
  {
    id: "feedback",
    name: "Get feedback on your writing",
    caption: "Get feedback",
    description:
      "Get feedback on your writing and learn how to sound more natural. Vocabular provides feedback on how to improve your language use, ensuring your message is tailored to your audience, while maintaining the appropriate context and tone.",
    icon: Wand,
    screenshot: "translate.mp4",
  },
  {
    id: "compare",
    name: "Learn subtle differences",
    caption: "Compare",
    description:
      "Understand the subtle differences between similar words or phrases, empowering you to choose the right expression. Learn the nuances and make informed decisions in your language use.",
    icon: Ungroup,
    screenshot: "translate.mp4",
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-y-56 px-6 lg:px-8">
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
            </div>
            <div
              className={cn(
                "flex items-start",
                index % 2 !== 0 && "justify-end lg:order-first",
              )}
            >
              <video
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={`assets/${feature.screenshot}`} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
