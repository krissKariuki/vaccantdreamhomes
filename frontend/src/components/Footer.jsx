export default function Footer()
{
    return(
        <div className="footer">
            <div className="foot aboutUs">
                <h4>about us</h4>
                <p>
                Vaccant Dream Homes is your premier destination for renting homes, buying/selling land, and shopping for related products in Kenya. We strive to provide a seamless experience for all your real estate needs.
                </p>
                <div className='socials'>
                <span className='social childCentered fa fa-facebook'></span>
                <span className='social childCentered fa fa-instagram'></span>
                <span className='social childCentered fa fa-twitter'></span>
                </div>
            </div>

            <div className="foot quickLinks">
                <h4>quick links</h4>
                <ul>
                    <li>home</li>
                    <li>rent</li>
                    <li>buy</li>
                    <li>sell</li>
                    <li>shop</li>
                </ul>
            </div>

            <div className="foot properties">
                <h4>properties</h4>
                <ul>
                    <li>apartments</li>
                    <li>houses</li>
                    <li>lands</li>
                    <li>commercials</li>
                </ul>
            </div>

            <div className="foot FAQs">
                <h4>FAQs</h4>
                <ul>
                    <li>254 712094783</li>
                    <li>vaccantdreamhomes@gmail.com</li>
                </ul>
            </div>

            <p className="copyright">Copyright @2024 All Rights Reserved</p>
        </div>
    )
}