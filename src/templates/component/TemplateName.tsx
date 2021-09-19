interface MyProps {}
const defaultProps = {};
const TemplateName = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="TemplateName" className="">
      <h1>TemplateName component</h1>
    </div>
  );
};

export default TemplateName;
