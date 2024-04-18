import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-10">
      <Head>
        <link
          rel="canonical"
          href="https://www.vocabular.ai/privacy-policy"
          key="canonical"
        />
      </Head>
      <article className="prose">{children}</article>
    </div>
  );
}
