import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({ })

export default [
  ...compat.plugins('solid'),
  ...compat.extends('plugin:solid/recommended')
]
