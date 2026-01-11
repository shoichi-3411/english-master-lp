import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="timer">
          <span className="timer-label">⏰</span>
          <div className="timer-display">
            <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="timer-unit">日</span>
            <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="timer-unit">時間</span>
            <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="timer-unit">分</span>
            <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="timer-unit">秒</span>
          </div>
        </div>

        <div className="limited-badge">🔴 期間限定公開</div>

        <h1 className="hero-title">
          ビジネス英語習得を<br />
          わずか3ヶ月で実現する<br />
          実践型プログラム
        </h1>

        <p className="hero-subtitle">
          あなたは1日30分<br />
          スマホで学習するだけ
        </p>

        <h2 className="hero-program-name">
          オンライン英会話<br />
          マスタープログラム<br />
          本格始動
        </h2>

        <div className="hero-benefits">
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            <span>出張・会議で通用する実践英語</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            <span>最短90日で即戦力レベルへ</span>
          </div>
          <div className="benefit-item">
            <span className="checkmark">✓</span>
            <span>15年の指導実績に基づく独自メソッド</span>
          </div>
        </div>

        <div className="hero-cta-buttons">
          <button className="hero-cta-primary" onClick={() => {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            スタンダードプランに今すぐ参加
          </button>
          <button className="hero-cta-secondary" onClick={() => {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
          }}>
            詳細を見る
          </button>
        </div>

        <p className="scroll-hint">↓ スクロールして詳細をご確認ください</p>
      </div>

      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
