import React from "react";

const ContactMapSection = () => {
  return (
    <section className="   md:p-[50px] mt-2.5">
      <div className=" w-full h-[500px]  md:h-[600px] rounded-[20px]  lg:rounded-[35px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d919.1729449508867!2d89.5293872!3d22.8508901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9af37b1b508d%3A0x2815f41c4e9bf364!2sNavy%20Foundation%20Welfare%20Complex!5e0!3m2!1sen!2sbd!4v1768822143385!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMapSection;
