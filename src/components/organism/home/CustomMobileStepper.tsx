import { MobileStepper } from "@mui/material";
import { FC, useEffect } from "react";

type CustomMobileStepperPropsType = {
  maxSteps: number;
  activeStep: number;
  setActiveStep: (step: number) => void;
};

export const CustomMobileStepper: FC<CustomMobileStepperPropsType> = ({
  maxSteps,
  activeStep,
  setActiveStep,
}) => {
  useEffect(() => {
    const stepper = document.getElementById("stepper");
    const dots = stepper?.querySelectorAll(".MuiMobileStepper-dot") as any;
    dots?.forEach((dot: HTMLElement, index: number) => {
      dot.onclick = () => setActiveStep(index);
    });
  }, [setActiveStep]);

  return (
    <MobileStepper
      id="stepper"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{
        display: { xs: "none", md: "flex" },
        background: "inherit",
        transform: "translateY(-100px)",
        "& .MuiMobileStepper-dots": {
          transform: "translateX(70px)",
          counterReset: "item-counter",
        },
        "& .MuiMobileStepper-dot": {
          position: "relative",
          "&:after": {
            content: "counter(item-counter)",
            counterIncrement: "item-counter",
            display: "block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          },
          mr: 1.5,
          cursor: "pointer",
          fontSize: 14,
          width: 28,
          height: 28,
        },
      }}
      nextButton={<></>}
      backButton={<></>}
    />
  );
};
