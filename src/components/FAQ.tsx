const faqs = [
  {
    id: 1,
    question: "What is Contextuary?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "Does it work with all languages?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "Is it 100% accurate?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "Do you train your AI model with my code?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "How do I cancel my subscription?",
    answer:
      "Log into the dashboard and click on the “Cancel Subscription” button. You can also change your plan or downgrade to the free version.",
  },
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
            href="mailto:support@contextuary.ai"
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
