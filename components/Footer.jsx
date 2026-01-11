import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>会社情報</h4>
            <ul>
              <li><strong>販売者名</strong>: Online English Master Program</li>
              <li><strong>住所</strong>: [住所を記入]</li>
              <li><strong>電話番号</strong>: [電話番号を記入]</li>
              <li><strong>メールアドレス</strong>: support@example.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>リンク</h4>
            <ul>
              <li><a href="#privacy">プライバシーポリシー</a></li>
              <li><a href="#terms">特定商取引法に基づく表記</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
              <li><a href="#support">サポート</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>重要事項</h4>
            <p className="footer-note">
              本プログラムは、継続的な学習への取り組みを前提条件としています。
            </p>
            <p className="footer-note">
              成果を100％保証するものではございません。
            </p>
            <p className="footer-note">
              理由の如何を問わず返金には応じられませんので、この点を十分ご理解の上でご参加ください。
            </p>
            <p className="footer-note">
              真剣にビジネス英語習得を目指す方のみ、お申込みください。
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Online English Master Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
