import React, { useState } from "react";

import styles from "./faqs.module.css";
import SquareChevronIcon from "@/components/Icons/SquareChevronIcon";

const Faqs: React.FC = () => {
  const [active, setActive] = useState<{
    value: string | number;
    label: string;
  }>({ value: 1, label: "Insurance" });
  const faqTypes: { value: string | number; label: string }[] = [
    { value: 0, label: "All" },
    { value: 1, label: "Insurance" },
    { value: 2, label: "Prices" },
    { value: 3, label: "Emergency" },
    { value: 4, label: "Family doctor" },
    { value: 5, label: "Feature 1" },
  ];

  const [Faq, setFAQ] = useState<{
    value: string | number;
    question: string;
    answer: string;
    type: string;
  }>({
    value: 1,
    question:
      "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
    answer:
      "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
    type: "Insurance",
  });

  const faqs: {
    value: string | number;
    question: string;
    answer: string;
    type: string;
  }[] = [
    {
      value: 1,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Insurance",
    },
    {
      value: 2,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Insurance",
    },
    {
      value: 3,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Prices",
    },
    {
      value: 4,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Emergency",
    },
    {
      value: 5,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Family doctor",
    },
    {
      value: 6,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Feature 1",
    },
    {
      value: 7,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Insurance",
    },
    {
      value: 8,
      question:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis.",
      answer:
        "At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis.  At proin lacus ornare hendrerit libero dictum condimentum venenatis. At proin lacus ornare hendrerit libero dictum condimentum venenatis. ",
      type: "Prices",
    },
  ];
  const [filtered, setFiltered] = useState<
    {
      value: string | number;
      question: string;
      answer: string;
      type: string;
    }[]
  >(faqs);

  const handleFilter = (type: { value: string | number; label: string }) => {
    let _faqs = [...faqs];
    if (type.label === "All") {
      _faqs = [...faqs];
      return setFiltered(_faqs);
    }
    _faqs = faqs.filter(
      (faq: {
        value: string | number;
        question: string;
        answer: string;
        type: string;
      }) => faq.type.toLowerCase() === type.label.toLowerCase()
    );
    return setFiltered(_faqs);
  };
  return (
    <section id="faqs" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>FAQ</h6>
        <h4>Need Support</h4>
        <div className={styles.faqTypes}>
          {faqTypes.map((faqType, index: number) => (
            <button
              key={index + faqType.value.toString()}
              className={`${styles.faqType} ${
                JSON.stringify(faqType) === JSON.stringify(active)
                  ? styles.faqTypeActive
                  : ""
              }`}
              onClick={() => {
                setActive(faqType);
                handleFilter(faqType);
              }}
            >
              {faqType.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomLeft}>
          <h5>Frequently Asked Questions</h5>
          <p>
            {" "}
            Do you have a specific question? You don’t see your question here.
            Please feel free to reach out ?{" "}
            <a href="/contact-us">Contact us!</a>
          </p>
        </div>
        <div className={styles.bottomRight}>
          {filtered.map((faq, index: number) => (
            <div
              onClick={() => setFAQ(faq)}
              key={index + faq.value.toString()}
              className={`${styles.accordion} ${
                JSON.stringify(Faq) === JSON.stringify(faq)
                  ? styles.accordionActive
                  : ""
              }`}
            >
              <div className={styles.accordionContents}>
                <p>
                  At proin lacus ornare hendrerit libero dictum condimentum
                  venenatis.{" "}
                </p>
                <div className={styles.accordionAnswer}>
                  <p>
                    At proin lacus ornare hendrerit libero dictum condimentum
                    venenatis. At proin lacus ornare hendrerit libero dictum
                    condimentum venenatis. At proin lacus ornare hendrerit
                    libero dictum condimentum venenatis. At proin lacus ornare
                    hendrerit libero dictum condimentum venenatis.{" "}
                  </p>
                </div>
              </div>
              <div>
                <SquareChevronIcon
                  className={`${styles.squareIcon} ${
                    JSON.stringify(Faq) === JSON.stringify(faq)
                      ? "rotate-0"
                      : "-rotate-180"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
