import ghpages from "gh-pages"
import { execSync } from "child_process"

// build project
execSync("npm run format")
execSync("npm run lint", { stdio: "inherit" })
execSync("npm run build", { stdio: "inherit" })

// deploy
ghpages.publish(
	"dist",
	{
		branch: "gh-pages",
		dotfiles: false,
		message: "AUtomatic deployment with gh-pages",
		remote: "origin",
		push: true,
		silent: false,
	},
	err => {
		if (err) {
			console.error(err)
		}
		// clean folder after deploy
		execSync("rm -rf dist", { stdio: "inherit" })
	}
)
