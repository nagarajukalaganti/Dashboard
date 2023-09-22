import React from 'react'
import '../Profile Details/Profiledetails.css'

const Profiledetails = () => {
    return (
        <>
            <div className="profile-details">
                <div className="details1">
                    <h1>Basic Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maiores.</p>
                </div>
                <div className="details2">
                    <div className="details2A">
                        <img src={require("../../../Assets/logo.jpeg")} alt="" />
                    </div>
                    <div className="details2B">
                        <div className="item1">
                            <p>Institute Name</p>
                            <p>Founder Name</p>
                            <p>WEbsite</p>
                        </div>
                        <div className="item2">
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className="item3">
                            <p>lorem Ipsum</p>
                            <p>John Doe</p>
                            <p>www.loremIpsum.com</p>
                        </div>
                    </div>
                    <div className="details2C">
                        <div className="item4">
                            <p>Email Id</p>
                            <p>Mobile Number</p>
                            <p>Linkdin Profile</p>
                        </div>
                        <div className="item5">
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className="item6">
                            <p>loremipsum@gmail.com</p>
                            <p>8106050787</p>
                            <p>https://www.linkedin.com/pulse/easy-share-link-generator-social-media-networks-raul-colon/</p>
                        </div>
                    </div>
                </div>



                <div className="details3">
                    <div className="term">
                        <h1>Contact Details</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maiores.</p>
                    </div>
                    <div className="details3C">
                        <div className="details3A">
                            <div className="item7">
                                <p>Address line</p>
                                <p>city</p>
                                <p>District</p>
                            </div>
                            <div className="item8">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="item9">
                                <p>2326 Smith Avenue</p>
                                <p>Lubbock</p>
                                <p>Gleneden</p>
                            </div>
                        </div>
                        <div className="details3B">
                            <div className="item10">
                                <p>State</p>
                                <p>Pincode</p>
                                <p>Country</p>
                            </div>
                            <div className="item11">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="item12">
                                <p>Texas</p>
                                <p>79401</p>
                                <p>United States</p>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="details4">
                    <div className="term1">
                        <h1>College Details</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maiores.</p>
                    </div>
                    <div className="details4C">
                        <div className="details4A">
                            <div className="item13">
                                <p>Accreditation</p>
                                <p>Students</p>
                                <p>Deemed</p>
                            </div>
                            <div className="item14">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="item15">
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="details4B">
                            <div className="item16">
                                <p>Departments</p>
                                <p>Start year</p>
                                <p>End year</p>
                            </div>
                            <div className="item17">
                                <p>:</p>
                                <p>:</p>
                                <p>:</p>
                            </div>
                            <div className="item18">
                                <p>Lorem Ipsum</p>
                                <p>2010</p>
                                <p>2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profiledetails