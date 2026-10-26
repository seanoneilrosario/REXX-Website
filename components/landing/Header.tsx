import { ButtonLink, Logo, navigation } from "./ui";

export function Header() {
  return (
    <header className="site-header">
      <a href="#" aria-label="REXX home">
        <Logo />
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="#faq">FAQ</a>
      </nav>
      <ButtonLink href="#updates" variant="white">
        Get launch updates
      </ButtonLink>
    </header>
  );
}
