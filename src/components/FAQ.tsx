const faqs = [
  {
    id: 1,
    question: "What is Vocabular?",
    answer:
      "Vocabular is an all-in-one platform to build your vocabulary. You can translate, lookup, compare words and phrases, and get feedback on your writing. We use AI to provide you with the most accurate and natural expressions, definitions, and feedback. You can save the answers to your pesonal dictionary and review them later.",
  },
  {
    id: 2,
    question: "Does it work with all languages?",
    answer:
      "We support over 80 languages. If you don’t see your language, please reach out to us.",
  },
  {
    id: 3,
    question: "Is it 100% accurate?",
    answer:
      "We use the AI technology to provide you with the most accurate and natural expressions, definitions, and feedback. However, it’s not 100% accurate. If you see any mistakes, please reach out to us.",
  },
  {
    id: 4,
    question: "Do you train your AI model with the questions I ask?",
    answer:
      "No, we don’t. We use OpenAI's API which doesn't use prompts to train the AI model.",
  },
  // {
  //   id: 5,
  //   question: "How do I cancel my subscription?",
  //   answer:
  //     "Log into the dashboard and click on the “Cancel Subscription” button. You can also change your plan or downgrade to the free version.",
  // },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          If you have any questions, please{" "}
          <a
            href="mailto:support@vocabular.ai"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            reach out to us
          </a>
          .
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
