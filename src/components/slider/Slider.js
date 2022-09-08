import React, { useCallback, useState, useEffect } from "react";
import { client } from "../../client";

const Slider = () => {
  const [sliderIsLoading, setSliderIsLoading] = useState(false);
  const [slider, setSlider] = useState([]);

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
