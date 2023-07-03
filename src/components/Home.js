import React from "react";

import styles from "./css/home.module.css";
import topLayeredWaves from "../assets/svgs/landingView-layered-waves.svg";
import bottomLayeredWaves from "../assets/svgs/landingView-bottom-layered-waves.svg";
import verifiedIcon from "../assets/icons/verified.svg";
import varietyIcon from "../assets/icons/variety.svg";
import experienceIcon from "../assets/icons/experience.svg";
import verifiedBlob from "../assets/svgs/verified-blob.svg";
import varietyBlob from "../assets/svgs/variety-blob.svg";
import experienceBlob from "../assets/svgs/experienced-blob.svg";

import Header from "./Header";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.landingView}>
        <div className={styles.topBGWaves}>
          <img
            src={topLayeredWaves}
            alt=" "
            className={styles.landingViewWaves}
          />
        </div>

        <div className={styles.welcomeText}>Online Recruitment Solution</div>

        <div className={styles.features}>
          <div className={styles.feature}>Efficient</div>

          <div className={styles.feature}>Fast</div>

          <div className={styles.feature}>Diverse</div>
        </div>

        <p className={styles.featureText}>
          Get your desired candidates efficiently from a diversity of Hiring
          Managers and HR Professionals with a fast speed search through all
          candidates.
        </p>
      </div>

      <div className={styles.benefitView}>
        <div className={styles.benefitHeading}>
          Benefits of Using StudyMonks
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <div className={styles.benefitData}>
              <div className={styles.benefitTitle}>Verified</div>

              <div className={styles.benefitIconDiv}>
                <img
                  src={verifiedIcon}
                  alt=" "
                  className={styles.benefitIcon}
                />
              </div>
            </div>

            <div className={styles.benefitBlobDiv}>
              <img src={verifiedBlob} alt=" " className={styles.benefitBlob} />
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitData}>
              <div className={styles.benefitTitle}>Variety</div>

              <div className={styles.benefitIconDiv}>
                <img src={varietyIcon} alt=" " className={styles.benefitIcon} />
              </div>
            </div>

            <div className={styles.benefitBlobDiv}>
              <img src={varietyBlob} alt=" " className={styles.benefitBlob} />
            </div>
          </div>

          <div className={styles.benefit}>
            <div className={styles.benefitData}>
              <div className={styles.benefitTitle}>Experienced</div>

              <div className={styles.benefitIconDiv}>
                <img
                  src={experienceIcon}
                  alt=" "
                  className={styles.benefitIcon}
                />
              </div>
            </div>

            <div className={styles.benefitBlobDiv}>
              <img
                src={experienceBlob}
                alt=" "
                className={styles.benefitBlob}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomBGWaves}>
          <img
            src={bottomLayeredWaves}
            alt=" "
            className={styles.benefitViewWaves}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
