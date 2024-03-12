interface DownArrowProps {
  text: string;
  link: string;
}

const DownArrow = (props: DownArrowProps) => {  
  
  return (
    <section id="scroll-arrow" className="scroll-area">      
      <a href={props.link}><span></span>{props.text}</a>
    </section>
  );
};

export default DownArrow;