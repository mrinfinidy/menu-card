# Menu Card
## Push the React app to the GitHub repository

`$ npm run deploy`

This will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

`$ npm run deploy -- -m "Deploy React app to GitHub Pages`

At this point, the GitHub repository contains a branch named gh-pages, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to serve those files yet.
