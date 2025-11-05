import React from "react";

const testimonials = [
  {
    id: 1,
    content:
      "It’s been a really positive experience overall. I use LeadCRM to build qualified leads from LinkedIn and sync them into HubSpot. The platform has saved me hours of manual work every week. I would especially highlight their customer support — they are fast, knowledgeable, and genuinely helpful.",
    logo: "assets/image/testimonial/capterra-icon.png",
    name: "Olivia M.",
    platform: "On Capterra",
    userImg: "assets/image/testimonial/olivia.jpg",
  },
  {
    id: 2,
    content:
      "Keeps Me Organized. I never lose track of a lead now that I can see and create tasks right in LinkedIn. The inbuilt enrichment is excellent, and when it misses anything, integrations fill in the gaps.",
    logo: "assets/image/testimonial/google-icon.png",
    name: "Paul Kevin",
    platform: "On Google",
    userImg: "assets/image/testimonial/Avatar-Users2_17.png",
  },
  {
    id: 3,
    content:
      "Hunter.io Integration is Great. I love that LeadCRM uses multiple sources, including its own. If one source doesn’t have the data, the next source does. Message templates help me send quick, consistent messages.",
    logo: "assets/image/testimonial/670fca1b7afabe8bd0ddeea1_Vectors-Wrapper.svg",
    name: "Ruthie Smith",
    platform: "On G2",
    userImg: "assets/image/testimonial/Avatar-Users2_50.png",
  },
];

const Testimonial = () => {
  return (
    <section className="sec-pb-80 sec-pt-40 testimonial">
      <div className="container">
        <div className="testimonial-box">
          <h2 className="sub-main-title">
            See Why Top Performers Choose LeadCRM
          </h2>
          <div className="row">
            {testimonials.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="testimonial-box-item">
                  <p className="test-content">“{item.content}”</p>
                  <div className="rating-testi">
                    <div className="user-logo">
                      <img src={item.logo} alt={item.platform} />
                    </div>
                    <div className="star-rating-svg">
                      {[...Array(5)].map((_, i) => (
                        <div className="star-item" key={i}>
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-eicon-star"
                            viewBox="0 0 1000 1000"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="user-content">
                    <div className="name-role">
                      <h2>{item.name}</h2>
                      <p>{item.platform}</p>
                    </div>
                    <div className="user-image">
                      <img src={item.userImg} alt={item.name} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src="assets/image/testimonial/Ball.webp" alt="Ball Shape" />
      </div>
      <div className="shape2">
        <img src="assets/image/testimonial/icon.webp" alt="Icon Shape" />
      </div>
    </section>
  );
};

export default Testimonial;
