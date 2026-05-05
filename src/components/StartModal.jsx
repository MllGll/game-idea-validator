import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	NextUIProvider,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const StartModal = ({ isOpen, onOpenChange, name, setName }) => {
	const { t } = useTranslation();
	const [value, setValue] = useState("");

	useEffect(() => {
		if (!name) setValue("");
	}, [name]);

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop="blur"
			placement="top-center"
		>
			<NextUIProvider className="dark text-foreground bg-background">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{t("startModal.title")}
							</ModalHeader>
							<ModalBody className="flex flex-row mb-2">
								<Input
									maxLength={50}
									autoFocus
									size="lg"
									variant="bordered"
									value={value}
									onValueChange={setValue}
									onKeyDown={(e) => {
										if (e.target?.value && e.key === "Enter") {
											onClose();
											setName(value);
										}
									}}
								/>
								<Button
									size="lg"
									color="primary"
									onPress={() => {
										onClose();
										setName(value);
									}}
								>
									{t("startModal.continue")}
								</Button>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</NextUIProvider>
		</Modal>
	);
};
