import { LocaleProvider, useLocale } from "./hooks/useLocale";

// Temporary placeholder proving the content pipeline — replaced by real
// sections in Phase 4.
function Placeholder() {
  const { content, locale, setLocale } = useLocale();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <img src="/manuelIcon.png" alt="" className="h-16 w-16 rounded-2xl" />
      <h1 className="text-3xl font-bold">{content.hero.name}</h1>
      <p className="text-muted">{content.hero.title}</p>
      <button
        type="button"
        className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-accent hover:border-accent"
        onClick={() => setLocale(locale === "en" ? "es" : "en")}
      >
        {locale === "en" ? "Español" : "English"}
      </button>
    </main>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <Placeholder />
    </LocaleProvider>
  );
}
