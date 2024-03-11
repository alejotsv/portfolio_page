interface DownArrowProps {
  text: string;
}

const DownArrow = (props: DownArrowProps) => {
  
  return (
    <section id="scroll-arrow" className="scroll-area">      
      <a href="#about-me"><span></span>{props.text}</a>
    </section>
  );
};

export default DownArrow;