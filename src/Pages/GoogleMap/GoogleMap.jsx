import React from 'react';

const GoogleMap = () => {
    const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.371061422006!2d90.4093238!3d23.7315521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95ea642fdc5%3A0x1897f4811efeec2d!2sMagnetic+Plus!5e0!3m2!1sen!2sbd!4v1689176054372!5m2!1sen!2sbd";

    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                    {/* <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <div style={{ border: '1px solid black', width: '100%', height: '450px' }}>
                                <iframe
                                    title="Magnetic Plus Location"
                                    src={iframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                    <p className="mt-1 text-gray-600">3/4, Magnetic Plus, Purana Paltan, Dhaka 1000</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                    <p className="mt-1 text-gray-600">Saturday - Thursday: 10am - 6pm</p>
                                    <p className="mt-1 text-gray-600">Friday: Closed</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                    <p className="mt-1 text-gray-600">Email: infomagneticplus@gmail.com</p>
                                    <p className="mt-1 text-gray-600">Phone: +8801617440055</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;