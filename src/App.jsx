import "./App.css";
import { Link, NextUIProvider } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";

function App() {
	const { t, i18n } = useTranslation();

	return (
		<NextUIProvider className="dark text-foreground bg-background">
			<div className="flex flex-col min-h-screen">
				<Home />
				<footer className="w-full text-center py-4 bg-content1 text-default-400 max-md:text-sm">
					<p>
						{t("developedBy")}{" "}
						<Link
							href="https://github.com/MllGll"
							className="text-default-400 max-md:text-sm"
						>
							<b>Marcello Gallante</b>
						</Link>
					</p>
					<p className="mt-2 flex justify-center gap-2 text-small">
						<button
							type="button"
							className="underline opacity-80 hover:opacity-100"
							onClick={() => i18n.changeLanguage("pt")}
						>
							{t("lang.pt")}
						</button>
						<span aria-hidden="true">·</span>
						<button
							type="button"
							className="underline opacity-80 hover:opacity-100"
							onClick={() => i18n.changeLanguage("en")}
						>
							{t("lang.en")}
						</button>
					</p>
				</footer>
			</div>
		</NextUIProvider>
	);
}

export default App;
