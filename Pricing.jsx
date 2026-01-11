import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">価格のご案内</h2>

        <div className="pricing-intro">
          <p className="pricing-message">
            本ページを最後までお読みいただいた方限定で「特別割引」をご用意いたしました。
          </p>
          <p className="pricing-limited">
            ※48時間限定の特別条件です。
          </p>
        </div>

        <div className="pricing-plans">
          <div className="plan-card standard">
            <div className="plan-header">
              <h3 className="plan-name">スタンダード<br />プラン</h3>
              <p className="plan-description">3ヶ月完全体系</p>
            </div>

            <div className="plan-pricing">
              <div className="plan-original">
                <span className="label">通常価格</span>
                <span className="price">98,000<br />円</span>
              </div>
              <div className="plan-discount">
                <span className="discount-amount">15,000<br />円割引</span>
              </div>
              <div className="plan-final">
                <span className="label">特別価格</span>
                <span className="price highlight">83,000<br />円</span>
              </div>
            </div>

            <div className="plan-details">
              <p className="plan-monthly">月額約27,666<br />円</p>
              <ul className="plan-features">
                <li>3ヶ月完全体系<br />カリキュラム</li>
                <li>全学習素材への<br />アクセス</li>
                <li>月次グループ<br />コーチング（7回）</li>
                <li>学習者コミュニティ<br />アクセス</li>
                <li>30日間全額<br />返金保証</li>
              </ul>
            </div>

            <button className="plan-button">
              スタンダードプランに<br />今すぐ参加
            </button>
          </div>

          <div className="plan-card executive recommended">
            <div className="plan-badge-wrapper">
              <div className="plan-badge">推奨</div>
            </div>
            
            <div className="plan-header">
              <h3 className="plan-name">エグゼクティブ<br />プラン</h3>
              <p className="plan-description">スタンダード+<br />4種プレミアム<br />サービス</p>
            </div>

            <div className="plan-pricing">
              <div className="plan-original">
                <span className="label">通常価格</span>
                <span className="price">148,000<br />円</span>
              </div>
              <div className="plan-discount">
                <span className="discount-amount">20,000<br />円割引</span>
              </div>
              <div className="plan-final">
                <span className="label">特別価格</span>
                <span className="price highlight">128,000<br />円</span>
              </div>
            </div>

            <div className="plan-details">
              <p className="plan-monthly">月額約42,666<br />円</p>
              <ul className="plan-features">
                <li>スタンダード<br />プラン全て</li>
                <li>ビジネスシーン別<br />フレーズ集<br />（5万円相当）</li>
                <li>月次グループ<br />コーチング（7回）</li>
                <li>学習者コミュニティ<br />永久利用権</li>
                <li>新コンテンツ<br />優待価格（50%OFF）</li>
                <li>30日間全額<br />返金保証</li>
              </ul>
            </div>

            <button className="plan-button primary">
              エグゼクティブプランに<br />今すぐ参加
            </button>
          </div>
        </div>

        <div className="pricing-note">
          <p>
            お申込み時は、プラン選択に誤りがないかご確認ください。
          </p>
          <p>
            48時間限定の特別条件ですので、この機会を逃さずご活用ください。
          </p>
        </div>

        <div className="pricing-details">
          <h3>複数の視点から見た<br />価格の正当性</h3>

          <div className="pricing-perspective">
            <h4>月額換算で見れば</h4>
            <p>
              スタンダードプラン: 月額約27,666<br />円（3ヶ月で83,000<br />円）
            </p>
            <p>
              標準的な英会話教室の月謝は4万円、個人指導型コーチングでは月5万円以上が相場です。
            </p>
            <p className="perspective-highlight">
              週7日終日利用可能で、疑問点には即時対応が受けられる高品質プログラムが月額3.2万<br />円。
            </p>
          </div>

          <div className="pricing-perspective">
            <h4>日額換算で見れば</h4>
            <p>
              スタンダードプラン: 1日あたり約922<br />円
            </p>
            <p className="perspective-highlight">
              ランチ代を一食分節約するだけで実現できます。
            </p>
            <p>
              カフェでのラテを週2回我慢すれば十分。
            </p>
            <p>
              コンビニでの衝動買いを控えるだけでOK。
            </p>
          </div>

          <div className="pricing-perspective">
            <h4>投資回収の観点から見れば</h4>
            <p>
              ビジネス英語の習得により、年収50万～100万<br />円の上昇は十分現実的です。
            </p>
            <p>
              外資系企業やグローバル組織への転職なら年収200万<br />円増も珍しくありません。
            </p>
            <p className="perspective-highlight">
              この視点で考えれば、98,000<br />円の投資は<strong>半年以内に完全回収</strong>が見込めます。
            </p>
          </div>

          <div className="pricing-perspective">
            <h4>スキルの永続性から見れば</h4>
            <p>
              一度身につければ、このスキルは生涯資産になります。
            </p>
            <p>
              学習期間は3ヶ月限定ですが、獲得したビジネス英語力は永続的に活用できます。
            </p>
            <p className="perspective-highlight">
              プログラム終了後も、そのスキルは衰えることなく、あなたのキャリアを支え続けます。
            </p>
          </div>
        </div>

        <div className="pricing-support">
          <h3>決済に関する<br />サポート</h3>
          <p>
            お支払いは、クレジットカード決済・銀行振込に対応しております。
          </p>
          <p>
            決済時のトラブルやご不明点がございましたら、下記までお問い合わせください。
          </p>
          <p className="support-email">
            <strong>support@example.com</strong>
          </p>
          <p className="support-note">
            （参加に関するご質問・ご相談にも対応いたします）
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
