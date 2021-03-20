import React from "react";
import Link from "@material-ui/core/Link";

export default function step() {
	return (
		<ol>
			<li>
				Go to <Link href="https://stackblitz.com/">StackBlitz</Link>
			</li>
			<li>Sign in with your GitHub account</li>
			<li>Create a new Static project</li>
		</ol>
	);
}
