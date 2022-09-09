import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";
const AboutUs = () => {
  const [about, setAbout] = useState({});
  const [isAboutLoading, setIsAboutLoading] = useState(false);

  const cleanUpAbout = useCallback((rowData) => {
    const { sys, fields } = rowData;
    const { id } = sys;
    const aboutTitle = fields.title;
    const aboutContent = fields.content;
    const aboutImg = fields.image.fields.file.url;
    const aboutUpdateData = { id, aboutTitle, aboutContent, aboutImg };
    setAbout(aboutUpdateData);
  }, []);

  const getAbout = useCallback(async () => {
    setIsAboutLoading(true);

    try {
      const response = await client.getEntry("3cZZoHf5kHwRTlJXa4l8My");
      if (response) {
        cleanUpAbout(response);
      } else {
        setAbout({});
      }
      setIsAboutLoading(false);
    } catch (error) {
      console.log(error);
      setIsAboutLoading(false);
    }
  }, [cleanUpAbout]);

  useEffect(() => {
    getAbout();
  }, [getAbout]);

  //   console.log(about);
  const { aboutTitle, aboutContent, aboutImg } = about;
  return (
    <div className="container pt-5 pb-5">
      <div class="row align-items-center">
        <div class="col">
          <h2>{aboutTitle}</h2>
          <p>{aboutContent}</p>
        </div>
        <div class="col">
          <img src={aboutImg} alt={aboutTitle} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
