import FAQSection from '@/app/components/faq/FAQSection';

const FAQPage = () => {
  return (
    <div>
      {' '}
      <main>
        <FAQSection />
        <section className='flex flex-col'>
          <h2>Seccion 1</h2>
        </section>
      </main>
    </div>
  );
};

export default FAQPage;
