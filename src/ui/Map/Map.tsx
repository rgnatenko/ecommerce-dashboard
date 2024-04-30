import React from 'react';

type Props = {
  mapClass?: string
}

const Map: React.FC<Props> = ({ mapClass }) => {
  return (
    <iframe
      className={mapClass}
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42372.94084447445!2d34.9981753!3d48.41221555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1714416609205!5m2!1sen!2sua"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
