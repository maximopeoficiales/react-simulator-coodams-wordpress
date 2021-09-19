import "./Spinner.css";
interface MyProps {
  text?: string;
}
const defaultProps = {
  text: "Loading...",
};
const Spinner = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { text } = props;
  return <div className="loader">{text}</div>;
};

export default Spinner;
