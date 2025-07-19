import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

const items = [
  {
    id: 1,
    title: "MacBook Pro 2021 - M1 Chip",
    price: 1200,
    originalPrice: 1500,
    condition: "Like New",
    category: "Electronics",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      verified: true,
    },
    tags: ["🔥 Trending", "Almost Gone"],
    likes: 24,
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    title: "Calculus Textbook Bundle",
    price: 0,
    condition: "Good",
    category: "Books",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      verified: false,
    },
    tags: ["Free Today"],
    likes: 18,
    timeAgo: "4 hours ago",
  },
  {
    id: 3,
    title: "Gaming Chair - Ergonomic",
    price: 150,
    originalPrice: 250,
    condition: "Good",
    category: "Furniture",
    image: "/placeholder.svg?height=200&width=300",
    seller: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      verified: true,
    },
    tags: ["Great Deal"],
    likes: 12,
    timeAgo: "1 day ago",
  },
]

export function MarketplaceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {item.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <CardContent className="p-4 space-y-3">
            <div>
              <h3 className="font-semibold line-clamp-2">{item.title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {item.condition}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {item.price === 0 ? (
                <span className="text-lg font-bold text-green-600">FREE</span>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={item.seller.avatar || "/placeholder.svg"} alt={item.seller.name} />
                  <AvatarFallback className="text-xs">
                    {item.seller.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{item.seller.name}</span>
                {item.seller.verified && (
                  <Badge variant="secondary" className="h-3 text-xs">
                    ✓
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Heart className="h-3 w-3" />
                <span>{item.likes}</span>
              </div>
            </div>

            <Button className="w-full" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Seller
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
