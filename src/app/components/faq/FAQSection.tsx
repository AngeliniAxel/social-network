import FAQCard from './FAQCard';

type FAQSectionProps = {};

const FAQSection = ({}: FAQSectionProps) => {
  return (
    <section>
      <h1 className='mb-4'>Frequently Asked Questions</h1>
      <div className='grid grid-cols-12 gap-4 mb-8'>
        <FAQCard label='Section 1' href='/faq/section-1' />
        <FAQCard label='Section 2' href='/faq/section-2' />
        <FAQCard label='Section 3' href='/faq/section-3' />
        <FAQCard label='Section 4' href='/faq/section-4' />
        <FAQCard label='Section 5' href='/faq/section-5' />
        <FAQCard label='Section 6' href='/faq/section-6' />
        <FAQCard label='Section 7' href='/faq/section-7' />
        <FAQCard label='Section 8' href='/faq/section-8' />
      </div>
    </section>
  );
};

export default FAQSection;
