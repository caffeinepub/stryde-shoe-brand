import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold tracking-widest text-foreground">
              STRYDE
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1 tracking-wide">
              Footwear for the relentless.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.instagram.link"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.x.link"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <SiX size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.facebook.link"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook size={20} />
            </a>
          </div>

          <p className="font-body text-xs text-muted-foreground">
            &copy; {year}.{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
