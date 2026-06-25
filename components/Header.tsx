import HeaderNav from "@/components/HeaderNav";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="/" suppressHydrationWarning className="logo-brand-link">
          <Logo />
        </a>
        <HeaderNav />
      </div>
    </header>
  );
}
