import React, { use } from "react";

import styles from "./contact.module.css";
import { Assets } from "@/static/assets/assets";
import UserIcon from "@/components/Icons/UserIcon";
import Input from "@/components/Input/input.component";
import EmailIcon from "@/components/Icons/Email@Icon";
import PencilIcon from "@/components/Icons/PencilIcon";
import Button, { ButtonType } from "@/components/Button/Button.component";
import Textarea from "@/components/Input/Textarea.component copy";

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.formgrid}>
          <Input
            placeholder="Name"
            type="text"
            icon={<UserIcon className={styles.inputIcon} />}
          />
          <Input
            placeholder="Email"
            type="Email"
            icon={<EmailIcon className={styles.inputIcon} />}
          />
        </div>
        <Textarea
          placeholder="Subject: Write us your question"
          type="text"
          icon={<PencilIcon className={styles.inputIcon} />}
        />
        <p>
          Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat
          kontrasat nonade. att apiniras. Vanat bektig. Dotism makrod. Vans
          hurtad
        </p>
        <Button text="Submit" type={ButtonType.SEC} />
      </div>
      <div className={styles.containerRight}>
        <img src={Assets.contactUs} alt="ContactImage" />
      </div>
    </section>
  );
};

export default ContactUs;
