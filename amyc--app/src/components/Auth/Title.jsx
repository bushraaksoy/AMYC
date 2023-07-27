import '../../styles/Title.css'

const Title = ({title, btnContext}) => {
    return (
        <div className="title-sect">
            <div>{title}</div>
            {btnContext? <button type='button'>{btnContext}</button> : <></>}
        </div>
    )
}

export default Title;