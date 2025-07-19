import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, UserPlus, Star } from "lucide-react"
import Image from "next/image"

export function ProfileHeader() {
  return (
    <Card>
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg">
        <Image src="/placeholder.svg?height=200&width=800" alt="Cover" fill className="object-cover rounded-t-lg" />
      </div>
      <CardContent className="relative pt-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 -mt-16">
          <Avatar className="h-32 w-32 border-4 border-background">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
            <AvatarFallback className="text-2xl">SC</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">Sarah Chen</h1>
              <Badge variant="secondary" className="h-5">
                ✓ Verified
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9</span>
                <span className="text-sm text-muted-foreground">(127 reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground">3rd Year Computer Science • University of Technology</p>
            <p className="text-sm">
              Passionate about web development and helping fellow students learn to code. Available for tutoring and
              freelance projects!
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>📍 San Francisco, CA</span>
              <span>•</span>
              <span>🎓 Joined Sep 2021</span>
              <span>•</span>
              <span>👥 1,234 followers</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Follow
            </Button>
            <Button size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
