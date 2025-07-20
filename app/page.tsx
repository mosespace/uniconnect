import { MainLayout } from '@/components/main-layout';
import { FeedPost } from '@/components/feed-post';
import { PostCreationModal } from '@/components/post-creation-modal';

const feedPosts = [
  {
    id: 1,
    user: {
      name: 'Kisakye Moses',
      avatar:
        'https://media.licdn.com/dms/image/v2/D5603AQHCxzu2HIx-4g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718216985781?e=1755734400&v=beta&t=i9A3-15J5EgCmuc5A9wjTM1_gCR1BnKtbLAq4Q22EWI',
      year: '3rd Year',
      course: 'Computer Science',
      verified: true,
    },
    type: 'FOR SALE',
    title: 'MacBook Pro 2021 - Perfect for CS Students!',
    description:
      'Selling my MacBook Pro 2021 (M1 chip, 16GB RAM, 512GB SSD). Perfect condition, barely used. Great for coding and design work. Includes original charger and box.Selling my MacBook Pro 2021 (M1 chip, 16GB RAM, 512GB SSD). Perfect condition, barely used. Great for coding and design work. Includes original charger and box.Selling my MacBook Pro 2021 (M1 chip, 16GB RAM, 512GB SSD). Perfect condition, barely used. Great for coding and design work. Includes original charger and box.Selling my MacBook Pro 2021 (M1 chip, 16GB RAM, 512GB SSD). Perfect condition, barely used. Great for coding and design work. Includes original charger and box.',
    price: 1200.0,
    priceUnit: 'p/m',
    images: [
      'https://media.licdn.com/dms/image/v2/D4D22AQGw553ZBwuG_g/feedshare-shrink_800/B4DZgQBDtvHAAg-/0/1752615376002?e=1755734400&v=beta&t=McDp9ItVK7x73hQIQ8YFrWlBA8kmf6BKmCLgTDKOqN4',
      'https://kitrum.com/wp-content/uploads/2023/06/Next.JS.png',
    ],
    likes: 24,
    comments: 8,
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    user: {
      name: 'Alex Rodriguez',
      avatar:
        'https://media.licdn.com/dms/image/v2/D5603AQHCxzu2HIx-4g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718216985781?e=1755734400&v=beta&t=i9A3-15J5EgCmuc5A9wjTM1_gCR1BnKtbLAq4Q22EWI',
      year: '4th Year',
      course: 'Business Administration',
      verified: false,
    },
    type: 'SKILL OFFERED',
    title: 'Web Development Tutoring',
    description:
      'Offering web development tutoring sessions! I specialize in React, Node.js, and full-stack development. Perfect for beginners or intermediate students looking to improve their skills.',
    price: 25.0,
    priceUnit: 'p/h',
    likes: 18,
    comments: 12,
    timeAgo: '4 hours ago',
  },
  {
    id: 3,
    user: {
      name: 'Emma Thompson',
      avatar:
        'https://media.licdn.com/dms/image/v2/D5603AQHCxzu2HIx-4g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718216985781?e=1755734400&v=beta&t=i9A3-15J5EgCmuc5A9wjTM1_gCR1BnKtbLAq4Q22EWI',
      year: '2nd Year',
      course: 'Psychology',
      verified: true,
    },
    type: 'FREE',
    title: 'Psychology Textbooks - Free to Good Home!',
    description:
      'Moving out and need to get rid of my psychology textbooks from first year. All in good condition. Perfect for current psych students!',
    images: ['https://kitrum.com/wp-content/uploads/2023/06/Next.JS.png'],
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
