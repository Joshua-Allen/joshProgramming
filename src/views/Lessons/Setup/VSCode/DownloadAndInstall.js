import React from "react";
import Link from "@material-ui/core/Link";

export default function step() {
	return (
		<ol>
			<li>
				Go to <Link href="https://code.visualstudio.com/">VS Code Download Page</Link>
			</li>
			<li>Run the setup .exe</li>
			<li>Once setup is complete, open VS Code</li>
		</ol>
	);
}
