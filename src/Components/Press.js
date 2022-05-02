import React from "react";

import sponsor1 from "../Assets/sponsor1.png";
import sponsor2 from "../Assets/sponsor2.png";
import sponsor3 from "../Assets/sponsor3.png";
import sponsor4 from "../Assets/sponsor4.png";
import sponsor5 from "../Assets/sponsor5.png";
import sponsor6 from "../Assets/sponsor6.png";
import sponsor7 from "../Assets/sponsor7.png";
import sponsor8 from "../Assets/sponsor8.png";
import sponsor9 from "../Assets/sponsor9.png";

const Press = () => {
  return (
    <div className="sponsor">
      <h2 className="heading-2">Press</h2>
      <div className="sponsor-icon">
        <div className="sponsor-icon-top">
          <img src={sponsor1} alt="Mashable" />
          <img src={sponsor2} alt="Mashable" />
          <img src={sponsor3} alt="Mashable" />
          <img src={sponsor4} alt="Mashable" />
        </div>
        <div className="sponsor-icon-bottom">
          <img src={sponsor5} alt="Mashable" />
          <img src={sponsor6} alt="Mashable" />
          <img src={sponsor7} alt="Mashable" />
          <img src={sponsor8} alt="Mashable" />
          <img src={sponsor9} alt="Mashable" />
        </div>
      </div>
    </div>
  );
};

export default Press;
