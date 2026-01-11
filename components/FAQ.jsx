import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '英語初心者でも大丈夫ですか?',
      answer: 'はい、大丈夫です。このプログラムは、TOEIC400点レベルから対応しています。基礎から体系的に学習できるため、初心者の方でも安心して始められます。ただし、中学レベルの基本文法は理解していることが前提となります。'
    },
    {
      question: '本当に1日30分で効果が出ますか?',
      answer: 'はい。1日30分の集中学習で、確実に効果が現れます。重要なのは「学習時間の長さ」ではなく「学習の質と継続性」です。このプログラムは、最も効率的な学習方法を科学的根拠に基づいて設計しています。過去の受講生データでも、1日30分の継続で平均TOEICスコア250点アップを達成しています。'
    },
    {
      question: 'スマホだけで学習できますか?',
      answer: 'はい、可能です。プログラムはスマホ、タブレット、PCすべてに対応しています。通勤時間や昼休みなど、スキマ時間を活用して学習できます。ただし、一部の発音トレーニングではマイク機能が必要です。'
    },
    {
      question: '仕事が忙しくて毎日は難しいのですが...?',
      answer: 'ご安心ください。プログラムは柔軟に進められます。忙しい週は週3-4日、余裕のある週は毎日など、あなたのペースで学習できます。ただし、効果を最大化するには、可能な限り毎日継続することをお勧めします。'
    },
    {
      question: '98,000円は高くないですか?',
      answer: '従来型スクールと比較してください。週2回のレッスンで月5万円、2年間で120万円が相場です。このプログラムは98,000円で、同等以上の成果を3ヶ月で実現します。1日あたりに換算すると、わずか1,089円です。また、30日間全額返金保証がありますので、リスクなくお試しいただけます。'
    },
    {
      question: 'プログラム修了後のサポートはありますか?',
      answer: 'はい、あります。プログラム修了後も、継続学習サポート、月次ニュースレター、コミュニティアクセスなどを提供します。また、今後追加される新コンテンツも優待価格で利用可能です。'
    },
    {
      question: 'TOEICのスコアアップが目的なのですが...?',
      answer: 'このプログラムは、実務英語力の向上を主目的としていますが、その過程で必然的にTOEICスコアも大幅に向上します。過去の受講生は平均250点のスコアアップを達成していますが、中には400点以上アップした方もいます。'
    },
    {
      question: '海外出張が来月に迫っているのですが、間に合いますか?',
      answer: 'はい、対応可能です。プログラムは柔軟にカスタマイズできるため、特定のビジネスシーンに特化した集中学習が可能です。例えば、「海外出張準備コース」として、空港、ホテル、会議、プレゼン、商談に特化した2週間集中プログラムを組むことができます。'
    },
    {
      question: '返金保証の条件を教えてください',
      answer: '30日間全額返金保証があります。プログラム開始後30日以内であれば、理由を問わず全額返金いたします。ただし、返金を希望される場合は、サポートデスクにメールでご連絡いただく必要があります。'
    },
    {
      question: 'プログラムの内容は更新されますか?',
      answer: 'はい、定期的にアップデートします。最新のビジネストレンド、新しい表現、より効果的な学習方法などを随時追加します。一度購入いただければ、これらのアップデートはすべて無料でご利用いただけます。'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">よくある質問にお答えします</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-number">Q{index + 1}</span>
                <span className="faq-text">{faq.question}</span>
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="faq-closing">
          他にご質問がある場合は、サポートデスクまでお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
};

export default FAQ;
