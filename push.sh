#!/bin/bash

echo "- Purging public dir"
rm -rf public/* && echo "- Purging public dir: Done"
echo
echo "Re-generate public dir"
hugo && echo "Re-generate public dir: Done"
echo
echo "Work with git"
git add . && git commit -m "upd" && git push
echo
echo "Done!"
