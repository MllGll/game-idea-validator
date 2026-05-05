import { Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

function Result({ name, result, feedback }) {
	const { t } = useTranslation();

	return (
		<div className="h-full flex flex-col text-center">
			<div className="h-full flex flex-col justify-center">
				<span className="text-3xl font-normal">
					{t("result.summary", { name, result })}
				</span>
				<div className="mt-2">
					<Chip
						className="feedback"
						color={feedback?.color}
						variant="bordered"
						size="lg"
					>
						{feedback?.messageKey ? t(feedback.messageKey) : null}
					</Chip>
				</div>
			</div>
			<p className="text-default-400">{t("result.disclaimer")}</p>
		</div>
	);
}

export default Result;
