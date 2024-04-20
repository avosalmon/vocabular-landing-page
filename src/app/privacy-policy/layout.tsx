import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-10">
      <article className="prose">{children}</article>
    </div>
  );
}
