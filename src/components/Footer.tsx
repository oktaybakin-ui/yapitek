import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import type { ContactInfo, SocialLinks } from "@/lib/data";

interface Props {
  contact: ContactInfo;
  social: SocialLinks;
}

export default function Footer({ contact, social }: Props) {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="inline-block bg-white rounded px-3 py-2">
              <Image
                src="/logo.png"
                alt="YapıTek"
                width={140}
                height={42}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm mt-5 leading-relaxed">
              Taah. Yapı Malzemeleri Tic. Ltd. Şti.
              <br />
              Kaliteli yapı malzemeleri ile projelerinizin güvenilir tedarikçisi.
            </p>
            <div className="flex gap-3 mt-6">
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook size={16} />
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram size={16} />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin size={16} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link></li>
              <li><Link href="/referanslar" className="hover:text-white transition-colors">Referanslar</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider">Ürünler</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/urunler#su-yalitimi" className="hover:text-white transition-colors">Su Yalıtımı</Link></li>
              <li><Link href="/urunler#isi-yalitimi" className="hover:text-white transition-colors">Isı Yalıtımı</Link></li>
              <li><Link href="/urunler#boya" className="hover:text-white transition-colors">Boya</Link></li>
              <li><Link href="/urunler#yapi-kimyasallari" className="hover:text-white transition-colors">Yapı Kimyasalları</Link></li>
              <li><Link href="/urunler#alci-siva" className="hover:text-white transition-colors">Alçı &amp; Sıva</Link></li>
              <li><Link href="/urunler#yapi-levhalari" className="hover:text-white transition-colors">Yapı Levhaları</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/30" />
                {contact.address}, {contact.address2}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-white/30" />
                {contact.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-white/30" />
                {contact.emails[0]}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
          <span>&copy; 2026 YapıTek Taah. Yapı Malzemeleri Tic. Ltd. Şti. Tüm hakları saklıdır.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white/50 transition-colors">KVKK</a>
            <a href="#" className="hover:text-white/50 transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
