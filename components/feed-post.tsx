"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share, Mail, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface FeedPostProps {
  post: {
    id: number
    user: {
      name: string
      avatar: string
      year: string
      course: string
      verified: boolean
    }
    type: string
    title: string
    description: string
    price?: number
    priceUnit?: string
    images?: string[]
    likes: number
    comments: number
    timeAgo: string
  }
}

export function FeedPost({ post }: FeedPostProps) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "FOR SALE":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "SKILL OFFERED":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "FREE":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
              <AvatarFallback>
                {post.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{post.user.name}</h3>
                {post.user.verified && (
                  <Badge variant="secondary" className="h-4 text-xs">
                    ✓
                  </Badge>
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

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
          <p className="text-muted-foreground">{post.description}</p>
          {post.price && (
            <div className="mt-2">
              <span className="text-2xl font-bold text-primary">
                ${post.price}
                {post.priceUnit && <span className="text-sm font-normal"> {post.priceUnit}</span>}
              </span>
            </div>
          )}
        </div>

        {post.images && post.images.length > 0 && (
          <div className="rounded-lg overflow-hidden">
            <Image
              src={post.images[0] || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`space-x-2 ${liked ? "text-red-500" : ""}`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
          </div>
          <Button size="sm" className="space-x-2">
            <Mail className="h-4 w-4" />
            <span>Message</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
