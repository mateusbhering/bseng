import Link from "next/link";
import Logo from "@/components/Logo";
import { contact } from "@/lib/data";

const footerLinks = [
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/50">
              Engenharia estrutural desde 1991.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-col items-start gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <a
              href={contact.phoneHref}
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={contact.emailHref}
              className="text-sm break-all text-white/60 transition-colors duration-200 hover:text-white"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {year} Beltrão Santos Engenharia. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[0.625rem] tracking-[0.22em] text-white/35 uppercase">
            Engenharia Estrutural • Belo Horizonte, MG
          </p>
        </div>
      </div>
    </footer>
  );
}
