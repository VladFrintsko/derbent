import { Header } from "../../components/Header";

const resources = [
  { label: "React docs", href: "https://react.dev" },
  {
    label: "TypeScript handbook",
    href: "https://www.typescriptlang.org/docs/",
  },
  { label: "TailwindCSS", href: "https://tailwindcss.com/docs" },
];

export const HomePage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
