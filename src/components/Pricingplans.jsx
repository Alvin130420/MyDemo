const pricingPlans = [
    {
      title: "Free",
      price: "0",
      description: "Basic access to educational tools for individual students.",
      features: [
        "Limited library access",
        "Basic AI assistance",
        "5 practice tests per month",
      ],
    },
    {
      title: "Student",
      price: "12",
      description: "Complete access for individual students and learners.",
      features: [
        "Full library access",
        "Advanced AI tutoring",
        "Unlimited practice tests",
        "Progress tracking",
      ],
      isPopular: true,
    },
    {
      title: "Pro",
      price: "29",
      description: "Perfect for educators, schools, and institutions.",
      features: [
        "Everything in Student plan",
        "Admin dashboard",
        "Custom branding",
        "API access",
      ],
    },
  ];
  
  export default pricingPlans;
  