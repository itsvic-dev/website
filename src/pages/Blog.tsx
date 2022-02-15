import omame from '@/assets/icon.webp'

export type BlogPost = {
	id: number
	title: string
	description: string
	thumbnail: string
	body: string
	published: Date
}

export const posts: { [id: number]: BlogPost } = {
	0: {
		id: 0,
		title: 'post title',
		description: 'short description',
		thumbnail: omame,
		body: '',
		published: new Date(),
	},
}

const Blog = () => {
	return <p>todo</p>
}

export default Blog
