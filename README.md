# garage-sale-fe
[![CircleCI](https://circleci.com/gh/twlabs/garage-sale-fe.svg?style=svg&circle-token=cfe4afe682ad1e1bb204f71dcd6863e4a4bbb94d)](https://circleci.com/gh/twlabs/garage-sale-fe)

## Tech Stack

  * React Front End

## Steps for merge from original repo to TW repo

  1. open `.git/config` file
  2. replace origin with new origin
```
[remote "origin"]
      url = https://github.com/twlabs/garage-sale-fe.git
      fetch = +refs/heads/*:refs/remotes/origin/*
```
  3. run `git pull --allow-unrelated-histories`
  4. now you should be able to push