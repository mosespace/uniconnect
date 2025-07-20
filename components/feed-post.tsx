'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Mail, MessageSquareText, MoreHorizontal, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ExpandableText } from './expandable-text';
import { ImageZoomModal } from './image-zoom-modal';
import { ReactionPicker } from './reaction-picker';

interface FeedPostProps {
  post: {
    id: number;
    user: {
      name: string;
      avatar: string;
      year: string;
      course: string;
      verified: boolean;
    };
    type: string;
    title: string;
    description: string;
    price?: number;
    priceUnit?: string;
    images?: string[];
    likes: number;
    comments: number;
    timeAgo: string;
  };
}

export function FeedPost({ post }: FeedPostProps) {
  const [currentReaction, setCurrentReaction] = useState<string | null>(null);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleReactionSelect = (reaction: any) => {
    const wasLiked = currentReaction !== null;
    const isLiked = reaction !== null;

    setCurrentReaction(reaction?.id || null);

    // Update likes count based on reaction change
    if (!wasLiked && isLiked) {
      setLikesCount((prev) => prev + 1);
    } else if (wasLiked && !isLiked) {
      setLikesCount((prev) => prev - 1);
    }
    // If changing from one reaction to another, count stays the same
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setZoomModalOpen(true);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'FOR SALE':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'SKILL OFFERED':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'FREE':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const renderImages = () => {
    if (!post.images || post.images.length === 0) return null;

    // Single image - display normally with click to zoom
    if (post.images.length === 1) {
      return (
        <div
          className="w-full overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={post.images[0] || '/placeholder.svg'}
            alt="Post image"
            width={600}
            height={300}
            className="w-full h-[50%] object-cover"
          />
        </div>
      );
    }

    // Multiple images - use carousel with click to zoom
    return (
      <div className="relative tracking-wide">
        <Carousel className="w-full">
          <CarouselContent>
            {post.images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="overflow-hidden cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Post image ${index + 1}`}
                    width={600}
                    height={300}
                    className="w-full h-[50%] object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons - positioned inside the carousel */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0" />

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
            1 / {post.images.length}
          </div>
        </Carousel>
      </div>
    );
  };

  return (
    <>
      <Card className="w-full shadow-xs !pb-0">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={post.user.avatar || '/placeholder.svg'}
                  alt={post.user.name}
                />
                <AvatarFallback>
                  {post.user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{post.user.name}</h3>
                  {post.user.verified && (
                    // <Badge className="rounded-full text-white bg-blue-600 w-[1.3rem] h-[1.3rem] text-xs">
                    //   ✓
                    // </Badge>
                    <img
                      src="/blue_checkmark.png"
                      alt="uniconnect_blue_checkmark"
                      className="w-[1.3rem] h-[1.3rem]"
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {post.user.year} • {post.user.course}
                </p>
                <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={getTypeColor(post.type)}>{post.type}</Badge>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="!px-0">
          <div className="px-5 pb-2">
            <span className="flex flex-wrap items-center mb-2 gap-2">
              <h4 className="font-semibold text-lg">{post.title} ~</h4>
              {post.price && (
                <span className="text-xl font-bold text-primarys">
                  £{post.price}.00
                  {post.priceUnit && (
                    <span className="text-sm font-normal">
                      {' '}
                      {post.priceUnit}
                    </span>
                  )}
                </span>
              )}
            </span>
            <ExpandableText text={post.description} maxLines={2} />
          </div>

          {renderImages()}

          <div className="px-5 py-3 flex items-center justify-between border-t">
            <div className="flex items-center space-x-2">
              <ReactionPicker
                currentReaction={currentReaction}
                onReactionSelect={handleReactionSelect}
                count={likesCount}
              />
              <Button variant="ghost" size="sm" className="space-x-2">
                <MessageSquareText className="size-5" />
                <span className="font-semibold">
                  {post.comments} Comment(s)
                </span>
              </Button>
              <Button variant="ghost" className="font-semibold" size="sm">
                <Send className="size-5" /> Share
              </Button>
            </div>
            <Button size="sm" className="space-x-1">
              <Mail className="size-5" />
              <span>Message</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Image Zoom Modal */}
      {post.images && (
        <div className="w-full">
          <ImageZoomModal
            images={post.images}
            initialIndex={selectedImageIndex}
            isOpen={zoomModalOpen}
            onClose={() => setZoomModalOpen(false)}
          />
        </div>
      )}
    </>
  );
}
