import cn from '@/lib/utils/cn'
import { SITE_URL } from '@/lib/constants'
import { generateMeta, mergeMeta } from '@/lib/utils/meta'
import { usePreservedLoaderData } from '@joycostudio/transitions'
import type { MetaFunction } from 'react-router'

export function loader() {
  const messageCopy = `teste`
  const signature = `Made by rebels.`

  return { message: messageCopy, signature }
}

export const meta: MetaFunction<typeof loader> = ({ data, matches }) => {
  const parentMeta = matches.flatMap((match) => match.meta ?? [])

  return mergeMeta(
    parentMeta,
    generateMeta({
      title: 'About',
      description: data?.message ?? '',
      image: { url: `${SITE_URL}/about/opengraph-image.png`, width: 1200, height: 630, type: 'image/png' },
    })
  )
}

const Paragraph = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <p
      className={cn(
        'font-mono text-primary text-opacity-50 text-pretty whitespace-pre-wrap text-xs leading-relaxed font-medium uppercase mt-2 max-w-prose',
        className
      )}
    >
      {children}
    </p>
  )
}

export default function History() {
  return (
    <div className="selection:bg-primary selection:text-background flex flex-col items-center h-screen pt-header">
      <div className="flex flex-col justify-center items-center mt-10 max-w-2xl p-4">
        <h1 className="text-6xl uppercase font-sans font-bold mb-5">History page</h1>
        <p>History</p>
      </div>
    </div>
  )
}
