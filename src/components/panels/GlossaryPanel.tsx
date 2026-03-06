import { Fragment, useEffect, useMemo, useState, type ReactElement } from 'react'
import {
  getGlossaryEntries,
  GLOSSARY_CATEGORIES,
  GLOSSARY_TAGS,
  isLinkableContext,
} from '../../data/glossary'
import { CustomSelect } from '../CustomSelect'
import { GlassCard } from '../GlassCard'

type SortBy = 'label' | 'category'

/** 五十音の行ごとの開始文字（ひらがな・カタカナ） */
const GOJUON_ROW_CHARS: Record<string, string> = {
  'あ行': 'あいうえおぁぃぅぇぉアイウエオァィゥェォ',
  'か行': 'かきくけこがぎぐげごカキクケコガギグゲゴ',
  'さ行': 'さしすせそざじずぜぞサシスセソザジズゼゾ',
  'た行': 'たちつてとだぢづでどタチツテトダヂヅデド',
  'な行': 'なにぬねのナニヌネノ',
  'は行': 'はひふへほばびぶべぼぱぴぷぺぽハヒフヘホバビブベボパピプペポ',
  'ま行': 'まみむめもマミムメモ',
  'や行': 'やゆよゃゅょヤユヨャュョ',
  'ら行': 'らりるれろラリルレロ',
  'わ行': 'わをんゎワヲン',
}

const LATIN_A_Z = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

const GOJUON_ROW_ORDER: string[] = [
  'あ行', 'か行', 'さ行', 'た行', 'な行', 'は行', 'ま行', 'や行', 'ら行', 'わ行',
  ...LATIN_A_Z,
  '0-9',
  'その他',
]

function getGojuonRow(label: string): string {
  const first = label.charAt(0)
  for (const [row, chars] of Object.entries(GOJUON_ROW_CHARS)) {
    if (chars.includes(first)) return row
  }
  const upper = first.toUpperCase()
  if (upper >= 'A' && upper <= 'Z') return upper
  if (first >= '0' && first <= '9') return '0-9'
  return 'その他'
}

type EntryForLinks = { key: string; label: string }

/** 説明文中の他用語をクリックでスクロールするリンクに変換 */
function descriptionWithTermLinks(
  description: string,
  currentKey: string,
  entries: EntryForLinks[],
  onTermClick: (key: string) => void
): (string | ReactElement)[] {
  const others = entries
    .filter((e) => e.key !== currentKey && e.label.length > 0)
    .sort((a, b) => b.label.length - a.label.length)
  if (others.length === 0) return [description]
  const result: (string | ReactElement)[] = []
  let i = 0
  let keyIdx = 0
  while (i < description.length) {
    let matched: { key: string; label: string } | null = null
    for (const e of others) {
      if (description.substring(i, i + e.label.length) === e.label) {
        const prevChar = description[i - 1] ?? ''
        const nextChar = description[i + e.label.length] ?? ''
        if (isLinkableContext(e.label, prevChar, nextChar)) {
          matched = e
          break
        }
      }
    }
    if (matched) {
      const k = keyIdx++
      const termKey = matched.key
      result.push(
        <button
          key={`link-${k}`}
          type="button"
          onClick={() => onTermClick(termKey)}
          className="border-b border-dotted border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 rounded px-0.5 cursor-pointer"
        >
          {matched.label}
        </button>
      )
      i += matched.label.length
    } else {
      result.push(description[i])
      i += 1
    }
  }
  const merged: (string | ReactElement)[] = []
  let buf = ''
  for (const x of result) {
    if (typeof x === 'string') buf += x
    else {
      if (buf) {
        merged.push(buf)
        buf = ''
      }
      merged.push(x)
    }
  }
  if (buf) merged.push(buf)
  return merged
}

const initialQueryFromHash = (): string => {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(window.location.search)
  return params.get('q') ?? ''
}

export function GlossaryPanel() {
  const [search, setSearch] = useState(initialQueryFromHash)
  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [sortBy, setSortBy] = useState<SortBy>('category')
  const [openCategoryIds, setOpenCategoryIds] = useState<Set<string>>(new Set())

  const toggleCategory = (catId: string) => {
    setOpenCategoryIds((prev) => {
      const next = new Set(prev)
      if (next.has(catId)) next.delete(catId)
      else next.add(catId)
      return next
    })
  }

  const entries = useMemo(() => getGlossaryEntries(), [])

  // URL の ?term= で用語に飛んだとき、該当アコーディオンを開いてスクロール
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const termKey = params.get('term')
    if (!termKey) return
    const entry = entries.find((e) => e.key === termKey)
    if (!entry) return
    const groupId =
      sortBy === 'category' ? entry.category : `gojuon-${getGojuonRow(entry.label)}`
    setOpenCategoryIds((prev) => new Set([...prev, groupId]))
    const t = setTimeout(() => {
      document.getElementById(`term-${termKey}`)?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
    return () => clearTimeout(t)
  }, [entries, sortBy])

  const filteredAndSorted = useMemo(() => {
    const q = search.trim().toLowerCase()
    let list = entries.filter((entry) => {
      if (q && !entry.label.toLowerCase().includes(q) &&
          !entry.key.toLowerCase().includes(q) &&
          !entry.description.toLowerCase().includes(q)) {
        return false
      }
      if (categoryFilter && entry.category !== categoryFilter) return false
      if (selectedTags.size > 0) {
        const hasTag = entry.tags.some((t) => selectedTags.has(t))
        if (!hasTag) return false
      }
      return true
    })

    if (sortBy === 'label') {
      list = [...list].sort((a, b) => a.label.localeCompare(b.label, 'ja'))
    } else {
      list = [...list].sort((a, b) => {
        const catOrder = a.category.localeCompare(b.category)
        if (catOrder !== 0) return catOrder
        return a.label.localeCompare(b.label, 'ja')
      })
    }
    return list
  }, [entries, search, categoryFilter, selectedTags, sortBy])

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tagId)) next.delete(tagId)
      else next.add(tagId)
      return next
    })
  }

  const tagLabel = (id: string) =>
    GLOSSARY_TAGS.find((t) => t.id === id)?.label ?? id

  const handleTermClick = (key: string) => {
    const entry = entries.find((e) => e.key === key)
    if (!entry) return
    const groupId =
      sortBy === 'category' ? entry.category : `gojuon-${getGojuonRow(entry.label)}`
    const isVisible = filteredAndSorted.some((e) => e.key === key)
    if (!isVisible) {
      setSearch('')
      setCategoryFilter('')
      setSelectedTags(new Set())
    }
    setOpenCategoryIds((prev) => new Set([...prev, groupId]))
    setTimeout(() => {
      document.getElementById(`term-${key}`)?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  const groupedByCategory =
    sortBy === 'category'
      ? filteredAndSorted.reduce<Record<string, typeof filteredAndSorted>>(
          (acc, entry) => {
            const c = entry.category
            if (!acc[c]) acc[c] = []
            acc[c].push(entry)
            return acc
          },
          {}
        )
      : null

  const groupedByGojuon: Record<string, typeof filteredAndSorted> | null =
    sortBy === 'label'
      ? filteredAndSorted.reduce<Record<string, typeof filteredAndSorted>>(
          (acc, entry) => {
            const row = getGojuonRow(entry.label)
            if (!acc[row]) acc[row] = []
            acc[row].push(entry)
            return acc
          },
          {}
        )
      : null

  return (
    <section
      id="panel-glossary"
      role="tabpanel"
      aria-labelledby="tab-glossary"
      className="space-y-6"
    >
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          用語集
        </h2>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-3 items-end">
          <label className="flex flex-col gap-1">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              検索
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="用語名・説明で検索..."
              className="rounded-lg px-3 py-2 bg-white/50 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-900 dark:text-white placeholder-neutral-500 min-w-[200px] focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 outline-none"
              aria-label="用語を検索"
            />
          </label>
          <CustomSelect
            label="カテゴリ"
            aria-label="カテゴリで絞り込み"
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={[
              { value: '', label: 'すべて' },
              ...GLOSSARY_CATEGORIES.map((c) => ({ value: c.id, label: c.label })),
            ]}
            placeholder="すべて"
          />
          <CustomSelect
            label="並び順"
            aria-label="並び順"
            value={sortBy}
            onChange={(v) => setSortBy(v as SortBy)}
            options={[
              { value: 'category', label: 'カテゴリ順' },
              { value: 'label', label: '表示名順' },
            ]}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            タグで絞り込み:
          </span>
          {GLOSSARY_TAGS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => toggleTag(t.id)}
              className={
                'px-2.5 py-1 rounded-full text-xs font-medium transition-colors ' +
                (selectedTags.has(t.id)
                  ? 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-neutral-900'
                  : 'bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-700 dark:text-neutral-300 hover:bg-white/60 dark:hover:bg-white/20')
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {filteredAndSorted.length} 件
      </p>

      {groupedByCategory ? (
        <div className="space-y-2">
          {GLOSSARY_CATEGORIES.filter((c) => groupedByCategory[c.id]?.length)
            .map((cat) => {
              const isOpen = openCategoryIds.has(cat.id)
              const count = groupedByCategory[cat.id]?.length ?? 0
              return (
                <div key={cat.id} className="border border-white/30 dark:border-white/15 rounded-lg overflow-hidden bg-white/10 dark:bg-white/5">
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left text-base font-semibold text-neutral-800 dark:text-neutral-200 px-4 py-3 flex items-center justify-between gap-2 hover:bg-white/20 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 focus:ring-inset outline-none"
                  >
                    <span>{cat.label}</span>
                    <span className="flex items-center gap-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                      <span>{count} 件</span>
                      <span className="text-neutral-400 dark:text-neutral-500" aria-hidden>
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/20 dark:border-white/10 px-2 py-3 space-y-4">
                      <ul className="space-y-4 list-none p-0 m-0">
                        {groupedByCategory[cat.id]?.map((entry) => (
                          <li key={entry.key} id={`term-${entry.key}`} className="scroll-mt-[88px]">
                            <GlassCard className="p-5">
                              <h4 className="text-base font-semibold text-neutral-900 dark:text-white border-l-4 border-indigo-400 dark:border-indigo-400 pl-3">
                                {entry.label}
                              </h4>
                              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {descriptionWithTermLinks(entry.description, entry.key, entries, handleTermClick).map((node, i) => (
                                  <Fragment key={i}>{node}</Fragment>
                                ))}
                              </p>
                              {entry.tags.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {entry.tags.map((tagId) => (
                                    <span
                                      key={tagId}
                                      className="px-1.5 py-0.5 rounded text-xs bg-neutral-200/80 dark:bg-neutral-600/50 text-neutral-600 dark:text-neutral-300"
                                    >
                                      {tagLabel(tagId)}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </GlassCard>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      ) : groupedByGojuon ? (
        <div className="space-y-2">
          {GOJUON_ROW_ORDER.filter((row) => groupedByGojuon[row]?.length).map(
            (row) => {
              const accordionId = `gojuon-${row}`
              const isOpen = openCategoryIds.has(accordionId)
              const count = groupedByGojuon[row]?.length ?? 0
              return (
                <div
                  key={row}
                  className="border border-white/30 dark:border-white/15 rounded-lg overflow-hidden bg-white/10 dark:bg-white/5"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(accordionId)}
                    aria-expanded={isOpen}
                    className="w-full text-left text-base font-semibold text-neutral-800 dark:text-neutral-200 px-4 py-3 flex items-center justify-between gap-2 hover:bg-white/20 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 focus:ring-inset outline-none"
                  >
                    <span>{row}</span>
                    <span className="flex items-center gap-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                      <span>{count} 件</span>
                      <span className="text-neutral-400 dark:text-neutral-500" aria-hidden>
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/20 dark:border-white/10 px-2 py-3 space-y-4">
                      <ul className="space-y-4 list-none p-0 m-0">
                        {groupedByGojuon[row]?.map((entry) => (
                          <li key={entry.key} id={`term-${entry.key}`} className="scroll-mt-[88px]">
                            <GlassCard className="p-5">
                              <h4 className="text-base font-semibold text-neutral-900 dark:text-white border-l-4 border-indigo-400 dark:border-indigo-400 pl-3">
                                {entry.label}
                              </h4>
                              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {descriptionWithTermLinks(entry.description, entry.key, entries, handleTermClick).map((node, i) => (
                                  <Fragment key={i}>{node}</Fragment>
                                ))}
                              </p>
                              {entry.tags.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {entry.tags.map((tagId) => (
                                    <span
                                      key={tagId}
                                      className="px-1.5 py-0.5 rounded text-xs bg-neutral-200/80 dark:bg-neutral-600/50 text-neutral-600 dark:text-neutral-300"
                                    >
                                      {tagLabel(tagId)}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </GlassCard>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            }
          )}
        </div>
      ) : (
        <ul className="space-y-4 list-none p-0 m-0">
          {filteredAndSorted.map((entry) => (
            <li key={entry.key} id={`term-${entry.key}`} className="scroll-mt-[88px]">
              <GlassCard className="p-5">
                <h4 className="text-base font-semibold text-neutral-900 dark:text-white border-l-4 border-indigo-400 dark:border-indigo-400 pl-3">
                  {entry.label}
                </h4>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {descriptionWithTermLinks(entry.description, entry.key, entries, handleTermClick).map((node, i) => (
                    <Fragment key={i}>{node}</Fragment>
                  ))}
                </p>
                {entry.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.tags.map((tagId) => (
                      <span
                        key={tagId}
                        className="px-1.5 py-0.5 rounded text-xs bg-neutral-200/80 dark:bg-neutral-600/50 text-neutral-600 dark:text-neutral-300"
                      >
                        {tagLabel(tagId)}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </li>
          ))}
        </ul>
      )}

      {filteredAndSorted.length === 0 && (
        <p className="text-neutral-500 dark:text-neutral-400">
          条件に合う用語がありません。検索ワードやフィルタを変えてみてください。
        </p>
      )}
    </section>
  )
}
