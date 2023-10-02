interface Options {
  expires?: string
  path?: string
  domain?: string
  secure?: string
}

declare module '@boiseitguru/cookie-cutter' {
  const get: (key: string) => string | undefined
  const set: (key: string, value: string, opts?: Options) => void
}
