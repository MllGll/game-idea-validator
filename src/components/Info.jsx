import { Button, Card, Chip, Divider } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";
import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

function Info({ setShowInfo }) {
	const { t } = useTranslation();

	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			setShowInfo((prevState) => !prevState);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const listItemStyles =
		"text-2xl max-2xl:text-xl max-xl:text-base max-lg:text-sm flex gap-2";

	const row = (stepId, chipColor) => (
		<span
			className={
				stepId === 4 ? `${listItemStyles} ml-16 max-sm:ml-0` : listItemStyles
			}
		>
			• {t(`form.steps.${stepId}.question`)}
			<Chip size="lg" color={chipColor} variant="flat">
				<Trans i18nKey={`info.chip${stepId}`} components={{ bold: <b /> }} />
			</Chip>
		</span>
	);

	return (
		<section className="flex-grow flex flex-col mx-40 max-md:mx-20 max-sm:mx-5 mt-20 max-lg:mt-10 max-sm:mt-5">
			<div className="flex justify-between items-center">
				<span className="text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-base font-bold">
					{t("info.title")}
				</span>
				<Button
					onPress={() => setShowInfo(false)}
					variant="light"
					size="lg"
					radius="none"
					startContent={<MoveLeft />}
				>
					{t("info.back")}
				</Button>
			</div>
			<Divider className="my-4" />
			<span className="text-2xl max-2xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-light">
				{t("info.intro")}
			</span>
			<Card className="info-card gap-6 max-sm:gap-3 p-6 max-sm:p-0 mt-16 mb-24 max-lg:my-8 max-sm:my-4 border-none">
				{row(0, "success")}
				{row(1, "success")}
				{row(2, "success")}
				{row(3, "danger")}
				{row(4, "danger")}
				{row(5, "success")}
				{row(6, "success")}
				{row(7, "success")}
			</Card>
			<span className="max-lg:text-sm">
				<Trans i18nKey="info.suggestions" components={{ bold: <b /> }} />
			</span>
		</section>
	);
}

export default Info;
