"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Recent posts will appear here</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="skills" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Web Development</span>
                <Badge variant="secondary">Expert</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Full-stack web development using React, Node.js, and modern frameworks
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.9 (45 reviews)</span>
                </div>
                <span className="font-semibold">$30/hr</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>React Tutoring</span>
                <Badge variant="secondary">Advanced</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                One-on-one React tutoring for beginners and intermediate developers
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">5.0 (23 reviews)</span>
                </div>
                <span className="font-semibold">$25/hr</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="marketplace" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-square bg-muted rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">MacBook Pro 2021</h3>
              <p className="text-sm text-muted-foreground mb-2">Perfect condition, barely used</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">$1,200</span>
                <Badge>For Sale</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="space-y-4">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-muted rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">Alex Johnson</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Sarah is an amazing tutor! She helped me understand React concepts that I was struggling with for
                  weeks."
                </p>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
