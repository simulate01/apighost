.PHONY: dist test

dev:
	@npm run dev

dist:
	@npm run dist

deploy:
	@npm run deploy

deploy-dev:
	rsync -az -v -r --delete-after --force \
	  --filter="- node_modules" \
	  -e "ssh -p 22" \
	  ./dist/ \
	  deploy@114.215.120.151:~/server/static
