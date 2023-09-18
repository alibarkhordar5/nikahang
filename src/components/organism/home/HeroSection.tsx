import { FC, useState } from "react";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { sections } from "./constants";
import { HeroSectionItem } from "./HeroSectionItem";
import { CustomMobileStepper } from "./CustomMobileStepper";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const HeroSection: FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sections.length;

  const handleStepChange = (step: number) => setActiveStep(step);

  const CustomSlide = styled("div")({
    transitionDuration: "7s",
  });

  return (
    <Box>
      <AutoPlaySwipeableViews
        interval={4000}
        animateTransitions
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sections.map(({ title, subtitle, imgUrl, button }, index) => (
          <CustomSlide key={imgUrl}>
            {Math.abs(activeStep - index) <= 2 ? (
              <HeroSectionItem
                title={title}
                subtitle={subtitle}
                imgUrl={imgUrl}
                button={button}
              />
            ) : null}
          </CustomSlide>
        ))}
      </AutoPlaySwipeableViews>
      <CustomMobileStepper
        maxSteps={maxSteps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </Box>
  );
};
