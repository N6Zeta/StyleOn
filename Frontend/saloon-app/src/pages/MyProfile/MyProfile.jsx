import './MyProfile.css'
export default function MyProfile() {
    return (
        <div className='myprofile-main'>
            <div className='myprofile-div1'>
                <p>My Profile</p>
                <p>My Orders</p>
            </div>

            <div className='myprofile-div2'>
                <div className='myprofile-details'>
                    <p>Naomi</p>
                    <div>
                        <p>naomi@gmail.com</p>
                        <p>8827164601</p>
                    </div>
                </div>
                <img src="https://m.media-amazon.com/images/M/MV5BMTY3Nzg2NjA1OF5BMl5BanBnXkFtZTgwMjY5NTU1MzI@._V1_UY1200_CR127,0,630,1200_AL_.jpg" alt="no dp" />
            </div>
        </div>
    )
}
