import React from 'react';

const ApplicationSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'お申し込み',
      description: 'このページ下部に、専用のお申し込みフォームをご用意しました。そちらからご参加ください。',
      details: [
        '信頼性の高い決済サービスを利用しています',
        '「セキュリティは大丈夫?」と不安に感じる必要はありません',
        '安全性・信頼性ともに確立されています'
      ]
    },
    {
      number: 2,
      title: '学習コミュニティへの登録',
      description: '決済が完了すると、専用の学習コミュニティへの招待リンクをお送りします。',
      details: [
        '数クリックで登録完了',
        '「オンラインツールは苦手...」という方もご安心を',
        'メールアカウントがあれば誰でも簡単に登録できます',
        '世界中の語学学習者が活用する実績あるプラットフォーム',
        '複雑な設定や操作は不要'
      ]
    },
    {
      number: 3,
      title: '教材とカリキュラムの受け取り',
      description: '学習コミュニティにて、全教材とカリキュラムをお渡しします。',
      details: [
        'スマートフォン、タブレット、パソコンなど、あなたがお好きなデバイスで学習できます',
        '学習方法も丁寧にご案内します',
        '不明な点があれば、正常に開始できるまでサポートいたします'
      ]
    }
  ];

  return (
    <section className="application-steps">
      <div className="container">
        <h2 className="section-title">ステップは極めてシンプルです</h2>

        <p className="steps-intro">
          手続きは極めてシンプルですので、最後まで安心してご確認ください。
        </p>

        <div className="steps-timeline">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item">
              <div className="step-number">{step.number}</div>
              
              <div className="step-content">
                <h3 className="step-title">ステップ{step.number}: {step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                <ul className="step-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="step-arrow">↓</div>
              )}
            </div>
          ))}
        </div>

        <div className="steps-summary">
          <p className="steps-time">
            <strong>所要時間: 約15分</strong>
          </p>
          <p className="steps-support">
            不明な点があれば、正常に開始できるまでサポートいたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSteps;
