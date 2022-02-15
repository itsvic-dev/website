import Fallback from '@/components/Fallback'
import '@fontsource/rubik/600.css'
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

const BlogPreview = lazy(() => import('@/pages/BlogPreview'))

const Index = () => {
	return (
		<div css={tw`flex flex-col gap-2`}>
			<p>hello! I&apos;m omame - a 16 year old from Poland.</p>
			<p>I work on a plethora of projects which you can check out above.</p>
			<p>my usual projects are:</p>
			<ul css={tw`list-disc ml-8 list-outside`}>
				<li>React websites, written in TypeScript</li>
				<li>Node.js Express backends, written in TypeScript</li>
				<li>Flask and aiohttp Python backends</li>
				<li>lots of random Python scripts for no reason</li>
			</ul>
			<p>
				sometimes I might try out some weird thing, in which case I might update{' '}
				<Link to="/blog" css={tw`font-semibold underline`}>
					my blog.
				</Link>{' '}
				<span css={tw`text-gray-600 dark:text-gray-400`}>
					(yes, I have a blog now. no, I don't know why)
				</span>
			</p>
			<Suspense fallback={<Fallback />}>
				<BlogPreview />
			</Suspense>
		</div>
	)
}

export default Index
