import '../../sass/components/_button.scss'
type SlotProps = {
  text: string;
  onClick: () => void;
  className: string;
  disabled?: boolean;
}

const Slot = ({ text,  onClick, className, disabled}: SlotProps) => {

  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      disabled={disabled}>   
     
      {text}
    </button>
  )
}

export default Slot