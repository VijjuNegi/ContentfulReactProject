import React, { useCallback, useState, useEffect } from "react";
import { client } from "../../client";

const Slider = () => {
  const [sliderIsLoading, setSliderIsLoading] = useState(false);
  const [bannerSlider, setBannerSlider] = useState([]);

  const cleanUpSlider = useCallback((rowData) => {
    const cleanSliderData = rowData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideText = fields.text;
      const slideImg = fields.images.fields.file.url;
      const slideUpdateData = { id, slideTitle, slideText, slideImg };
      return slideUpdateData;
    });
    setBannerSlider(cleanSliderData);
  }, []);

  const getSlider = useCallback(async () => {
    setSliderIsLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "sliderBanners",
      });
      const responseData = response.items;
      // console.log(responseData);
      if (responseData) {
        cleanUpSlider(responseData);
      } else {
        setBannerSlider([]);
      }

      setSliderIsLoading(false);
    } catch (error) {
      console.log(error);
      setSliderIsLoading(false);
    }
  }, [cleanUpSlider]);

  useEffect(() => {
    getSlider();
  }, [getSlider]);
  console.log(bannerSlider);
  return (
    <div>
      {bannerSlider.map((item) => {
        const { id, slideTitle, slideText, slideImg } = item;
        return (
          <div style={{ background: `url(${slideImg})` }}>
            <h2>{slideTitle}</h2>
            <p>{slideText}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Slider;
