const OptionsSection = ({ title, children }) => {
  return (
    <>
      <section className="optionSection">
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};
export default OptionsSection;
