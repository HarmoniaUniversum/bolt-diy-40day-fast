import React from 'react';

const investmentData = {
  title: "The Complete 40-Day Reset Program",
  price: {
    Regular: 1497,  // Updated original pricing
    current: 497,
    note: "Limited Beta Pricing"
  },
  features: [
    {
      title: "Three Private Coaching Sessions",
      items: [
        "Initial Deep-Dive Strategy Session",
        "Mid-Journey Optimization Call",
        "Integration & Long-Term Success Planning"
      ],
      image: "https://www.healthcoachleads.com/hosted/images/ab/9034c372ad477a8c08f87cfbac66b5/5-min.png"
    },
    {
      title: "Continuous Support When You Need It Most",
      items: [
        "Priority access via WhatsApp/Voxer for 40 days",
        "Expert guidance through every phase",
        "Quick responses to keep you on track"
      ],
      image: "https://www.healthcoachleads.com/hosted/images/ab/9034c372ad477a8c08f87cfbac66b5/5-min.png"
    },
    {
      title: "Complete Digital Success Kit",
      items: [
        "Custom Fasting Protocol",
        "Progress Tracking Tools",
        "Mindset Reset Audio Series"
      ],
      image: "https://www.healthcoachleads.com/hosted/images/ab/9034c372ad477a8c08f87cfbac66b5/5-min.png"
    }
  ]
};

const Investment = () => {
  return (
    <section className="investment" id="investment">
      <div className="content-box">
        <h2>{investmentData.title}</h2>
        <p>Original Price: <del>${investmentData.price.original}</del></p>
        <p>Current Price: <strong>${investmentData.price.current}</strong> ({investmentData.price.note})</p>
        <h3>What's Included:</h3>
        {investmentData.features.map((feature, index) => (
          <div className="feature" key={index}>
            <div>
              <h4>{feature.title}</h4>
              <ul>
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <img src={feature.image} alt={feature.title} />
          </div>
        ))}
        <a href="#investment" className="cta-button">Start Your Transformation Now</a>
      </div>
    </section>
  );
};

export default Investment;
