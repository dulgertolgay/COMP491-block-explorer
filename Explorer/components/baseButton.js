import styles from "../styles/components/baseButton.module.scss";

const BaseButton = (props) => {
  const { children, width, variant, clickAction } = props;
  return (
    <button
      className={`${styles.baseButton} ${variant}`}
      style={{ width: width ? width : "fit-content" }}
      onClick={clickAction}
    >
      <p className="s3 bold">{children}</p>
    </button>
  );
};

export default BaseButton;
