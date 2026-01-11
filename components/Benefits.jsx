import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'ビジネスシーン別即戦力フレーズ集',
      value: '5万円相当',
      content: [
        '会議での発言・意見表明（200フレーズ）',
        'プレゼンテーション定型表現（150フレーズ）',
        '交渉・商談必須表現（180フレーズ）',
        'ビジネスメール頻出表現（250フレーズ）',
        '電話会議対応表現（120フレーズ）'
      ],
      description: '合計900以上の即戦力フレーズを、音声付きで提供します。スマホにダウンロードして、いつでもどこでも確認できます。'
    },
    {
      id: 2,
      title: '月次グループコーチングセッション',
      value: '7回、3ヶ月間',
      content: [
        '学習の進捗確認とアドバイス',
        '実践的なロールプレイング',
        '質疑応答セッション',
        '他の受講生との情報交換'
      ],
      description: 'プログラム期間中、月2-3回のグループコーチングセッションに無料で参加できます。講師が直接、あなたの学習をサポートします。'
    },
    {
      id: 3,
      title: '学習者コミュニティへのアクセス権',
      value: '永久利用権',
      content: [
        '学習の悩みや成功体験の共有',
        '業界別のグループ',
        '定期的なオンライン交流会',
        'コミュニティ参加者の継続率は非参加者より23%高い'
      ],
      description: '同じ目標を持つ学習者たちとのネットワーキングが可能です。一人では続けられない学習も、コミュニティの支援で継続率が大幅に向上します。'
    },
    {
      id: 4,
      title: '今後の新コンテンツ優待価格',
      value: '50%OFF',
      content: [
        '業界特化型上級モジュール（IT、金融、商社など）',
        '海外駐在準備コース',
        'TOEIC高得点突破コース（900点以上）',
        'ビジネスライティング特化コース'
      ],
      description: '一度このプログラムに参加すれば、今後の英語学習において常に最前線を走り続けることができます。'
    }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section-title">さらに4つの特典をご用意しました</h2>

        <p className="benefits-intro">
          プログラム本体に加えて、あなたの英語学習を加速させる4つの特典をご用意しました。
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-header">
                <h3 className="benefit-title">特典{benefit.id}</h3>
                <h4>{benefit.title}</h4>
                <p className="benefit-value">{benefit.value}</p>
              </div>

              <p className="benefit-description">{benefit.description}</p>

              <ul className="benefit-content">
                {benefit.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="benefits-summary">
          <h3>合計15万円以上の特典価値</h3>

          <div className="benefits-calculation">
            <p>これら4つの特典の価値を合計すると、</p>
            
            <ul className="calculation-list">
              <li>特典1: 50,000円</li>
              <li>特典2: 70,000円（月次コーチング7回）</li>
              <li>特典3: 20,000円（コミュニティアクセス）</li>
              <li>特典4: プライスレス（継続的価値）</li>
            </ul>

            <p className="calculation-total">
              <strong>合計14万円以上の価値</strong>
            </p>

            <p className="calculation-statement">
              があります。
            </p>

            <p className="calculation-closing">
              プログラム本体98,000円に、これらの特典がすべて含まれます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
