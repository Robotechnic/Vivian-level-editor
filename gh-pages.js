import ghpages from "gh-pages"
import { execSync } from "child_process"

// build project
execSync("npm run build")

// deploy
ghpages.publish("dist", {
	branch: "gh-pages",
	dotfiles: false,
	message: "AUtomatic deployment with gh-pages",
	remote: "origin",
	push: true,
	silent: false,

})

// clean folder
execSync("rm -rf dist")