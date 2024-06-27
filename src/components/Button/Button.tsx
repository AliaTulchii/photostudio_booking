import '../../sass/components/_button.scss'
type Btn = {
  text: string;
  onClick: () => void;
  className: string;
  type: string;
}

const Button = ({ text,  onClick, className}: Btn) => {

  return (
      <button  type='button' className={className} onClick={onClick}>      
      {text}
    </button>
  )
}

export default Button