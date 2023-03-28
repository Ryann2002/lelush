import Title from "./Title";

function Faq() {
  const faqs = [
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      question: "Como posso cancelar minhta assinatura?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      question: "Posso escolher as cores?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];
  return (
    <section className="mx-auto max-w-5xl flex flex-col">
      <div className="mx-auto my-[30px] lg:my-[90px]">
        <Title>Duvidas Frequentes</Title>
      </div>

      {faqs.map((faq) => (
        <details className="text-faq mb-[15px] lg:mb-[30px] text-[#3b3b3b] mx-[15px]">
          <summary className="font-medium text-faqTitle appearance-none marker:display-none text-black">
            {faq.question}
          </summary>
          {faq.answer}
        </details>
      ))}
    </section>
  );
}

export default Faq;
