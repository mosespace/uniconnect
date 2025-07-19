import { MainLayout } from '@/components/main-layout';
import { FeedPost } from '@/components/feed-post';
import { PostCreationModal } from '@/components/post-creation-modal';

const feedPosts = [
  {
    id: 1,
    user: {
      name: 'Sarah Chen',
      avatar: '/placeholder.svg?height=40&width=40',
      year: '3rd Year',
      course: 'Computer Science',
      verified: true,
    },
    type: 'FOR SALE',
    title: 'MacBook Pro 2021 - Perfect for CS Students!',
    description:
      'Selling my MacBook Pro 2021 (M1 chip, 16GB RAM, 512GB SSD). Perfect condition, barely used. Great for coding and design work. Includes original charger and box.',
    price: 1200,
    images: ['/placeholder.svg?height=300&width=400'],
    likes: 24,
    comments: 8,
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Alex Rodriguez',
      avatar: '/placeholder.svg?height=40&width=40',
      year: '4th Year',
      course: 'Business Administration',
      verified: false,
    },
    type: 'SKILL OFFERED',
    title: 'Web Development Tutoring',
    description:
      'Offering web development tutoring sessions! I specialize in React, Node.js, and full-stack development. Perfect for beginners or intermediate students looking to improve their skills.',
    price: 25,
    priceUnit: 'per hour',
    likes: 18,
    comments: 12,
    timeAgo: '4 hours ago',
  },
  {
    id: 3,
    user: {
      name: 'Emma Thompson',
      avatar: '/placeholder.svg?height=40&width=40',
      year: '2nd Year',
      course: 'Psychology',
      verified: true,
    },
    type: 'FREE',
    title: 'Psychology Textbooks - Free to Good Home!',
    description:
      'Moving out and need to get rid of my psychology textbooks from first year. All in good condition. Perfect for current psych students!',
    images: ['/placeholder.svg?height=300&width=400'],
    likes: 45,
    comments: 23,
    timeAgo: '6 hours ago',
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        {feedPosts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
      <PostCreationModal />
    </MainLayout>
  );
}
