export interface IFAQItem {
  id: number;
  title: string;
  description: string;
}

export interface IFAQList {
  list: IFAQItem[];
}

export interface IAccordionProps {
  faqList: IFAQList;
}

export interface IAccordionItemProps {
  faq: IFAQItem;
}
