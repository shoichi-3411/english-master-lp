import React from 'react';

const Comparison = () => {
  return (
    <section className="comparison">
      <div className="container">
        <h2 className="section-title">従来型スクールという<br />時代遅れの選択</h2>

        <p className="comparison-intro">
          「週1回50分のグループレッスンに通う」<br />
          これは、インターネット以前の時代の学習方法です。
        </p>

        <p className="comparison-need">
          現代のビジネスパーソンに必要なのは、
        </p>

        <p className="comparison-highlight">
          <strong>効率的で、柔軟で、実務に<br />直結する学習</strong>
        </p>

        <img src="/comparison-chart.jpg" alt="従来型スクール vs オンラインプログラム比較" style={{width: '100%', borderRadius: '12px', marginBottom: '32px'}} />

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>従来型スクール</th>
                <th className="highlight">本プログラム</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>月額費用</td>
                <td>3万～5万円</td>
                <td className="highlight">月額3.2万円<br />（3ヶ月で98,000円）</td>
              </tr>
              <tr>
                <td>初期投資</td>
                <td>10万円以上</td>
                <td className="highlight">98,000円<br />（買い切り）</td>
              </tr>
              <tr>
                <td>学習時間</td>
                <td>週2回×50分</td>
                <td className="highlight">1日30分<br />（自由）</td>
              </tr>
              <tr>
                <td>通学時間</td>
                <td>片道30分×週2回</td>
                <td className="highlight">不要</td>
              </tr>
              <tr>
                <td>カリキュラム</td>
                <td>固定</td>
                <td className="highlight">カスタマイズ<br />可能</td>
              </tr>
              <tr>
                <td>実務直結性</td>
                <td>低い</td>
                <td className="highlight">高い</td>
              </tr>
              <tr>
                <td>継続率</td>
                <td>低い</td>
                <td className="highlight">97%</td>
              </tr>
              <tr>
                <td>3ヶ月後の成果</td>
                <td>TOEIC平均<br />80点アップ</td>
                <td className="highlight">TOEIC平均<br />250点アップ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="comparison-details">
          <h3>格安オンライン英会話は、<br />あなたのゴールに届かない</h3>

          <p>
            「格安のオンライン英会話なら月額1万円未満で利用できますよ！」
          </p>

          <p>
            という考えが頭をよぎったかもしれませんが、
          </p>

          <div className="comparison-issue">
            <p>
              格安オンライン英会話の大半は、日常的な雑談スキルの向上を目指す人々や、気軽に外国人と話したいというニーズに応えるサービスです。
            </p>

            <p>
              毎日レッスンを重ねても「ビジネスの最前線で通用する英語力」への到達は困難。
            </p>

            <p className="comparison-reason">
              理由は明白で、
            </p>

            <p className="comparison-reason-detail">
              「体系化されたカリキュラムが存在せず、商談や交渉に必須の専門表現を学ぶ設計になっていない」
            </p>

            <p>
              からです。
            </p>

            <p>
              日常会話はこなせても、役員会議でのプレゼンには対応できない。<br />
              メール作成は可能でも、契約条件の交渉は歯が立たない。<br />
              講師の指導力も一定せず、毎回異なる相手に自己紹介を繰り返すうちに3ヶ月が終わる——
            </p>

            <p>
              こんな経験に心当たりはないでしょうか？
            </p>
          </div>

          <h3>計画性のない英語学習は、<br />貴重な時間を奪う罠</h3>

          <p>
            と化します。
          </p>

          <p>
            明確な学習設計がないまま、ただ漠然と会話セッションを消化するだけでは、本気で成長したいビジネス層を自動的に遠ざけ、
          </p>

          <p className="comparison-statistic">
            「3年続けても実務では使えず、<br />結局挫折する学習者が90％を占める」
          </p>

          <p>
            という統計データも現れています。
          </p>

          <p>
            目的意識を欠いた学習の唯一のメリットは「とりあえず英語に触れている満足感」という心理的安心材料に過ぎません。
          </p>

          <h3>AI翻訳の時代だからこそ、<br />実務英語力が必須</h3>

          <p>
            さらに時代背景を踏まえると、
          </p>

          <p className="comparison-future">
            「AIが同時通訳を担う」
          </p>

          <p>
            未来が確実に到来しつつあります。
          </p>

          <p>
            だからこそ、短期集中でビジネス実務に直結する英語力を獲得し、AI翻訳ツールと併用して成果を最大化する。
          </p>

          <p>
            これが、これからのグローバル人材の必須戦略となるでしょう。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
