import React, { useState } from 'react';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);

  const stages = [
    {
      id: 1,
      title: 'Stage 1: 基礎固め',
      period: '0-30日',
      content: [
        'ビジネス英語の基本表現習得',
        'リスニング力の基礎構築',
        '実践的な発音トレーニング'
      ],
      achievement: 'TOEIC平均80点アップ',
      result: '基本的なビジネス会話が可能なレベルに到達'
    },
    {
      id: 2,
      title: 'Stage 2: 実践力養成',
      period: '31-60日',
      content: [
        '会議でのプレゼンテーション練習',
        'メール・レポート作成スキル',
        '交渉・商談シミュレーション',
        'ケーススタディ演習'
      ],
      achievement: 'TOEIC累計150点アップ',
      result: '実務レベルの英語コミュニケーションが可能に'
    },
    {
      id: 3,
      title: 'Stage 3: 応用・マスター',
      period: '61-90日',
      content: [
        '業界特化表現習得',
        '高度な交渉スキル',
        'リーダーシップ英語',
        '総合実践トレーニング'
      ],
      achievement: 'TOEIC累計250点アップ',
      result: '海外出張・駐在レベルの英語力を獲得'
    }
  ];

  const currentStage = stages.find(s => s.id === activeTab);

  return (
    <section className="curriculum">
      <div className="container">
        <h2 className="section-title">3段階<br />マスター<br />システム</h2>

        <p className="curriculum-intro">
          プログラムは3つのステージで構成されています。
        </p>

        <img src="/curriculum-visual.jpg" alt="3段階学習システム" style={{width: '100%', borderRadius: '12px', marginBottom: '32px'}} />

        <div className="curriculum-tabs">
          {stages.map((stage) => (
            <button
              key={stage.id}
              className={`tab-button ${activeTab === stage.id ? 'active' : ''}`}
              onClick={() => setActiveTab(stage.id)}
            >
              {stage.title}
            </button>
          ))}
        </div>

        <div className="curriculum-content">
          <div className="stage-header">
            <h3>{currentStage.title}</h3>
            <p className="stage-period">{currentStage.period}</p>
          </div>

          <div className="stage-details">
            <div className="stage-content">
              <h4>学習内容</h4>
              <ul className="content-list">
                {currentStage.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="stage-achievement">
              <h4>到達目標</h4>
              <p className="achievement-text">{currentStage.achievement}</p>
              <p className="result-text">{currentStage.result}</p>
            </div>
          </div>
        </div>

        <div className="curriculum-note">
          <p>
            もちろん、「このプログラムで誰でも100%ビジネス英語が完璧になる」とは言いません。
          </p>
          <p>
            語学習得には個人差があります。
          </p>
          <p>
            しかし、体系的なカリキュラムと実践的トレーニングにより、
            <strong>90日後には確実に別人レベルの英語力</strong>を手にできます。
          </p>
          <p>
            それは、過去3,000名の受講生データが証明しています。
          </p>
        </div>

        <div className="curriculum-supplement">
          <h3>補完モジュール:<br />継続学習サポート</h3>
          <p>3ヶ月のプログラム修了後も、英語力を維持・向上させるための継続学習サポートを提供します。</p>
          
          <ul className="supplement-list">
            <li><strong>月次ニュースレター</strong> - 最新のビジネス英語トレンドと実践的Tips</li>
            <li><strong>定期アップデート</strong> - 新しい学習コンテンツと教材の追加</li>
            <li><strong>コミュニティアクセス</strong> - 同じ目標を持つ学習者とのネットワーキング</li>
          </ul>

          <p>
            これにより、プログラム修了後も継続的な成長が可能です。
          </p>
        </div>

        <div className="curriculum-efficiency">
          <h3>1週間で4,000時間分の<br />学習効果</h3>
          
          <p>
            このプログラムの驚異的な点は、<strong>学習効率の圧倒的な高さ</strong>です。
          </p>

          <div className="efficiency-comparison">
            <div className="comparison-item">
              <h4>従来型スクール</h4>
              <p>総学習時間: 約400時間</p>
              <p>総費用: 約120万円<br />（月5万円×24ヶ月）</p>
              <p>期間: 2年間</p>
            </div>

            <div className="comparison-vs">VS</div>

            <div className="comparison-item">
              <h4>本プログラム</h4>
              <p>総学習時間: 90時間<br />（1日30分×90日）</p>
              <p>総費用: 98,000円</p>
              <p>期間: 3ヶ月</p>
            </div>
          </div>

          <p className="efficiency-result">
            <strong>約1/4の時間と1/12の<br />コストで、同等以上の成果</strong>を実現します。
          </p>
        </div>

        <div className="curriculum-guarantee">
          <h3>最低でもTOEIC<br />200点アップ</h3>
          
          <p>
            保守的に見積もっても、真剣に取り組んだ受講生は、
          </p>

          <p className="guarantee-text">
            <strong>最低でもTOEIC<br />200点以上の<br />スコアアップ</strong>
          </p>

          <p>
            を達成しています。
          </p>

          <p>
            そして、それ以上に重要なのは、
          </p>

          <p className="guarantee-text">
            <strong>実務で即座に使える<br />実践的な英語力</strong>
          </p>

          <p>
            です。
          </p>

          <p>
            スコアアップと実務能力の両方を手にできる。<br />
            それが、このプログラムの2つの柱です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
