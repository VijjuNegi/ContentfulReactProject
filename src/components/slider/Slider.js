import React, { useCallback, useState, useEffect } from "react";
import { client } from "../../client";

const Slider = () => {
  const [sliderIsLoading, setSliderIsLoading] = useState(false);
  const [slider, setSlider] = useState([]);

  const cleanUpSlider = (rowData) => {
    const cleanSliderData = rowData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideText = fields.text;
      const slideImg = fields.image.fields.file.url;
      const slideUpdateData = { id, slideTitle, slideText, slideImg };
      return slideUpdateData;
    });
  };

  const getSlider = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: "banner" });
      const responseData = response.items;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getSlider();
  }, [getSlider]);
  return (
    <div>
      <h2>Banner Slider</h2>
    </div>
  );
};
export default Slider;
