import React from 'react';

const Summary = () => {
  return (
    <section className="summary">
      <div className="container">
        <div className="summary-content">
          <div className="summary-text">
            <p className="summary-intro">
              3ヶ月でビジネス英語が話せるようになる実践型メソッドを完全体系化した
              <strong>「オンライン英会話マスタープログラム」</strong>。
            </p>
            
            <p className="summary-description">
              実際の受講生は、わずか90日間で海外出張や英語会議に対応できるレベルに到達しています。
            </p>

            <p className="summary-highlight">
              受講開始から3ヶ月後、<strong>TOEICスコアが平均250点向上</strong>。
            </p>

            <p className="summary-closing">
              その証拠となる受講生の声をご覧ください。
            </p>
          </div>

          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-value">250<br />点</div>
              <div className="stat-label">TOEIC<br />平均スコア<br />アップ</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">97<br />%</div>
              <div className="stat-label">受講生<br />満足度</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">97<br />%</div>
              <div className="stat-label">継続率</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3,000<br />+</div>
              <div className="stat-label">受講生数</div>
            </div>
          </div>
        </div>

        <div className="results-graph-container">
          <img src="/results-graph-v2.jpg" alt="TOEIC実績データ" className="results-graph" />
        </div>

        <p className="summary-footer">
          数字が全てを物語っています。
        </p>
      </div>
    </section>
  );
};

export default Summary;
