import { FAQPageType } from '@/app/types/faq.types';
import { StrapiResultType } from '@/app/types/strapi.types';
import { strapiGet } from '../common/strapi.service';

class FAQsAPI {
  getFAQPages = async (): Promise<StrapiResultType<FAQPageType>> => strapiGet(`/faq-pages`);
}

const faqsApi = new FAQsAPI();
export default faqsApi;
