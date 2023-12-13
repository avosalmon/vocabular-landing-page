import { LanguageIcon } from "@heroicons/react/24/outline";
import { SearchCheck, Ungroup, Wand } from "lucide-react";

const features = [
  {
    name: "How do you say this?",
    description:
      "Say goodbye to useless translations that don't fit the context and tone of your message. Vocabular translates words and phrases while considering the situation, tone, and audience, ensuring clarity and precision. Receive various translation variations, each with an explanation, pronunciation, and example phrase.",
    icon: LanguageIcon,
  },
  {
    name: "What does this mean?",
    description:
      "Discover the meaning of words and phrases, taking into account the context they are used in. Get accurate meanings, pronunciations, tone, and helpful images, along with multiple example phrases for reinforcement.",
    icon: SearchCheck,
  },
  {
    name: "What's the difference?",
    description:
      "Understand the subtle differences between similar words or phrases, empowering you to choose the right expression. Learn the nuances and make informed decisions in your language use.",
    icon: Ungroup,
  },
  {
    name: "Does this sound natural?",
    description:
      "Get assistance with your writing in various use cases, from personal to professional. Ensure your message is tailored to your audience, while maintaining the appropriate context and tone.",
    icon: Wand,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
