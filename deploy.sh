#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'docs-staging-test.n8n.io' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:janober/n8n-docs.git master:gh-pages

cd -
