import data from "../data.json";
import Accordion from "./Accordion";

const Faqs = () => {
  return (
    <div>
      <h1> Faqs </h1>
      {data.faqs.map((obj, index) => {
        return <Accordion key={index} qna={obj} />;
      })}
    </div>
  );
};
export default Faqs;
