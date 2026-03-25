#!/bin/sh

if [ "$CI" = "true" ]; then
  nuxt-module-build build
else
  nuxt-module-build build --stub
fi

