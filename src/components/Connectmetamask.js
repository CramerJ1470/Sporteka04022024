import React from "react";
import styles from "../css/page.module.css";

function ConnectMetaMask(leagues) {
	return (
		<div>
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossorigin
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Kavoon&display=swap"
				rel="stylesheet"
			></link>
			<main className={styles.main}>
				<div className={styles.center}>
					<div className={styles.description}>
						<span className="top">
							<span className="top">
								<div>
									<p className="centPage2 kavoon">Sporteka</p>

									<p className="centPage1 top kavoon">
										Sport Blockchain Platform
									</p>
								</div>
							</span>
							<button className="centPage kavoon" onClick={""}>
								Connect Wallet
							</button>
						</span>
					</div>
					<div></div>
				</div>
			</main>
		</div>
	);
}

export default ConnectMetaMask;