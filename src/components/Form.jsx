import { Button, Card, RadioGroup } from "@nextui-org/react";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { steps } from "../assets/utils";
import Result from "./Result";
import { CustomRadio } from "./ui/Radio";

function Form({
	name,
	visibleSteps,
	setVisibleSteps,
	answers,
	setAnswers,
	activeStep,
	setActiveStep,
	result,
	setResult,
}) {
	const { t } = useTranslation();
	const maxSteps = visibleSteps.length;
	const firstStep = activeStep === 0;
	const lastStep = activeStep + 1 === maxSteps;
	const [feedback, setFeedback] = useState();

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const calculatePoints = () => {
		const totalPoints = visibleSteps.reduce((acc, step) => {
			const answer = answers[step.id];
			const pointsKey = `${answer}Points`;
			return acc + (step[pointsKey] || 0);
		}, 0);
		setResult(totalPoints);
		const percentage = (totalPoints / 20) * 100;
		const getFeedback = () => {
			if (percentage >= 80) {
				return { messageKey: "form.feedback.high", color: "success" };
			}
			if (percentage >= 60) {
				return { messageKey: "form.feedback.good", color: "primary" };
			}
			if (percentage >= 40) {
				return { messageKey: "form.feedback.moderate", color: "secondary" };
			}
			if (percentage >= 20) {
				return { messageKey: "form.feedback.low", color: "warning" };
			}
			return { messageKey: "form.feedback.veryLow", color: "danger" };
		};
		setFeedback(getFeedback());
	};

	const handleAnswerChange = (value) => {
		const stepId = visibleSteps[activeStep].id;

		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[stepId]: value,
		}));

		const nextVisibleSteps = steps.filter((step) => {
			if (!step.condition) return true;
			const dependsOnAnswer =
				stepId === step.condition.dependsOn
					? value
					: answers[step.condition.dependsOn];
			return dependsOnAnswer === step.condition.expectedAnswer;
		});

		setVisibleSteps(nextVisibleSteps);
	};

	const currentStep = visibleSteps[activeStep];
	const stepId = currentStep.id;

	return (
		<Card className="form-card p-6 mt-16 mb-24 w-[1100px] max-xl:w-[80vw] max-sm:w-[95vw] h-[375px] justify-between">
			{result !== null ? (
				<Result name={name} result={result} feedback={feedback} />
			) : (
				<Fragment>
					<div className="flex flex-col gap-2">
						<span className="text-3xl max-sm:text-xl font-bold">
							{t(`form.steps.${stepId}.question`)}
						</span>
						<span className="text-lg max-xl:text-base max-sm:text-sm text-default-500">
							{t("form.examplePrefix")} {t(`form.steps.${stepId}.example`)}
						</span>
					</div>

					<RadioGroup
						value={answers[stepId] || ""}
						onValueChange={handleAnswerChange}
					>
						<div className="flex gap-4">
							<CustomRadio value="yes">{t("form.yes")}</CustomRadio>
							<CustomRadio value="no">{t("form.no")}</CustomRadio>
						</div>
					</RadioGroup>

					<div className="flex justify-between">
						<span className="text-2xl text-default-200">{`${
							activeStep + 1
						}/${maxSteps}`}</span>
						<div className="flex gap-2">
							<Button
								onPress={handleBack}
								isDisabled={firstStep}
								size="lg"
								variant="light"
							>
								{t("form.back")}
							</Button>
							<Button
								onPress={lastStep ? calculatePoints : handleNext}
								isDisabled={!answers[stepId]}
								size="lg"
								variant={lastStep ? "solid" : "flat"}
								color={lastStep ? "primary" : "default"}
							>
								{lastStep ? t("form.calculate") : t("form.next")}
							</Button>
						</div>
					</div>
				</Fragment>
			)}
		</Card>
	);
}

export default Form;
