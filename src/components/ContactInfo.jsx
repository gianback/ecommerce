import React from "react";

const ContactInfo = ({ data }) => {
  return (
    <>
      {data.map((obj, index) => (
        <div key={index} className="flex my-4 gap-2">
          <h2>{obj.type}</h2>

          <div className="flex-1 flex flex-col">
            {obj.info.map((info, i) => (
              <p key={i}>{info}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
