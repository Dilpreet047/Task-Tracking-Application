import Button from './Button'

const Header = ({ onAdd , showAdd}) => {

    return (
        <header className='header'>
            <h3 style={{fontFamily: 'serif', color: 'green', fontStyle: 'italic'}}>To Do Application</h3>
            <Button  onClick={onAdd} showAdd={showAdd}/>
        </header>
    )
}

export default Header
