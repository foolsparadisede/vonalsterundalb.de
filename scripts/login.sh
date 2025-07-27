#!/bin/bash

prevRegistry=$(yarn config get npmRegistryServer)

function cleanup {
  yarn config set npmRegistryServer "$prevRegistry" > /dev/null
}

trap cleanup EXIT

yarn config set npmRegistryServer https://npm.foolsparadise.de/ > /dev/null

yarn npm login
