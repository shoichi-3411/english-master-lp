import React from 'react';

const Guarantee = () => {
  return (
    <section className="guarantee">
      <div className="container">
        <h2 className="section-title">30日間全額返金保証</h2>

        <div className="guarantee-content">
          <p className="guarantee-intro">
            さらに、あなたのリスクを完全にゼロにするため、
          </p>

          <p className="guarantee-highlight">
            <strong>30日間全額返金保証</strong>
          </p>

          <p className="guarantee-text">
            をお付けします。
          </p>

          <div className="guarantee-details">
            <p>
              プログラム開始後30日以内であれば、理由を問わず全額返金いたします。
            </p>

            <p className="guarantee-statement">
              つまり、あなたは完全にリスクなく、このプログラムをお試しいただけるということです。
            </p>

            <div className="guarantee-conditions">
              <h3>保証の条件</h3>
              <ul>
                <li>返金を希望される場合は、サポートデスクにメールでご連絡ください</li>
                <li>30日以内であれば理由を問わず返金いたします</li>
                <li>返金手続きは迅速に進めます（通常3営業日以内）</li>
              </ul>
            </div>
          </div>

          <div className="guarantee-icon">
            <p>✓ 完全リスク0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
