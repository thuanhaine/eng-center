
import './User.scss'
function User() {
    return (
        <div className='user'>
            <div className='container'>
                <ul className='container__list-title'>
                    <li className='container__list-title--item-stt'>STT</li>
                    <li className='container__list-title--item-name'>Tên</li>
                    <li className='container__list-title--item-email'>Email</li>
                    <li className='container__list-title--item-role'>Vai trò</li>
                    <li className='container__list-title--item-acctive'>Tương Tác</li>
                </ul>
                <ul className='container__list-content'>
                    <li className='container__list-title--item-stt'>01</li>
                    <li className='container__list-title--item-name'>Thuan Hai</li>
                    <li className='container__list-title--item-email'>Thuan Hai@gmail.com</li>
                    <li className='container__list-title--item-role'>2</li>
                    <li className='container__list-title--item-acctive'>
                        <button className='container__list-content--item-btn'>Edit</button>
                        <button className='container__list-content--item-btn'>Delete</button>
                    </li>


                </ul>
            </div>
        </div>
     );
}

export default User;