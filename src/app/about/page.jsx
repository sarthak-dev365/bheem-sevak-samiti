import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import "../../styles/about-page.css";
export const metadata = {
  title: "About Bheem Sevak Samiti | Our Mission & Vision",
  description:
    "Learn about Bheem Sevak Samiti, Uttar Pradesh — its history, vision, mission, objectives, programs, impact and commitment to education, social reform and environmental protection.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ==================================================
               NAVBAR
            ================================================== */}

      <Navbar />

      {/* ==================================================
               ABOUT PAGE HERO
            ================================================== */}

      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="about-page-container">
          <div className="about-page-hero-content">
            <span className="about-page-eyebrow">About Bheem Sevak Samiti</span>

            <h1 id="about-page-title">
              Building an Educated,
              <span>Aware & Equal Society</span>
            </h1>

            <p>
              भीम सेवक समिति, उत्तर प्रदेश एक सामाजिक एवं शैक्षिक संस्था है, जो
              शिक्षा, सामाजिक सुधार, पर्यावरण संरक्षण एवं जन-जागरूकता के माध्यम
              से समाज के गरीब, वंचित एवं जरूरतमंद वर्गों को सशक्त बनाने के लिए
              कार्य कर रही है।
            </p>

            <div className="about-page-hero-meta">
              <div>
                <strong>9 April 2018</strong>

                <span>Established</span>
              </div>

              <div>
                <strong>Uttar Pradesh</strong>

                <span>Primary Working Region</span>
              </div>

              <div>
                <strong>500+ Volunteers</strong>

                <span>Community Participation</span>
              </div>
            </div>
          </div>

          {/* Hero visual placeholder */}

          <div className="about-page-hero-visual">
            <div className="about-page-hero-card">
              <span>Our Message</span>

              <strong>“शिक्षित बनो, संगठित रहो, संघर्ष करो”</strong>

              <small>Bheem Sevak Samiti</small>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
               WHO WE ARE
            ================================================== */}

      <section className="about-story-section" id="who-we-are">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Who We Are</span>

            <h2>
              शिक्षा और सामाजिक जागरूकता
              <strong>हमारे परिवर्तन की नींव</strong>
            </h2>
          </div>

          <div className="about-story-grid">
            <div className="about-story-content">
              <p>
                भीम सेवक समिति, उत्तर प्रदेश की स्थापना 9 अप्रैल 2018 को ग्राम
                सुनेहटी खड़खड़ी, जनपद सहारनपुर, उत्तर प्रदेश में की गई।
              </p>

              <p>
                संस्था की स्थापना समाज में शिक्षा, सामाजिक जागरूकता, सामाजिक
                सुधार एवं पर्यावरण संरक्षण के उद्देश्य से की गई। संस्था शिक्षा
                और सामाजिक समानता के माध्यम से समाज के वंचित एवं जरूरतमंद वर्गों
                को सशक्त बनाने के लिए निरंतर कार्य कर रही है।
              </p>

              <p>
                संस्था का प्रयास है कि शिक्षा के माध्यम से व्यक्ति को जागरूक
                बनाया जाए और जागरूक व्यक्ति के माध्यम से समाज में सकारात्मक
                परिवर्तन लाया जाए।
              </p>
            </div>

            <div className="about-story-highlight">
              <span>Since</span>

              <strong>2018</strong>

              <p>समाज के लिए शिक्षा, समानता और सेवा की निरंतर यात्रा</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
               FOUNDER
            ================================================== */}

      <section className="about-founder-section" id="founder">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Leadership</span>

            <h2>
              संस्था के
              <strong>संस्थापक एवं राष्ट्रीय अध्यक्ष</strong>
            </h2>
          </div>

          <div className="about-founder-card">
            <div className="about-founder-visual">
              <Image
                src="/images/about/founder.png"
                alt="Shri Vikas Kumar - Founder and National President of Bheem Sevak Samiti"
                className="about-founder-image"
                width={600}
                height={600}
              />
            </div>

            <div className="about-founder-content">
              <span>Founder & National President</span>

              <h3>श्री विकास कुमार</h3>

              <p>
                संस्था के गठन एवं विस्तार में श्री विकास कुमार की महत्वपूर्ण
                भूमिका रही है। उनके नेतृत्व में संस्था द्वारा विभिन्न क्षेत्रों
                में शैक्षिक, सामाजिक एवं पर्यावरणीय गतिविधियाँ संचालित की जा रही
                हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
               VISION & MISSION
            ================================================== */}

      <section className="about-vision-section" id="vision-mission">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Our Direction</span>

            <h2>
              हमारी सोच और
              <strong>हमारा मिशन</strong>
            </h2>
          </div>

          <div className="about-vision-grid">
            <article className="about-vision-card">
              <span>Vision</span>

              <h3>एक समानतापूर्ण और संवेदनशील समाज</h3>

              <p>
                भीम सेवक समिति का उद्देश्य एक ऐसे शिक्षित, जागरूक, संगठित,
                समानतापूर्ण एवं संवेदनशील समाज का निर्माण करना है, जिसमें
                प्रत्येक व्यक्ति को शिक्षा, सम्मान, समान अवसर और सामाजिक न्याय
                प्राप्त हो।
              </p>
            </article>

            <article className="about-vision-card">
              <span>Mission</span>

              <h3>शिक्षा और जागरूकता के माध्यम से सशक्तिकरण</h3>

              <p>
                शिक्षा के प्रसार, सामाजिक सुधार, पर्यावरण संरक्षण एवं
                जन-जागरूकता के माध्यम से समाज के कमजोर एवं वंचित वर्गों को सशक्त
                बनाना तथा उन्हें समाज की मुख्यधारा से जोड़ना संस्था का प्रमुख
                मिशन है।
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
               OBJECTIVES
            ================================================== */}

      <section className="about-objectives-section" id="objectives">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Our Objectives</span>

            <h2>
              हमारे प्रमुख
              <strong>उद्देश्य</strong>
            </h2>
          </div>

          <div className="about-objectives-grid">
            {[
              "गरीब एवं जरूरतमंद बच्चों को निःशुल्क शिक्षा उपलब्ध कराना।",
              "ग्रामीण क्षेत्रों में निःशुल्क पाठशालाओं का संचालन करना।",
              "शिक्षा के प्रति बच्चों एवं अभिभावकों में जागरूकता उत्पन्न करना।",
              "विद्यार्थियों को पुस्तकें एवं अध्ययन सामग्री उपलब्ध कराना।",
              "सामाजिक कुरीतियों के विरुद्ध जन-जागरूकता अभियान चलाना।",
              "नशा मुक्ति एवं नशे के दुष्प्रभावों के प्रति जागरूकता फैलाना।",
              "बाल विवाह जैसी सामाजिक कुरीतियों के विरुद्ध अभियान चलाना।",
              "पर्यावरण संरक्षण एवं वृक्षारोपण को बढ़ावा देना।",
              "युवाओं एवं स्वयंसेवकों को सामाजिक कार्यों से जोड़ना।",
              "समानता, भाईचारा, सामाजिक न्याय एवं मानवतावादी मूल्यों को बढ़ावा देना।",
              "विद्यार्थियों को शिक्षा एवं प्रतियोगी परीक्षाओं के लिए प्रोत्साहित करना।",
              "प्रतिभाशाली एवं जरूरतमंद विद्यार्थियों का सम्मान एवं प्रोत्साहन करना.",
            ].map((objective, index) => (
              <article className="about-objective-card" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <p>{objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
               WORK AREAS
            ================================================== */}

      <section className="about-work-section" id="work-areas">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>What We Do</span>

            <h2>
              हमारे प्रमुख
              <strong>कार्य क्षेत्र</strong>
            </h2>
          </div>

          <div className="about-work-grid">
            {[
              "शिक्षा",
              "सामाजिक सुधार",
              "पर्यावरण संरक्षण",
              "जन-जागरूकता",
              "युवा सशक्तिकरण",
              "सामुदायिक सेवा",
            ].map((area, index) => (
              <article className="about-work-card" key={area}>
                <span>0{index + 1}</span>

                <h3>{area}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
               PROGRAMS
            ================================================== */}

      <section className="about-programs-section" id="programs">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Our Programs</span>

            <h2>
              समाज के लिए हमारे
              <strong>प्रमुख कार्यक्रम</strong>
            </h2>
          </div>

          <div className="about-programs-list">
            {[
              [
                "01",
                "निःशुल्क शिक्षा कार्यक्रम",
                "ग्रामीण एवं जरूरतमंद क्षेत्रों के बच्चों को शिक्षा से जोड़ने का प्रयास।",
              ],
              [
                "02",
                "निःशुल्क पाठशालाएँ",
                "विभिन्न ग्रामीण क्षेत्रों में बच्चों को बिना शुल्क शिक्षा उपलब्ध कराने का प्रयास।",
              ],
              [
                "03",
                "पुस्तक एवं अध्ययन सामग्री वितरण",
                "जरूरतमंद विद्यार्थियों तक पुस्तकें, कॉपियाँ एवं अन्य शैक्षिक सामग्री पहुँचाना।",
              ],
              [
                "04",
                "सामाजिक जागरूकता अभियान",
                "सामाजिक कुरीतियों, अंधविश्वास, नशे और बाल विवाह के विरुद्ध जागरूकता।",
              ],
              [
                "05",
                "पर्यावरण संरक्षण",
                "वृक्षारोपण और पर्यावरण संरक्षण के लिए जागरूकता एवं गतिविधियाँ।",
              ],
              [
                "06",
                "विद्यार्थी प्रोत्साहन कार्यक्रम",
                "शैक्षिक कार्यक्रम, प्रतियोगिताएँ, परीक्षा एवं सम्मान समारोह।",
              ],
              [
                "07",
                "स्वयंसेवक सहभागिता",
                "युवाओं एवं स्वयंसेवकों को सामाजिक कार्यों से जोड़ना।",
              ],
            ].map(([number, title, description]) => (
              <article className="about-program-item" key={number}>
                <span>{number}</span>

                <div>
                  <h3>{title}</h3>

                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
               IMPACT
            ================================================== */}

      <section className="about-impact-section" id="impact">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Our Impact</span>

            <h2>
              प्रयासों से
              <strong>सकारात्मक प्रभाव</strong>
            </h2>
          </div>

          <div className="about-impact-grid">
            <div className="about-impact-card">
              <strong>50+</strong>
              <span>ग्रामीण क्षेत्र</span>
            </div>

            <div className="about-impact-card">
              <strong>5,000+</strong>
              <span>विद्यार्थियों तक पहुँच</span>
            </div>

            <div className="about-impact-card">
              <strong>2,000+</strong>
              <span>पुस्तक / अध्ययन सामग्री</span>
            </div>

            <div className="about-impact-card">
              <strong>500+</strong>
              <span>स्वयंसेवक</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
               WORKING AREA
            ================================================== */}

      <section className="about-region-section" id="working-area">
        <div className="about-page-container">
          <div className="about-region-content">
            <span>Our Reach</span>

            <h2>
              उत्तर प्रदेश से
              <strong>उत्तराखंड तक</strong>
            </h2>

            <p>
              भीम सेवक समिति का सामाजिक एवं शैक्षिक कार्यक्षेत्र मुख्य रूप से
              उत्तर प्रदेश एवं उत्तराखंड के विभिन्न क्षेत्रों में है। संस्था
              विशेष रूप से ग्रामीण एवं जरूरतमंद समुदायों तक शिक्षा एवं सामाजिक
              जागरूकता की गतिविधियाँ पहुँचाने का प्रयास करती है।
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
               FUTURE PRIORITIES
            ================================================== */}

      <section className="about-priorities-section" id="future-priorities">
        <div className="about-page-container">
          <div className="about-section-heading">
            <span>Looking Ahead</span>

            <h2>
              हमारा
              <strong>भविष्य का संकल्प</strong>
            </h2>
          </div>

          <div className="about-priorities-list">
            {[
              "अधिक से अधिक बच्चों को शिक्षा से जोड़ना।",
              "ग्रामीण क्षेत्रों में निःशुल्क पाठशालाओं का विस्तार करना।",
              "जरूरतमंद विद्यार्थियों को शैक्षिक सामग्री उपलब्ध कराना।",
              "युवाओं को सामाजिक कार्यों से जोड़ना।",
              "पर्यावरण संरक्षण एवं वृक्षारोपण को बढ़ाना।",
              "सामाजिक कुरीतियों के विरुद्ध व्यापक जन-जागरूकता अभियान चलाना।",
              "विद्यार्थियों के लिए शैक्षिक एवं प्रतियोगी कार्यक्रम आयोजित करना।",
              "स्वयंसेवक नेटवर्क को मजबूत करना।",
            ].map((priority, index) => (
              <div className="about-priority-item" key={index}>
                <span>✓</span>

                <p>{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
               FINAL MESSAGE
            ================================================== */}

      <section className="about-final-section">
        <div className="about-page-container">
          <div className="about-final-content">
            <span>Our Belief</span>

            <h2>
              “शिक्षित बनो,
              <strong>संगठित रहो, संघर्ष करो”</strong>
            </h2>

            <p>
              शिक्षा के माध्यम से जागरूकता, जागरूकता के माध्यम से संगठन और संगठन
              के माध्यम से सकारात्मक सामाजिक परिवर्तन की दिशा में निरंतर प्रयास।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
