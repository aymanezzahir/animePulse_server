#!/bin/bash
git add -A
echo give me your comment 
read -r string

git commit -m "$string"

git push origin master