import React, { use } from "react";

import styles from "./contact.module.css";
import { Assets } from "@/static/assets/assets";
import UserIcon from "@/components/Icons/UserIcon";
import Input from "@/components/Input/input.component";
import EmailIcon from "@/components/Icons/Email@Icon";
import PencilIcon from "@/components/Icons/PencilIcon";
import Button, { ButtonType } from "@/components/Button/Button.component";
import Textarea from "@/components/Input/Textarea.component copy";
import i18n from "@/redux/i18n";

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.formgrid}>
          <Input
            placeholder={i18n.t("name")}
            type="text"
            icon={<UserIcon className={styles.inputIcon} />}
          />
          <Input
            placeholder={i18n.t("email")}
            type="email"
            icon={<EmailIcon className={styles.inputIcon} />}
          />
        </div>
        <Textarea
          placeholder={i18n.t("subjectWrite")}
          type="text"
          icon={<PencilIcon className={styles.inputIcon} />}
        />
        <p>
        {i18n.t("preferToTalk")}
        </p>
        <Button text={i18n.t("submit")} type={ButtonType.SEC} />
      </div>
      <div className={styles.containerRight}>
        <img src={Assets.contactUs} alt="ContactImage" />
      </div>
    </section>
  );
};

export default ContactUs;
