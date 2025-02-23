import { FC } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
}

const Testimonial: FC<TestimonialProps> = ({ quote, name }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <p className="italic">"{quote}"</p>
      <h3 className="mt-4 font-semibold">{name}</h3>
    </div>
  );
};

export default Testimonial;
