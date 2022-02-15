import { posts, BlogPost } from '@/pages/Blog'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

const BlogPreview = (props: { limit?: number }) => (
	<div css={tw`flex flex-wrap gap-4 justify-center`}>
		{(props.limit
			? Object.values(posts).splice(0, props.limit)
			: Object.values(posts)
		).map((post: BlogPost) => (
			<Link
				key={post.id}
				css={[
					tw`border border-zinc-600 rounded-lg shadow-md w-1/2`,
					{
						backgroundImage: `url(${post.thumbnail})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					},
				]}
				to={`/blog/${post.id}`}
			>
				<div
					css={tw`mt-48 p-4 backdrop-blur-lg rounded-b-lg bg-zinc-100 bg-opacity-70 dark:(bg-zinc-900 bg-opacity-70)`}
				>
					<h1 css={tw`text-2xl font-semibold`}>{post.title}</h1>
					<p css={tw`italic`}>{post.description}</p>
				</div>
			</Link>
		))}
	</div>
)

export default BlogPreview
