#!/bin/sh

if [ "$CI" = "true" ]; then
  nuxi prepare && nuxt-module-build build
else
  nuxt-module-build build --stub
fi

