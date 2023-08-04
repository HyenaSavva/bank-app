import { AddCardForm } from "features/card";
import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./EditPage.module.css";

interface EditProps {}

const EditPage: FC<EditProps> = () => {
  return (
    <motion.div
      className={styles.edit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <AddCardForm />
    </motion.div>
  );
};

export default EditPage;
