import { ar } from './dictionaries/ar'
import { en } from './dictionaries/en'
import { tr } from './dictionaries/tr'
import {
  DEFAULT_LANG,
  isLang,
  LANGS,
  STORAGE_KEY,
  type Dictionary,
  type Dir,
  type Lang,
} from './types'

export { LANGS, DEFAULT_LANG, STORAGE_KEY, isLang }
export type { Dictionary, Dir, Lang }

const DICTIONARIES: Record<Lang, Dictionary> = { ar, en, tr }

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang]
}

export function detectInitialLang(): Lang {
  if (typeof window === 'undefined') {
    return DEFAULT_LANG
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLang(stored)) {
    return stored
  }

  const browser = window.navigator.language.toLowerCase()
  if (browser.startsWith('ar')) return 'ar'
  if (browser.startsWith('tr')) return 'tr'
  return DEFAULT_LANG
}

export function applyDocumentLocale(lang: Lang, dir: Dir) {
  const root = document.documentElement
  root.lang = lang
  root.dir = dir
  root.classList.toggle('font-arabic', lang === 'ar')
}
