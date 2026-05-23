/* sections.jsx — page-level sections of the homepage
   Enhanced with section watermarks, scroll-reveal hooks, stat counters.
   ----------------------------------------------------------- */

/* Small helper components used in this file */
const Bracket = ({ pos }) => <div className={`nx-bracket nx-bracket--${pos}`}></div>;
const SectionNum = ({ children }) => <div className="nx-section__num" aria-hidden="true">{children}</div>;

/* ===== HEADER ===== */
const Header = () => (
  <header className="nx-header">
    <a href="#top" className="nx-header__brand">
      <img src="assets/logo-transparent.png" alt="" className="nx-header__mark" />
      <div className="nx-header__logo">
        西岡行政書士事務所
        <small>NISHIOKA GYOSEI SHOSHI OFFICE</small>
      </div>
    </a>
    <div className="nx-header__nav">
      <a href="#blog" className="nx-header__link">📚 コラム</a>
      <Btn variant="header" href="#contact">無料相談する</Btn>
    </div>
  </header>
);

/* ===== HERO ===== */
const Hero = () => (
  <section className="nx-hero" data-screen-label="01 Hero">
    <div className="nx-hero__pattern"></div>
    <img src="assets/logo-transparent.png" alt="" className="nx-hero__seal" />
    <div className="nx-hero__inner">
      <div className="nx-hero__badge reveal">
        <HeroBadge>元広島県警察官13年 ｜ 行政書士</HeroBadge>
      </div>
      <h1 className="nx-hero__display reveal reveal--delay-1">
        EX-POLICE<br/>OFFICER<span>.</span>
      </h1>
      <div className="nx-hero__jp reveal reveal--delay-2">警察を知る行政書士が、あなたの許可を取る。</div>
      <div className="nx-hero__copy reveal reveal--delay-2">
        風営法・深夜営業届・道路使用許可・古物商許可——<br/>
        <strong>これらはすべて、警察が窓口の申請です。</strong><br/>
        13年間、広島県警察に勤務した経験があるからこそ、<br/>
        窓口の審査担当者が何を見ているか、私は知っています。
      </div>
      <div className="nx-hero__meta reveal reveal--delay-3">
        <span className="nx-hero-chip"><strong>13年</strong> 警察勤務</span>
        <span className="nx-hero-chip"><strong>0円</strong> 初回相談</span>
        <span className="nx-hero-chip"><strong>24h</strong> LINE受付</span>
        <span className="nx-hero-chip"><strong>土日祝</strong> 対応可</span>
      </div>
      <div className="nx-hero__buttons reveal reveal--delay-3">
        <Btn variant="primary" icon="📱" href="#contact">LINE で無料相談</Btn>
        <Btn variant="outline" href="#services">サービスを見る →</Btn>
      </div>
    </div>
    <div className="nx-hero__scroll">SCROLL</div>
  </section>
);

/* ===== POLICE STRENGTH ===== */
const PoliceStrength = () => (
  <section className="nx-section nx-police" data-screen-label="02 Police Strength">
    <SectionNum>01</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-police__inner">
      <div className="reveal"><Eyebrow>WHY EX-OFFICER</Eyebrow></div>
      <div className="reveal reveal--delay-1"><SectionTitle>「元警察官の行政書士」が選ばれる、本当の理由。</SectionTitle></div>
      <div className="reveal reveal--delay-2">
        <Lead>
          警察への申請は、書類を揃えるだけでは通りません。
          担当者の判断基準・審査の流れ・不備になりやすいポイント——
          内側から見てきたからこそ、最短で許可を取る方法がわかります。
        </Lead>
      </div>
      <div className="nx-police__tags reveal reveal--delay-2">
        <PoliceTag icon="🚨">風俗営業許可（風営法）</PoliceTag>
        <PoliceTag icon="🌙">深夜営業届出</PoliceTag>
        <PoliceTag icon="🚗">道路使用許可</PoliceTag>
        <PoliceTag icon="♻️">古物商許可</PoliceTag>
        <PoliceTag icon="🛡️">警備業認定</PoliceTag>
      </div>
      <div className="reveal reveal--delay-3">
        <QuoteBlock author="代表行政書士 西岡祐也（元広島県警察官）">
          警察の窓口担当者は、申請書の「どこを見て」「何で却下するか」を、一定の基準で評価しています。
          私は13年間その内側にいたので、相手が何を求めているかが手に取るようにわかります。
          だから「書類の不備で差し戻し」をほぼゼロにできます。
        </QuoteBlock>
      </div>
    </div>
  </section>
);

/* ===== SERVICES ===== */
const Services = () => (
  <section className="nx-section nx-services" id="services" data-screen-label="03 Services">
    <SectionNum>02</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-services__inner">
      <div className="reveal"><Eyebrow>SERVICES</Eyebrow></div>
      <div className="reveal reveal--delay-1"><SectionTitle>取り扱い業務</SectionTitle></div>

      <div className="nx-service-group reveal">
        <GroupLabel tone="navy">警察窓口の申請 — 元警察官の強み</GroupLabel>
        <div className="nx-service-grid">
          <ServiceCard icon="🎤" title="風俗営業許可（風営法）"
            desc="キャバクラ・ガールズバー・ホストクラブ等。図面作成から警察署への提出まで一括対応。"
            price="要見積もり" />
          <ServiceCard icon="🌙" title="深夜営業届出"
            desc="夜0時以降営業のバー・スナック等。図面作成・届出書類・警察署対応をすべて代行。"
            price="77,000円〜（税込・図面込み）" />
          <ServiceCard icon="🚗" title="道路使用・占用許可"
            desc="工事・足場・看板設置等。建設業者からのセット依頼も歓迎。"
            price="要見積もり" />
          <ServiceCard icon="♻️" title="古物商許可"
            desc="リサイクルショップ・中古車・フリマ転売事業者向け。警察署への申請を代行。"
            price="60,000円〜（税込）" />
        </div>
      </div>

      <div className="nx-service-group reveal">
        <GroupLabel tone="gold">事業・開業サポート</GroupLabel>
        <div className="nx-service-grid">
          <ServiceCard icon="🏗️" title="建設業許可"
            desc="新規取得・更新・業種追加・決算変更。道路使用許可とのセット依頼も対応。"
            price="要見積もり" />
          <ServiceCard icon="🏢" title="会社設立"
            desc="株式会社・合同会社。定款作成〜公証人手続き〜法務局提出まで一括サポート。"
            price="150,000円〜（税込・実費別）" />
          <ServiceCard icon="🍺" title="飲食店開業 / 酒類販売"
            desc="保健所・税務署への届出・申請。個人店から法人まで対応。"
            price="55,000円〜（税込）" />
          <ServiceCard icon="💰" title="創業融資サポート"
            desc="日本政策金融公庫向け。事業計画書作成から面談対策まで。警察官時代の経験が信用補完に活きる。"
            price="55,000円〜 + 成功報酬" />
        </div>
      </div>

      <div className="nx-service-group reveal">
        <GroupLabel tone="navy">暮らしのサポート</GroupLabel>
        <div className="nx-service-grid">
          <ServiceCard icon="📜" title="遺言書作成"
            desc="自筆証書・公正証書。公証人とのやり取りまでサポート。"
            price="66,000円〜（税込）" />
          <ServiceCard icon="🪦" title="墓じまい（改葬許可）"
            desc="お墓の引っ越し・整理。書類作成から関係機関への連絡まで代行。"
            price="44,000円〜（税込）" />
        </div>
      </div>
    </div>
  </section>
);

/* ===== ABOUT ===== */
const About = () => (
  <section className="nx-section nx-section--dark nx-about" data-screen-label="04 About">
    <SectionNum>03</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-about__inner">
      <div className="reveal reveal--scale">
        <FounderCard
          photoSrc="assets/photo.jpg"
          nameJa="西岡 祐也"
          nameEn="YUYA NISHIOKA"
          items={[
            '広島県警察 勤務 13年（交番・パトカー・鑑識等）',
            '行政書士試験 合格',
            '西岡行政書士事務所 開業 ／ 広島県行政書士会 所属',
          ]}
        />
      </div>
      <div>
        <div className="reveal"><Eyebrow>ABOUT ME</Eyebrow></div>
        <h2 className="nx-about__heading reveal reveal--delay-1">「やらせてくれないなら、自分でやってやろう」と思った。</h2>
        <div className="reveal reveal--delay-2">
          <p className="nx-about__body">
            19歳のとき、大学受験に失敗し、フリーターになりました。貯めたお金で公務員予備校に通い、警察官に。広島県警察で13年間、交番・パトカー・鑑識など様々な現場を経験しました。
          </p>
          <p className="nx-about__body">
            やりたい仕事をなかなかさせてもらえない日々の中、行政書士試験に挑戦。合格して退職し、事務所を開業しました。
          </p>
          <p className="nx-about__body">
            行政書士を志したのは、<strong>脳障害のある妹の存在</strong>がきっかけです。成年後見制度を調べるうちに、「人のために動ける仕事がしたい」と思うようになりました。
          </p>
          <p className="nx-about__body">
            <strong>公務員が何を考えて仕事をしているか、私はよく知っています。</strong> だから、許可申請の窓口担当者の視点に立って書類を作ることができます。それが私の最大の強みです。
          </p>
        </div>
        <div className="nx-about__stats reveal reveal--delay-3">
          <Stat value={<span data-count="13">0</span>} unit="年" label="広島県警察 勤務" />
          <Stat value="0" unit="円" label="初回相談 無料" />
          <Stat value={<span data-count="365">0</span>} unit="日" label="LINE相談 対応" />
        </div>
      </div>
    </div>
  </section>
);

/* ===== REASONS ===== */
const Reasons = () => (
  <section className="nx-section nx-reasons" data-screen-label="05 Reasons">
    <SectionNum>04</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-reasons__inner">
      <div className="reveal"><Eyebrow>WHY CHOOSE US</Eyebrow></div>
      <div className="reveal reveal--delay-1"><SectionTitle>西岡行政書士事務所が選ばれる3つの理由</SectionTitle></div>
      <div className="nx-reasons__grid">
        <div className="reveal reveal--delay-1">
          <ReasonCard num="01"
            title={<>警察への申請は、<br/>元警察官に任せるのが最速</>}
            body="風営法・深夜営業届・道路使用許可など、警察が窓口の申請は審査基準が複雑です。内側を知っているから、差し戻しなく最短で通します。" />
        </div>
        <div className="reveal reveal--delay-2">
          <ReasonCard num="02"
            title={<>土日祝・夜間も対応。<br/>昼間忙しい事業者のために。</>}
            body="受付時間9〜19時、土日祝も対応可。LINE相談は24時間受付。現場で忙しい建設業者・飲食店オーナーでも気軽に相談できます。" />
        </div>
        <div className="reveal reveal--delay-3">
          <ReasonCard num="03"
            title={<>料金明確・相談無料。<br/>見積もりに納得してから依頼。</>}
            body="料金は事前にお見積もり。「話だけ聞いてみたい」「いくらかかるか知りたい」だけでも大歓迎。相談費用はいただきません。" />
        </div>
      </div>
    </div>
  </section>
);

/* ===== SIMULATOR CTA ===== */
const SimulatorCTA = () => (
  <section className="nx-sim-section" data-screen-label="06 Simulator CTA">
    <div className="nx-sim-card reveal reveal--scale">
      <div className="nx-sim__left">
        <div className="nx-sim__eyebrow">ONLINE QUOTE SIMULATOR</div>
        <div className="nx-sim__heading">「<em>いくらかかる？</em>」<br/>60秒でわかります。</div>
        <div className="nx-sim__lead">
          業務と状況を選ぶだけで概算費用が表示されます。個人情報不要・完全無料。まず費用感を確認してから相談できます。
        </div>
        <div className="nx-sim__chips">
          <SimChip>約60秒</SimChip>
          <SimChip>個人情報不要</SimChip>
          <SimChip>完全無料</SimChip>
          <SimChip>全11サービス対応</SimChip>
        </div>
        <Btn variant="sim" icon="💴">費用をシミュレーションする →</Btn>
        <div className="nx-sim__btn-note">納得してからご依頼いただけます</div>
      </div>
      <div className="nx-sim__right">
        <div className="nx-sim__right-label">業務を選んで即シミュレーション</div>
        <SimRow icon="🎤" name="風俗営業許可（風営法）" price="12万円〜" />
        <SimRow icon="🌙" name="深夜営業届出" price="6万円〜" />
        <SimRow icon="♻️" name="古物商許可" price="6万円〜" />
        <SimRow icon="🏗️" name="建設業許可" price="15万円〜" />
        <SimRow icon="🏢" name="会社設立" price="15万円〜" />
        <a className="nx-sim__all-link" href="#">全11サービスのシミュレーターを開く →</a>
      </div>
    </div>
  </section>
);

/* ===== BOOKING ===== */
const Booking = () => (
  <section className="nx-section nx-section--dark nx-calendar-section" data-screen-label="07 Booking">
    <SectionNum>05</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-calendar__inner on-navy">
      <div className="reveal"><Eyebrow>BOOK A CONSULTATION</Eyebrow></div>
      <div className="reveal reveal--delay-1"><SectionTitle tone="white">無料相談の予約はこちら</SectionTitle></div>
      <div className="reveal reveal--delay-2">
        <Lead tone="on-navy">
          空いている時間をクリックして、そのままご予約いただけます。<br/>
          相談は無料です。お気軽にどうぞ。
        </Lead>
      </div>
      <div className="nx-calendar__wrap reveal reveal--delay-2">
        <div>📅 カレンダーがここに表示されます<br/><small style={{opacity:0.6}}>（本番では Google Apps Script の予約カレンダーを埋め込み）</small></div>
        <div className="nx-calendar__note" style={{marginTop: 32, marginLeft: -40, marginRight: -40, marginBottom: -80}}>
          📅 ご予約後、確認のご連絡をさせていただきます。急ぎの場合はLINEまたはお電話でどうぞ。
        </div>
      </div>
    </div>
  </section>
);

/* ===== CONTACT ===== */
const Contact = () => (
  <section className="nx-section nx-contact" id="contact" data-screen-label="08 Contact">
    <SectionNum>06</SectionNum>
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-contact__inner">
      <div className="reveal"><Eyebrow>CONTACT</Eyebrow></div>
      <div className="reveal reveal--delay-1"><SectionTitle>まず、気軽に相談してください。</SectionTitle></div>
      <div className="reveal reveal--delay-2">
        <Lead>「これって相談していいのかな？」そんな問い合わせでも、まったく問題ありません。費用もかかりません。</Lead>
      </div>
      <div className="nx-contact__grid">
        <div className="reveal reveal--delay-2">
          <ContactCard
            featured
            icon="💬"
            title="LINE で無料相談"
            desc="24時間受付・顔出し不要・相談だけでもOK。一番気軽なのはLINEです。"
            action={<Btn variant="line" icon="📱">LINE を開く</Btn>}
          />
        </div>
        <div className="reveal reveal--delay-3">
          <ContactCard
            icon="📞"
            title="電話でのお問い合わせ"
            desc="受付時間 9:00〜19:00（土日祝も対応可）通話中・外出中は折り返します。"
            action={
              <a className="nx-btn nx-btn--phone" href="tel:09080688527">
                090-8068-8527
                <small>タップで発信</small>
              </a>
            }
          />
        </div>
      </div>
    </div>
  </section>
);

/* ===== INFO STRIP ===== */
const InfoStrip = () => (
  <div className="nx-info-strip" data-screen-label="09 Info">
    <InfoItem label="OFFICE">西岡行政書士事務所</InfoItem>
    <InfoItem label="ADDRESS">広島市中区大手町4-6-22</InfoItem>
    <InfoItem label="REGISTRATION">2234 1036</InfoItem>
    <InfoItem label="HOURS">9:00〜19:00（土日祝可）</InfoItem>
  </div>
);

/* ===== FOOTER ===== */
const Footer = () => (
  <footer className="nx-footer" data-screen-label="10 Footer">
    <img src="assets/logo-transparent.png" alt="" className="nx-footer__mark" />
    <div className="nx-footer__wordmark">
      西岡行政書士事務所
      <small>NISHIOKA GYOSEI SHOSHI OFFICE</small>
    </div>
    <p>
      <strong>© 西岡行政書士事務所</strong> ｜ 広島県行政書士会所属 ｜ 登録番号 22341036
    </p>
    <p>広島市中区大手町4-6-22 ｜ TEL: 090-8068-8527</p>
    <div className="nx-footer__links">
      <a href="#" className="nx-footer__link">コラム</a>
      <a href="#" className="nx-footer__link">警察申請まとめページ</a>
      <a href="#" className="nx-footer__link">士業の先生方へ（業務連携）</a>
      <a href="#" className="nx-footer__link">古物商許可</a>
      <a href="#" className="nx-footer__link">民泊許可</a>
      <a href="#" className="nx-footer__link">農地転用</a>
      <a href="#" className="nx-footer__link">風営法許可</a>
      <a href="#" className="nx-footer__link">建設業許可</a>
      <a href="#" className="nx-footer__link">深夜営業届</a>
      <a href="#" className="nx-footer__link">道路使用・占用許可</a>
    </div>
  </footer>
);

/* ===== LINE FAB ===== */
const FloatingLineCTA = () => (
  <a href="#contact" className="nx-fab" aria-label="LINEで無料相談">
    <span>📱</span><span>LINE で相談</span>
  </a>
);

Object.assign(window, {
  Header, Hero, PoliceStrength, Services, About, Reasons,
  SimulatorCTA, Booking, Contact, InfoStrip, Footer, FloatingLineCTA,
});
