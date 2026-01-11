import React from 'react';

const Problem = () => {
  return (
    <section className="problem">
      <div className="container">
        <h2 className="section-title">英語力不足がキャリアを阻む現実</h2>

        <div className="problem-content">
          <div className="problem-text">
            <p className="problem-intro">
              正直に言えば、誰もが思っていることがあります。
            </p>

            <div className="problem-quote">
              <p>「仕事で英語が必要なのに、時間がない」</p>
              <p>「英会話スクールに通っても、実務で使えない」</p>
            </div>

            <p className="problem-question">
              そう感じていませんか?
            </p>

            <div className="problem-scenarios">
              <div className="scenario">
                <p>
                  海外とのZoom会議で発言できず、ただ聞いているだけ。
                </p>
              </div>
              <div className="scenario">
                <p>
                  重要なメールは上司に確認してもらい、商談のチャンスを逃す。
                </p>
              </div>
              <div className="scenario">
                <p>
                  英語ができないだけで、昇進のチャンスや海外プロジェクトから外されてしまう。
                </p>
              </div>
            </div>

            <p className="problem-reflection">
              この状況、本当に仕方ないのでしょうか?
            </p>

            <div className="instructor-note">
              <p>
                <strong>私自身、英語学習に多くの時間を費やしてきた経験があります。</strong>
              </p>
              <p>
                従来の学習法では、実務に必要な英語力は身につきません。
              </p>
            </div>

            <p className="problem-empathy">
              あなたも同じ悩みを抱えているはずです。
            </p>

            <div className="problem-cycle">
              <p>
                時間をかけて英会話教室に通い、高額な教材を買い、それでも実践で使えない英語。
              </p>
              <p>
                大切な家族との時間、自己投資できる時間が、その代償として失われていく。
              </p>
            </div>
          </div>

          <div className="problem-image">
            <div className="image-placeholder">
              <p>【講師の顔写真またはイメージ画像】</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
