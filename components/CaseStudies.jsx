import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      name: '商社勤務・田中様',
      age: '38歳',
      before: {
        toeic: '580点',
        situation: '英語での会議は聞くだけ'
      },
      after: {
        toeic: '820点',
        situation: '海外拠点との定例会議でプレゼン担当に昇格'
      },
      image: '/case-study-1-v2.jpg'
    },
    {
      id: 2,
      name: 'IT企業・佐藤様',
      age: '42歳',
      before: {
        toeic: '英語メール作成に毎回1時間',
        situation: ''
      },
      after: {
        toeic: '海外エンジニアと直接コミュニケーション',
        situation: 'プロジェクトリーダーに抜擢'
      },
      image: '/case-study-2-v2.jpg'
    },
    {
      id: 3,
      name: 'メーカー営業・鈴木様',
      age: '35歳',
      before: {
        toeic: '英語での商談経験ゼロ',
        situation: ''
      },
      after: {
        toeic: '海外クライアントとの商談を単独で担当',
        situation: '新規契約3件獲得'
      },
      image: '/case-study-3-v2.jpg'
    }
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="section-title">実際の成功事例を<br />ご覧ください</h2>

        <div className="cases-grid">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case-card">
              <div className="case-header">
                <h3 className="case-name">{caseItem.name}</h3>
                <p className="case-age">{caseItem.age}</p>
              </div>

              <img src={caseItem.image} alt={caseItem.name} className="case-study-image" />

              <div className="case-comparison">
                <div className="case-before">
                  <h4>開始時</h4>
                  <p className="case-detail">{caseItem.before.toeic}</p>
                  {caseItem.before.situation && (
                    <p className="case-detail">{caseItem.before.situation}</p>
                  )}
                </div>

                <div className="case-arrow">→</div>

                <div className="case-after">
                  <h4>3ヶ月後</h4>
                  <p className="case-detail case-highlight">{caseItem.after.toeic}</p>
                  {caseItem.after.situation && (
                    <p className="case-detail">{caseItem.after.situation}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>



        <p className="case-summary">
          年齢も職種も異なる受講生たちが、共通して手にしているもの。<br />
          それは<strong>「3ヶ月で実務に使える<br />英語力」</strong>です。
        </p>

        <p className="case-promise">
          あなたにも、同じ未来が<br />待っています。
        </p>
      </div>
    </section>
  );
};

export default CaseStudies;
