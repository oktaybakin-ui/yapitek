import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getContactInfo, getSocialLinks } from "@/lib/data";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contact, social] = await Promise.all([
    getContactInfo(),
    getSocialLinks(),
  ]);

  return (
    <>
      <Header />
      {children}
      <Footer contact={contact} social={social} />
      <WhatsAppButton phone={social.whatsapp} />
    </>
  );
}
