export const Anchor = ({ clase, title }) => {
  return (
    <a className={clase} href='#' title={title}>
      {title}
    </a>
  );
};
