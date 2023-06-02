import React from 'react'
import TeamCss from "../css/TeamCss.module.css"
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const PeopleCard = (props) => {
    return (
        <>
            <div className={TeamCss.mainContainer}>
                {/* <div className='down_screen'>
                    <h3>
                        overall coordinator
                    </h3>
                    <p>Name</p>
                    <p>surName</p>
                </div> */}

                <div className={TeamCss.imageContainer}>
                    <div className={TeamCss.side_div}>
                        <Link to="/">
                            <FaLinkedin className="text-white text-xl" />
                        </Link>
                        <Link>
                            <FaInstagram className="text-white text-xl" />
                        </Link>
                        <Link>
                            <FaFacebook className="text-white text-xl" />
                        </Link>
                        <Link>
                            <SiGmail className="text-white text-xl" />
                        </Link>

                    </div>
                    <img alt='profile' src="/images/Demo.png" />

                </div>

                <div className={TeamCss.textContainer}>
                    <h3 className={TeamCss.POR}>overall coordinator</h3>
                    <p className={TeamCss.PORname}>name</p>
                    <p className={TeamCss.PORsurname}>surname</p>
                </div>
                <div className={TeamCss.empty_div}>

                </div>
            </div >
        </>
    )
}

export default PeopleCard;

