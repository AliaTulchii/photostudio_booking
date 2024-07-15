import '../../sass/components/_button.scss'
type Btn = {
  text: string;
  onClick: () => void;
  className: string;
  type: string;
}

const LinkBtn = ({ className}: Btn) => {

  return (
      <a   className={className} target='blank' href="https://www.instagram.com/focus.photolab/?utm_source=ig_web_button_share_sheet">      
      Сторінка студії
    </a>
  )
}

export default LinkBtn