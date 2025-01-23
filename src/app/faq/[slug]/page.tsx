import FAQSection from '@/app/components/faq/FAQSection';
import faqsApi from '@/services/faqs/faqs.service';

const FAQPage = async ({ params }: { params: { slug: string } }) => {
  const faqPages = await faqsApi.getFAQPages();
  const faqPage = faqPages.data.find((page) => page.slug === `/${params.slug}`);

  return (
    <div>
      <main>
        <FAQSection sections={faqPages.data} />
        <section className='flex flex-col'>
          <h2>{faqPage?.title}</h2>
          <div>{faqPage?.body}</div>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
