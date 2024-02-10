import React, { useState } from "react";

import styles from "./faqs.module.css";
import SquareChevronIcon from "@/components/Icons/SquareChevronIcon";
import i18n from "@/redux/i18n";

const Faqs: React.FC = () => {
  const [active, setActive] = useState<{
    value: string | number;
    label: string;
  }>({ value: 1, label: i18n.t("insurance") });
  const faqTypes: { value: string | number; label: string }[] = [
    { value: 0, label: i18n.t("all") },
    { value: 1, label: i18n.t("insurance") },
    { value: 3, label: i18n.t("emergency") },
    { value: 2, label: i18n.t("familyDoctor") },
    { value: 4, label: i18n.t("prices") },
  ];

  const [Faq, setFAQ] = useState<{
    value: string | number;
    question: string;
    answer: string;
    answer1?: string;
    list?: { value: number; label: string }[];
    type: string;
  }>({
    value: 1,
    question: i18n.t("whyDoesMy"),
    answer: i18n.t("whyDoesMy"),
    type: "Insurance",
  });

  const faqs: {
    value: string | number;
    question: string;
    answer: string;
    answer1?: string;
    type: string;
    list?: { value: number; label: string }[];
  }[] = [
    // {
    //   value: 0,
    //   question: i18n.t("whyDoesMy"),
    //   answer:i18n.t("asYourBabyFeeds"),
    //   type: "Insurance",
    //   list: [{ value: 1, label: "" }],
    // },
    {
      value: 0,
      question: i18n.t("whyDoesMy"),
      answer: i18n.t("asYourBabyFeeds"),
      type: "Insurance",
    },
    {
      value: 1,
      question: i18n.t("isItSafe"),
      answer: i18n.t("waterCanBe"),
      type: "Insurance",
    },
    {
      value: 2,
      question: i18n.t("canMyOlderChildren"),
      answer: i18n.t("aPediatricianTreats"),
      type: "Insurance",
    },
    {
      value: 3,
      question: i18n.t("atWhatAge"),
      answer: i18n.t("mostChildrenAre"),
      type: "Prices",
    },
    {
      value: 4,
      question: i18n.t("whatIsHigh"),
      answer: i18n.t("aPregnancyIs"),
      type: "Emergency",
      list: [
        { value: 1, label: i18n.t("aPregnantWoman") },
        { value: 2, label: i18n.t("aWomanWith") },
        { value: 3, label: i18n.t("aWomanIsCarrying") },
        { value: 4, label: i18n.t("theFetusDev") },
      ],
    },
    {
      value: 5,
      question: i18n.t("whatIfFetal"),
      answer: i18n.t("ifFetalSurgery"),
      type: "Family doctor",
    },
    {
      value: 6,
      question: i18n.t("whereAreYou"),
      answer: i18n.t("ourCabinetIs"),
      type: "Feature 1",
    },
    {
      value: 7,
      question: i18n.t("doesMyInsurance"),
      answer: i18n.t("thisDependsOn"),
      type: "Insurance",
    },
    {
      value: 8,
      question: i18n.t("areThereAny"),
      answer: i18n.t("yesSomeProcedured"),
      type: "Insurance",
    },
    {
      value: 9,
      question: i18n.t("doesMenguMedicals"),
      answer: i18n.t("weAcceptAWide"),
      type: "Insurance",
    },
    {
      value: 10,
      question: i18n.t("whatHappensIf"),
      answer: i18n.t("ifYourInsurance"),
      type: "Insurance",
    },
    {
      value: 11,
      question: i18n.t("howCanIFind"),
      answer: i18n.t("contactYourHealth"),
      type: "Insurance",
    },
    {
      value: 12,
      question: i18n.t("bonusTip"),
      answer: i18n.t("rememberWeAre"),
      type: "Insurance",
    },
    {
      value: 13,
      question: i18n.t("whenShouldITake"),
      answer: i18n.t("seekImmediate"),
      type: "Emergency",
      list: [
        { value: 1, label: i18n.t("severeAbdominal") },
        { value: 2, label: i18n.t("urinaryTractIssues") },
        { value: 3, label: i18n.t("traumaMajor") },
      ],
      answer1: i18n.t("promptDiagnosis"),
    },
    {
      value: 14,
      question: i18n.t("whatHappensWhen"),
      answer: i18n.t("aDedicatedTeam"),
      type: "Emergency",
    },
    {
      value: 15,
      question: i18n.t("whatProceduresMight"),
      answer: i18n.t("dependingOnThe"),
      type: "Emergency",
      list: [
        { value: 1, label: i18n.t("appendectomyRemoval") },
        { value: 2, label: i18n.t("herniaRepair") },
        { value: 3, label: i18n.t("urinaryTractSurgery") },
        { value: 4, label: i18n.t("traumaSurgery") },
      ],
    },
    {
      value: 16,
      question: i18n.t("willIBeAble"),
      answer: i18n.t("abosulutelyMengu"),
      type: "Emergency",
    },
    {
      value: 17,
      question: i18n.t("whatKindOfFollow"),
      answer: i18n.t("ourTeamWillProvide"),
      type: "Emergency",
    },
    {
      value: 18,
      question: i18n.t("howCanIBest"),
      answer: "",
      type: "Family doctor",
      list: [
        { value: 1, label: i18n.t("explainTheProcedure") },
        { value: 2, label: i18n.t("addressAnyAn") },
        { value: 3, label: i18n.t("familiarizeThem") },
        { value: 4, label: i18n.t("reassureThem") },
      ],
    },
    {
      value: 19,
      question: i18n.t("howCanICollab"),
      answer: "",
      type: "Family doctor",
      list: [
        { value: 1, label: i18n.t("communicateOpenly") },
        { value: 2, label: i18n.t("provideRegular") },
        { value: 3, label: i18n.t("participateIn") },
        { value: 4, label: i18n.t("collaborateOn") },
      ],
    },
    {
      value: 20,
      question: i18n.t("whatInfo"),
      answer: i18n.t("pleaseProvide"),
      type: "Family doctor",
      list: [
        { value: 1, label: i18n.t("aDetailedMedical") },
        { value: 2, label: i18n.t("specificSymptoms") },
        { value: 3, label: i18n.t("anyRelevantDia") },
        { value: 4, label: i18n.t("familyHistory") },
      ],
    },
    {
      value: 21,
      question: i18n.t("whenShouldI"),
      answer: "",
      type: "Family doctor",
      list: [
        { value: 1, label: i18n.t("persistentOrSevere") },
        { value: 2, label: i18n.t("vomittingOrBlood") },
        { value: 3, label: i18n.t("difficultyPassing") },
      ],
    },
    {
      value: 22,
      question: i18n.t("whatAreSome"),
      answer: i18n.t("considerReferral"),
      type: "Family doctor",
      list: [
        { value: 1, label: i18n.t("urinaryTract") },
        { value: 2, label: i18n.t("bloodInUrine") },
        { value: 3, label: i18n.t("difficultyOr") },
      ],
    },
    {
      value: 23,
      question: i18n.t("whatAreThe"),
      answer: "",
      type: "Prices",
      list: [
        { value: 1, label: i18n.t("deductibleYou") },
        { value: 2, label: i18n.t("physicianFees") },
        { value: 3, label: i18n.t("medicationsAnd") },
        { value: 4, label: i18n.t("hospitalSurcharges") },
      ],
    },
    {
      value: 24,
      question: i18n.t("canYouProvide"),
      answer: i18n.t("unfortunatelyProviding"),
      type: "Prices",
    },
    {
      value: 25,
      question: i18n.t("whatStepsCan"),
      answer: "",
      type: "Prices",
      list: [
        { value: 1, label: i18n.t("discussCost") },
        { value: 2, label: i18n.t("compareDifferent") },
        { value: 3, label: i18n.t("utilizeFinancial") },
        { value: 4, label: i18n.t("planAndBudget") },
      ],
    },
    {
      value: 26,
      question: i18n.t("doYouOffer"),
      answer: "",
      type: "Prices",
      list: [{ value: 1, label: i18n.t("weUnderstanThat") }],
    },
  ];
  const [filtered, setFiltered] = useState<
    {
      value: string | number;
      question: string;
      answer: string;
      type: string;
      answer1?: string;
      list?: { value: number; label: string }[];
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
        answer1?: string;
        list?: { value: number; label: string }[];
      }) => faq.type.toLowerCase() === type.label.toLowerCase()
    );
    return setFiltered(_faqs);
  };
  return (
    <section id="faqs" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>{i18n.t("faq")}</h6>
        <h4>{i18n.t("needSupport")}</h4>
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
          <h5>{i18n.t("frequentlyAsked")}</h5>
          <p>
            {i18n.t("doYouHaveA")}
            <a href="/contact-us">{i18n.t("contactUs")}!</a>
          </p>
        </div>
        <div className={styles.bottomRight}>
          {filtered.map((faq, index: number) => (
            <div
              onClick={() => setFAQ(faq)}
              key={index + faq.value.toString()}
              className={`${styles.accordion}`}
            >
              <div className={styles.accordionContents}>
                <p>{faq.question}</p>
                <div
                  className={`${styles.accordionAnswer} ${
                    JSON.stringify(Faq) === JSON.stringify(faq)
                      ? styles.accordionActive
                      : styles.accordionInActive
                  }`}
                >
                  {faq.answer.length > 1 && <p>{faq.answer}</p>}
                  {faq.list !== undefined && faq.list?.length >= 1 && (
                    <ul className={styles.listStyle}>
                      {faq.list.map((item, index: number) => (
                        <li key={index}>{item.label}</li>
                      ))}
                    </ul>
                  )}
                  {faq.answer1 !== undefined && faq.answer1.length > 1 && (
                    <p>{faq.answer1}</p>
                  )}
                </div>
              </div>
              <div className="ml-auto">
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
