import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { MenuBoard } from "../../components/Menu";
import { ContentState } from "../../components/feedback";
import { useCafeContent } from "../../modules/cafe";

export const HomePage = () => {
  const { data, loading, error, refetch } = useCafeContent();

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-24">
        <ContentState
          title="Loading menu"
          message="Fetching the latest content from Strapi"
        />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-24">
        <ContentState
          title="Content could not be loaded"
          message={error ?? "Check the connection settings"}
          actionLabel="Try again"
          onAction={refetch}
        />
      </div>
    );
  }

  return (
    <>
      <Header content={data.header} contact={data.contact} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">
        <Hero hero={data.hero} contact={data.contact} />
        <MenuBoard categories={data.menu} />
      </main>
      <Footer content={data.footer} contact={data.contact} />
    </>
  );
};
