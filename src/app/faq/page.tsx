import faqsApi from '@/services/faqs/faqs.service';
import FAQSection from '../components/faq/FAQSection';

const FAQPage = async () => {
  const faqPages = await faqsApi.getFAQPages();

  return (
    <div>
      {' '}
      <main>
        <FAQSection sections={faqPages.data} />
      </main>
    </div>
  );
};

export default FAQPage;
